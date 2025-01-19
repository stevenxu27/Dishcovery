import express from "express";
import Replicate from "replicate";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const replicateObject = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
});

app.post('/api/upload-menu', async (req, res) => {
  try {
    const imageUrl = "https://www.thenomadicvegan.com/wp-content/uploads/2019/02/Primi-piatto.jpg";

    const model = 'abiruyt/text-extract-ocr:a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61';
    const input = { image: imageUrl };

    const output = await replicateObject.run(model, { input });
    console.log('OCR output:', output);

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a menu parser that first translates menus into English, then converts menu text into structured JSON data. 
                   For each menu item, extract:
                   - name 
                   - price 
                   - description
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
                   }`
        },
        {
          role: 'user',
          content: `Parse this menu text into structured JSON: ${output}`
        },
      ],
    });

    console.log('OpenAI completion:', completion.choices[0].message.content);

    // Sanitize the OpenAI response
    let sanitizedContent = completion.choices[0].message.content
      .replace(/```json|```/g, '') // Remove backticks and JSON markers
      .trim();

    // Parse the OpenAI response back into an object
    let menuData;
    try {
      menuData = JSON.parse(sanitizedContent);
    } catch (error) {
      console.error('Error parsing OpenAI response:', error);
      menuData = {
        menuItems: []
      };
    }

    // Add any missing fields and validate data
    const processedMenuItems = (menuData.menuItems || []).map(item => ({
      ...item,
      vegImage: item.vegImage || "/api/placeholder/400/400",
      altText: item.altText || `Image of ${item.name}`,
    }));

    res.json({
      success: true,
      menuItems: processedMenuItems
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
