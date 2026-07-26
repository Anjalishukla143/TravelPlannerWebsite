// Start Your Trip button

function openPlanner(){

    window.location.href = "planner.html";

}



// Video card se destination lena

function openPlannerWithDestination(place){

    window.location.href = 
    "planner.html?destination=" + place;

}



// Planner page load hone par destination fill karna

window.onload = function(){

    const params = new URLSearchParams(
        window.location.search
    );


    const destination = params.get("destination");


    if(destination){

        document.getElementById("destination").value = destination;

    }

};
document.getElementById("plannerForm").addEventListener("submit", function(e){

    e.preventDefault();


    let destination = document.getElementById("destination").value;
console.log("Form Destination:", destination);

    let days = document.querySelectorAll("input")[1].value;


    let budget = document.querySelectorAll("input")[2].value;


    let food = document.querySelectorAll("select")[2].value;



    localStorage.setItem("destination", destination);

    localStorage.setItem("days", days);

    localStorage.setItem("budget", budget);

    localStorage.setItem("food", food);



    window.location.href = "result.html";


});