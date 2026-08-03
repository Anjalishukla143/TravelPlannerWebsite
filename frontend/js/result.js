console.log("AI RESULT PAGE LOADED");


// =======================================
// USER DATA FROM LOCAL STORAGE
// =======================================

const destination =
(localStorage.getItem("destination") || "").trim();

const days =
parseInt(localStorage.getItem("days")) || 3;

const budget =
localStorage.getItem("budget") || "Moderate";

const food =
localStorage.getItem("food") || "Veg";

const travelMode =
localStorage.getItem("travelMode") || "Car";

const travelType =
localStorage.getItem("travelType") || "Solo";

const people =
parseInt(localStorage.getItem("people")) || 1;


console.log({

destination,
days,
budget,
food,
travelMode,
travelType,
people

});



// =======================================
// HTML ELEMENTS
// =======================================

const title =
document.getElementById("title");

const summary =
document.getElementById("summary");

const places =
document.getElementById("places");

const foodBox =
document.getElementById("food");

const hotels =
document.getElementById("hotels");

const budgetBox =
document.getElementById("budget");

const bestTime =
document.getElementById("bestTime");

const plan =
document.getElementById("plan");

const tips =
document.getElementById("tips");

// ================================
// RESULT VIDEO
// ================================

const resultVideo = document.getElementById("resultVideo");


if(resultVideo){

    const videoName = destination
    .toLowerCase()
    .trim()
    .replace(/\s+/g,"-");


    const videoPath = "../videos/" + videoName + ".mp4";


    console.log("VIDEO TRYING:", videoPath);


    resultVideo.src = videoPath;


    resultVideo.load();


    resultVideo.play()
    .then(()=>{
        console.log("VIDEO PLAYING");
    })
    .catch(err=>{
        console.log("VIDEO ERROR:",err);
    });

}

// =======================================
// LOADING MESSAGE
// =======================================

function showLoading(){

summary.innerHTML = `

<div class="ai-loading">

<h2>Creating Your AI Trip...</h2>

<div class="loader"></div>

<p id="loadingText">

Finding famous places...

</p>

</div>

`;



const steps=[

"Finding famous places...",
"Selecting best hotels...",
"Planning your itinerary...",
"Calculating your budget...",
"Adding travel tips...",
"Almost Ready..."

];

let i=0;

const text=document.getElementById("loadingText");

const timer=setInterval(()=>{

i++;

if(i<steps.length){

text.innerHTML=steps[i];

}
else{

clearInterval(timer);

}

},700);

}




// =======================================
// ERROR MESSAGE
// =======================================

function showError(message){


summary.innerHTML = `

<div class="error">

<h2>

Unable to generate trip

</h2>

<p>

${message}

</p>

</div>

`;


}



// =======================================
// GENERATE AI PLAN
// =======================================

async function generateAIPlan(){


showLoading();


try{


const response =

await fetch(

"http://localhost:3000/ai",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

destination,

days,

people,

budget,

food,

travelMode,

travelType

})

}

);



if(!response.ok){

throw new Error("Server Error");

}



const data =
await response.json();



if(!data.reply){

throw new Error("Empty AI Response");

}



let reply =

data.reply
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();



const trip =
JSON.parse(reply);



console.log("AI RESULT",trip);



// NEXT PART
showTrip(trip);


}

catch(error){

console.log(error);

showError(error.message);

}


}
// =======================================
// SHOW AI TRIP
// =======================================

