console.log("Premium Planner JS Loaded");


// Elements

const form = document.getElementById("plannerForm");

const travelType = document.getElementById("travelType");

const friendsDiv = document.getElementById("friendsCountDiv");

const familyDiv = document.getElementById("familyCountDiv");

const button = document.getElementById("generateTripBtn");




// Show Friends / Family Count

travelType.addEventListener("change", function(){

    if(this.value === "Friends"){

        friendsDiv.style.display="block";
        familyDiv.style.display="none";

    }

    else if(this.value === "Family"){

        familyDiv.style.display="block";
        friendsDiv.style.display="none";

    }

    else{

        friendsDiv.style.display="none";
        familyDiv.style.display="none";

    }

});





// Generate Trip Button

form.addEventListener("submit", function(e){


    e.preventDefault();



    const destination =
    document.getElementById("destination").value.trim();



    const days =
    document.getElementById("days").value;



    const budget =
    document.getElementById("budget").value;



    const travelMode =
    document.getElementById("travelMode").value;



    const type =
    document.getElementById("travelType").value;



    const food =
    document.getElementById("food").value;



    if(destination==="" || days==="" || budget==="" || travelMode==="" || type==="" || food===""){


        alert("Please fill all details");


        return;


    }



    // Button Animation


    button.classList.add("loading");

    button.innerHTML="✈ Generating Trip...";



    button.disabled=true;




    // Save User Data


    localStorage.setItem(
        "destination",
        destination
    );


    localStorage.setItem(
        "days",
        days
    );


    localStorage.setItem(
        "budget",
        budget
    );


    localStorage.setItem(
        "travelMode",
        travelMode
    );


    localStorage.setItem(
        "travelType",
        type
    );


    localStorage.setItem(
        "food",
        food
    );




    if(type==="Friends"){

        localStorage.setItem(
    "people",
    document.getElementById("friendsCount").value
);

    }


    else if(type==="Family"){


       localStorage.setItem(
    "people",
    document.getElementById("familyCount").value
);


    }




    // Redirect after animation


    setTimeout(()=>{


        window.location.href="result.html";


    },2000);



});