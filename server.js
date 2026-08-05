const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"frontend")));

app.get("/",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"frontend","index.html")
    );
});
// ===============================
// GROQ SETUP
// ===============================

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});





// ===============================
// AI ROUTE
// ===============================

app.post("/ai", async (req, res) => {

    try {

        const {
            destination,
            days,
            people,
            budget,
            food,
            travelMode,
            travelType
        } = req.body;

        console.log("========== USER REQUEST ==========");
        console.log(req.body);

        if (!destination) {
            return res.status(400).json({
                message: "Destination is required"
            });
        }
                const prompt = `
You are a professional India Travel Planner AI.

Generate ONLY valid JSON.

Destination: ${destination}
Days: ${days}
Travellers: ${people}
Budget: ${budget}
Food Preference: ${food}
Travel Mode: ${travelMode}
Travel Type: ${travelType}

Rules:

- Never change the destination.
- Generate exactly ${days} day(s).
- Budget in INR.
- Suggest 3 hotels according to budget.
- Include famous places.
- Include famous food.
- Include restaurants.
- Include travel tips.

Return ONLY this JSON format:

{
"title":"",
"tripSummary":"",
"bestTime":"",
"places":["","","","",""],
"famousFood":["","","",""],
"vegRestaurants":["","","",""],
"nonVegRestaurants":["","","",""],
"hotels":[
{
"name":"",
"location":"",
"price":0
},
{
"name":"",
"location":"",
"price":0
},
{
"name":"",
"location":"",
"price":0
}
],
"budget":{
"travel":0,
"hotel":0,
"food":0,
"shopping":0,
"total":0,
"travellers":${people}
},
"dayWisePlan":[
{
"day":"Day 1",
"morning":"",
"afternoon":"",
"evening":""
}
],
"travelTips":["","","",""]
}

Generate exactly ${days} objects inside dayWisePlan.
`;

        console.log("Sending request to Groq...");

        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            temperature: 0.3,
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        });

        let reply = completion.choices[0].message.content;

        console.log("RAW AI RESPONSE:");
        console.log(reply);

        reply = reply
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        let data = JSON.parse(reply);

        data.title = `${destination} Trip Planner`;

        return res.json({
            reply: JSON.stringify(data)
        });
            } catch (error) {

        console.error("========== SERVER ERROR ==========");
        console.error(error);

        if (error.response) {
            console.error(error.response.data);
        }

        return res.status(500).json({
            message: error.message || "Internal Server Error"
        });

    }

});

// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`AI Server running on port ${PORT}`);
});
