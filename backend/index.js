import Replicate from 'replicate'
import dotenv from 'dotenv'
dotenv.config()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})
const model = 'abiruyt/text-extract-ocr:a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61'
const input = {
  image: 'https://www.thenomadicvegan.com/wp-content/uploads/2019/02/Primi-piatto.jpg',
}
const output = await replicate.run(model, { input })
console.log(output)

import OpenAI from "openai";
const openai = new OpenAI( {apiKey: process.env.API_KEY} );

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a translator for menus in foreign languages." },
        {
            role: "user",
            content: output,
        },
    ],
});

console.log("starting openAI call");
console.log(completion.choices[0].message.content);

