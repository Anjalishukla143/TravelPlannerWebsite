const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());


const groq = new Groq({

    apiKey: process.env.GROQ_API_KEY

});



app.post("/ai", async(req,res)=>{


try{


const {

destination,
days,
people,
budget,
food,
travelMode,
travelType

}=req.body;



console.log("USER DESTINATION:", destination);


const prompt = `

You are a professional India Travel Planner AI.

The destination is FIXED.

Destination: ${destination}

Never change the destination.
Never recommend another destination.
Generate the complete travel plan ONLY for ${destination}.

User Details:

Destination: ${destination}
Days: ${days}
Travellers: ${people}
Budget: ${budget}
Food Preference: ${food}
Travel Mode: ${travelMode}
Travel Type: ${travelType}
IMPORTANT BUDGET RULES:

- Travel Type can be Solo, Friends, Family or Couple.

- Travellers = ${people}

- Calculate ALL costs according to the number of travellers.

- If Travel Type is Solo:
All costs are for 1 traveller.

- If Travel Type is Friends:
Multiply hotel, food, transport and total budget according to ${people} friends.

- If Travel Type is Family:
Multiply hotel, food, transport and total budget according to ${people} family members.

- If Travel Type is Couple:
Calculate budget for exactly 2 people unless another traveller count is provided.

- The budget.total MUST include the cost for ALL travellers.

- Never calculate budget for one person when travellers are more than one.
Instructions:

- Return ONLY valid JSON.
- No markdown.
- No explanation.
- Generate exactly ${days} day(s).
- Use realistic tourist places.
- Generate exactly 3 hotel recommendations.

- Hotels MUST depend on the selected budget.

- If Budget is Lower:
Suggest only affordable budget hotels.

- If Budget is Moderate:
Suggest only good 3-star or 4-star hotels.

- If Budget is Luxury:
Suggest only premium 5-star luxury hotels.

- Never return the same hotels for different budgets.
- Suggest restaurants according to food preference.
- Budget must be in INR.
- Keep the itinerary practical.
- Morning, Afternoon and Evening activities should be different.
- Include local shopping.
- Include famous food.
- Include useful travel tips.

Return this JSON:

{
"title":"",
"tripSummary":"",
"bestTime":"",

"places":[
"",
"",
"",
"",
""
],

"famousFood":[
"",
"",
"",
""
],

"vegRestaurants":[
"",
"",
"",
""
],

"nonVegRestaurants":[
"",
"",
"",
""
],

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
"total":0
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

"travelTips":[
"",
"",
"",
""
]

}

Generate exactly ${days} objects inside dayWisePlan.

`;




const completion =
await groq.chat.completions.create({


model:"llama-3.1-8b-instant",


temperature:0,


messages:[

{

role:"user",

content:prompt

}

]


});



let reply =
completion
.choices[0]
.message
.content;



console.log("AI RESPONSE:",reply);



// remove markdown if any

reply =
reply
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();




// Force title again

let data =
JSON.parse(reply);


data.title =
`${destination} Trip Planner`;



res.json({

reply:JSON.stringify(data)

});



}


catch(error){


console.log(error);


res.status(500).json({

reply:"AI ERROR"

});


}



});





app.listen(3000,()=>{


console.log("AI Server running on port 3000");


});