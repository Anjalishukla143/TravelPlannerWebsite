document.getElementById("plannerForm").addEventListener("submit", function(e){

    e.preventDefault();


    const destination =
    document.getElementById("destination").value.trim();


    const days =
    document.getElementById("days").value;


    const budget =
    document.getElementById("budget").value;


    const travelMode =
    document.getElementById("travelMode").value;


    const travelType =
    document.getElementById("travelType").value;


    const food =
    document.getElementById("food").value;



    if(destination === ""){

        alert("Please enter destination");

        return;

    }



    // SAVE DATA

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
        travelType
    );


    localStorage.setItem(
        "food",
        food
    );



    console.log("SAVED DESTINATION:", destination);



    window.location.href = "result.html";


});