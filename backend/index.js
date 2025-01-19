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
        { role: 'system', content: 'You are a translator for menus in foreign languages.' },
        { role: 'user', content: output },
      ],
    });

    console.log('OpenAI completion:', completion.choices[0].message.content);
    res.json({ text: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

const PORT = 8000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
