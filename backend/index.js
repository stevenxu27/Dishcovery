import express from "express";
import Replicate from "replicate";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const replicateObject = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});

async function getDishImage(dishName) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          query: dishName,
          number: 1,
          apiKey: process.env.SPOONACULAR_API_KEY,
        },
      }
    );

    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0].image;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching image for ${dishName}:`, error);
    return null;
  }
}

app.post("/api/upload-menu", async (req, res) => {
  try {
    const imageUrl =
      "https://www.thenomadicvegan.com/wp-content/uploads/2019/02/Primi-piatto.jpg";

    const model =
      "abiruyt/text-extract-ocr:a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61";
    const input = { image: imageUrl };

    const output = await replicateObject.run(model, { input });
    console.log("OCR output:", output);

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a menu parser that first translates menus into English, then converts menu text into structured JSON data. 
                   For each menu item, extract:
                   - the dish name in simple english
                   - price 
                   - description in english
                   Format the response as a JSON array of menu items.
                   Example format:
                   {
                     "menuItems": [
                       {
                         "name": "Dish Name",
                         "price": "€00.00",
                         "description": "English description",
                         "altText": "Image of [Dish Name]"
                       }
                     ]
                   }`,
        },
        {
          role: "user",
          content: `Parse this menu text into structured JSON: ${output}`,
        },
      ],
    });

    console.log("OpenAI completion:", completion.choices[0].message.content);

    // Sanitize the OpenAI response
    let sanitizedContent = completion.choices[0].message.content
      .replace(/```json|```/g, "") // Remove backticks and JSON markers
      .trim();

    // Parse the OpenAI response back into an object
    let menuData;
    try {
      menuData = JSON.parse(sanitizedContent);
    } catch (error) {
      console.error("Error parsing OpenAI response:", error);
      menuData = {
        menuItems: [],
      };
    }

    // Add any missing fields and validate data
    const processedMenuItems = await Promise.all(
      (menuData.menuItems || []).map(async (item) => {
        const imageUrl = await getDishImage(item.name);
        return {
          ...item,
          vegImage:
            imageUrl ||
            "https://cdn3d.iconscout.com/3d/premium/thumb/fast-food-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--junk-burger-cheeseburger-menu-pack-drink-illustrations-4800414.png?f=webp",
          altText: `Image of ${item.name}`,
        };
      })
    );

    console.log(processedMenuItems);

    res.json({
      success: true,
      menuItems: processedMenuItems,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process image" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