function showTrip(trip){

// -----------------------------
// TITLE
// -----------------------------

title.innerHTML =
trip.title || `${destination} Trip Planner`;
document.getElementById("welcomeTitle").innerHTML =
`Welcome to ${destination}!`;

document.getElementById("welcomeMessage").innerHTML =
`Your <b>${days}-day</b> <b>${budget}</b> budget <b>${travelType}</b> trip has been successfully planned by AI.

This itinerary includes famous tourist places, recommended hotels, restaurants, local food, estimated expenses and useful travel tips specially prepared for your journey.`;


// -----------------------------
// SUMMARY
// -----------------------------

summary.innerHTML = `

<p><b>📍 Destination:</b> ${destination}</p>

<p><b>📅 Duration:</b> ${days} Days</p>

<p><b>👥 Travellers:</b> ${people}</p>

<p><b>🚗 Travel Mode:</b> ${travelMode}</p>

<p><b>🎒 Travel Type:</b> ${travelType}</p>

<p><b>💰 Budget:</b> ${budget}</p>

<hr>

<p>

${trip.tripSummary || ""}

</p>

`;




// -----------------------------
// PLACES
// -----------------------------

places.innerHTML = "";

(trip.places || []).forEach(place=>{

places.innerHTML += `

<div class="mini-card">

📍 ${place}

</div>

`;

});




// -----------------------------
// FOOD
// -----------------------------

let foodHTML = "";

if(food === "Veg"){

foodHTML += "<h3>🥗 Veg Restaurants</h3>";

(trip.vegRestaurants || []).forEach(item=>{

foodHTML += `

<div class="mini-card">

${item}

</div>

`;

});

}

else if(food === "Non-Veg"){

foodHTML += "<h3>🍗 Non Veg Restaurants</h3>";

(trip.nonVegRestaurants || []).forEach(item=>{

foodHTML += `

<div class="mini-card">

${item}

</div>

`;

});

}

else{

foodHTML += "<h3>🥗 Veg Restaurants</h3>";

(trip.vegRestaurants || []).forEach(item=>{

foodHTML += `

<div class="mini-card">

${item}

</div>

`;

});

foodHTML += "<br><h3>🍗 Non Veg Restaurants</h3>";

(trip.nonVegRestaurants || []).forEach(item=>{

foodHTML += `

<div class="mini-card">

${item}

</div>

`;

});

}



foodHTML += "<br><h3>🍽 Famous Food</h3>";

(trip.famousFood || []).forEach(item=>{

foodHTML += `

<div class="mini-card">

${item}

</div>

`;

});



foodBox.innerHTML = foodHTML;




// -----------------------------
// HOTELS
// -----------------------------

hotels.innerHTML = "";

(trip.hotels || []).forEach(hotel=>{

hotels.innerHTML += `

<div class="hotel-card">

<div class="hotel-top">

<span class="recommended">

⭐ Recommended

</span>

</div>

<h2>${hotel.name}</h2>

<p>

📍 ${hotel.location || hotel.address || "Prime Location"}

</p>

<p>

💰 ₹${hotel.price} / Night

</p>

<div class="rating">

⭐⭐⭐⭐☆

</div>

</div>

`;

});
// =======================================
// BUDGET
// =======================================

budgetBox.innerHTML = `

<div class="budget-card">

<h3>🚗 Travel</h3>

<p>₹${trip.budget.travel}</p>

</div>


<div class="budget-card">

<h3>🏨 Hotel</h3>

<p>₹${trip.budget.hotel}</p>
<p>👥 ${trip.budget.travellers} Traveller(s)</p>

</div>


<div class="budget-card">

<h3>🍽 Food</h3>

<p>₹${trip.budget.food}</p>

</div>


<div class="budget-card">

<h3>🛍 Shopping</h3>

<p>₹${trip.budget.shopping}</p>

</div>


<div class="budget-card total-budget">

<h3>💰 Total</h3>

<p>₹${trip.budget.total}</p>

</div>

`;



// =======================================
// BEST TIME
// =======================================

bestTime.innerHTML =
trip.bestTime || "Any time of the year";



// =======================================
// DAY WISE PLAN
// =======================================

plan.innerHTML = "";

(trip.dayWisePlan || []).slice(0, days).forEach(day=>{

plan.innerHTML += `

<div class="day-card">

<h3>${day.day}</h3>

<p>
🌅 <b>Morning</b><br>
${day.morning}
</p>

<br>

<p>
☀ <b>Afternoon</b><br>
${day.afternoon}
</p>

<br>

<p>
🌙 <b>Evening</b><br>
${day.evening}
</p>

</div>

`;

});



// =======================================
// TRAVEL TIPS
// =======================================

tips.innerHTML = "";

(trip.travelTips || []).forEach(tip=>{

tips.innerHTML += `

<div class="mini-card">

💡 ${tip}

</div>

`;

});

} // <-- showTrip() ends here



// =======================================
// PAGE LOAD
// =======================================
// ================================
// LOAD DESTINATION VIDEO
// ================================

function loadResultVideo(){

    const resultVideo =
    document.getElementById("resultVideo");


    if(!resultVideo){
        console.log("VIDEO ELEMENT NOT FOUND");
        return;
    }


    const videoName =
    destination
    .toLowerCase()
    .trim()
    .replace(/\s+/g,"-");


    const path =
    "../videos/" + videoName + ".mp4";


    console.log("VIDEO PATH:",path);


    resultVideo.src = path;

    resultVideo.load();


    resultVideo.onloadeddata = ()=>{

        console.log("VIDEO READY");

        resultVideo.play();

    };


    resultVideo.onerror = ()=>{

        console.log("VIDEO NOT FOUND:",path);

    };


}
window.onload = function(){

loadResultVideo();

generateAIPlan();

};
