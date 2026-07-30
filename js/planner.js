// Start Your Trip button

function openPlanner() {
    window.location.href = "planner.html";
}

// Video card se destination lena

function openPlannerWithDestination(place) {
    window.location.href = "planner.html?destination=" + encodeURIComponent(place);
}

// Planner page load hone par

window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    const destination = params.get("destination");

    if (destination) {
        document.getElementById("destination").value = destination;
    }

    // Travel Type Change

    const travelType = document.getElementById("travelType");
    const friendsDiv = document.getElementById("friendsCountDiv");
    const familyDiv = document.getElementById("familyCountDiv");

    travelType.addEventListener("change", function () {

        friendsDiv.style.display = "none";
        familyDiv.style.display = "none";

        if (this.value === "Friends") {
            friendsDiv.style.display = "block";
        }

        if (this.value === "Family") {
            familyDiv.style.display = "block";
        }

    });

};


// Generate Plan

document.getElementById("plannerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const destination = document.getElementById("destination").value.trim().toLowerCase();

    const days = document.getElementById("days").value;

    const budget = document.getElementById("budget").value;

    const travelMode = document.getElementById("travelMode").value;

    const travelType = document.getElementById("travelType").value;

    const food = document.getElementById("food").value;

    let people = 1;

    if (travelType === "Friends") {

        people = document.getElementById("friendsCount").value;

    }

    else if (travelType === "Family") {

        people = document.getElementById("familyCount").value;

    }

    localStorage.setItem("destination", destination);

    localStorage.setItem("days", days);

    localStorage.setItem("budget", budget);

    localStorage.setItem("travelMode", travelMode);

    localStorage.setItem("travelType", travelType);

    localStorage.setItem("food", food);

    localStorage.setItem("people", people);

    window.location.href = "result.html";

});