# Studyscout

## Description

https://www.dishcoverwith.us/


We decided to try and optimize the menu ordering process upon entering a new/foreign restaurant. Maybe you're trying a new cuisine with no idea what to order, or the menu is an unfamiliar language. With the click of a button, dischovery will allow you to parse through the menu and translate into any language of your choice. It will give visualizations of the available menu items and provide allergy warnings for first-time food enjoyers.

Our backend is implemented mostly with Node.js, as well as Python for audio processing. We used the OpenAI API for speech-to-text translation and will generate a response to your question. Both of those will be sent to our MongoDB database and the web page will update live with the question and response. In addition, we also used ReplicateAI and Spoonacular's APIs to scrape the text off the menu and find similar food pictures for each individual dish. Our front end was designed in Figma and used React, Next.js and Tailwind to create visualization.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run our project, clone into your repository, then run npm install and npm run dev. The website can be visualized at http://localhost:3000/. We currently host at the domain https://www.dishcoverwith.us/. 

## Usage

The user can take a picture of a menu and upload that menu onto our webpage. Our backend will then parse the menu for items, prices, ingredients, and any other useful information. We can then display allergies, food visualization and recommendations, as well as a speech-to-text feature to allow accessibility for those who may be visually impaired or have difficulty reading the menu.

    ```




