console.log("SCRIPT JS LOADED");

// ===========================================
// DESTINATIONS - BEACHES
// ===========================================

const destinations = [


{ name:"Goa", category:"Beaches", video:"../videos/goa.mp4" },

{ name:"Andaman", category:"Beaches", video:"../videos/andaman.mp4" },

{ name:"Lakshadweep", category:"Beaches", video:"../videos/lakshadweep.mp4" },

{ name:"Pondicherry", category:"Beaches", video:"../videos/pondicherry.mp4" },

{ name:"Mumbai", category:"Beaches", video:"../videos/mumbai.mp4" },

{ name:"Gokarna", category:"Beaches", video:"../videos/gokarna.mp4" },

{ name:"Varkala", category:"Beaches", video:"../videos/varkala.mp4" },

{ name:"Kovalam", category:"Beaches", video:"../videos/kovalam.mp4" },

{ name:"Puri", category:"Beaches", video:"../videos/puri.mp4" },

{ name:"Digha", category:"Beaches", video:"../videos/digha.mp4" },

{ name:"Alibaug", category:"Beaches", video:"../videos/alibaug.mp4" },

{ name:"Tarkarli", category:"Beaches", video:"../videos/tarkarli.mp4" },

{ name:"Marari Beach", category:"Beaches", video:"../videos/marari.mp4" },

{ name:"Radhanagar Beach", category:"Beaches", video:"../videos/radhanagar.mp4" },

{ name:"Baga Beach", category:"Beaches", video:"../videos/baga.mp4" },


{ name:"Candolim Beach", category:"Beaches", video:"../videos/candolim.mp4" },

{ name:"Mahabalipuram Beach", category:"Beaches", video:"../videos/mahabalipuram.mp4" },

{ name:"Kanyakumari Beach", category:"Beaches", video:"../videos/kanyakumari.mp4" },

{ name:"Mandarmani Beach", category:"Beaches", video:"../videos/mandarmani.mp4" },

{ name:"Delhi", category:"Cities", video:"../videos/delhi.mp4" },

{ name:"Mumbai", category:"Cities", video:"../videos/mumbai.mp4" },

{ name:"Bengaluru", category:"Cities", video:"../videos/bengaluru.mp4" },

{ name:"Hyderabad", category:"Cities", video:"../videos/hyderabad.mp4" },

{ name:"Chennai", category:"Cities", video:"../videos/chennai.mp4" },

{ name:"Kolkata", category:"Cities", video:"../videos/kolkata.mp4" },

{ name:"Pune", category:"Cities", video:"../videos/pune.mp4" },

{ name:"Ahmedabad", category:"Cities", video:"../videos/ahmedabad.mp4" },

{ name:"Jaipur", category:"Cities", video:"../videos/jaipur.mp4" },

{ name:"Lucknow", category:"Cities", video:"../videos/lucknow.mp4" },

{ name:"Chandigarh", category:"Cities", video:"../videos/chandigarh.mp4" },

{ name:"Bhopal", category:"Cities", video:"../videos/bhopal.mp4" },

{ name:"Indore", category:"Cities", video:"../videos/indore.mp4" },

{ name:"Nagpur", category:"Cities", video:"../videos/nagpur.mp4" },

{ name:"Surat", category:"Cities", video:"../videos/surat.mp4" },

{ name:"Vadodara", category:"Cities", video:"../videos/vadodara.mp4" },

{ name:"Patna", category:"Cities", video:"../videos/patna.mp4" },

{ name:"Raipur", category:"Cities", video:"../videos/raipur.mp4" },

{ name:"Bhubaneswar", category:"Cities", video:"../videos/bhubaneswar.mp4" },

{ name:"Visakhapatnam", category:"Cities", video:"../videos/visakhapatnam.mp4" },

{ name:"Agra", category:"Cities", video:"../videos/agra.mp4" },

{ name:"Amritsar", category:"Cities", video:"../videos/amritsar.mp4" },

{ name:"Varanasi", category:"Cities", video:"../videos/varanasi.mp4" },

{ name:"Udaipur", category:"Cities", video:"../videos/udaipur.mp4" },

{ name:"Jodhpur", category:"Cities", video:"../videos/jodhpur.mp4" },

{ name:"Jaisalmer", category:"Cities", video:"../videos/jaisalmer.mp4" },

{ name:"Mysore", category:"Cities", video:"../videos/mysore.mp4" },

{ name:"Kochi", category:"Cities", video:"../videos/kochi.mp4" },







{ name:"Nashik", category:"Cities", video:"../videos/nashik.mp4" },



{ name:"Guwahati", category:"Cities", video:"../videos/guwahati.mp4" },

{ name:"Shillong", category:"Cities", video:"../videos/shillong.mp4" },

{ name:"Gangtok", category:"Cities", video:"../videos/gangtok.mp4" },

{ name:"Dehradun", category:"Cities", video:"../videos/dehradun.mp4" },

{ name:"Haridwar", category:"Cities", video:"../videos/haridwar.mp4" },

{ name:"Rishikesh", category:"Cities", video:"../videos/rishikesh.mp4" },



{ name:"Leh", category:"Cities", video:"../videos/ladakh.mp4" },

{ name:"Jammu", category:"Cities", video:"../videos/kashmir.mp4" },





{ name:"Dharamshala", category:"Cities", video:"../videos/dharamshala.mp4" },





{ name:"Tirupati", category:"Cities", video:"../videos/tirupati.mp4" },

{ name:"Manali", category:"Mountains", video:"../videos/manali.mp4" },

{ name:"Shimla", category:"Mountains", video:"../videos/shimla.mp4" },

{ name:"Mussoorie", category:"Mountains", video:"../videos/mussoorie.mp4" },

{ name:"Nainital", category:"Mountains", video:"../videos/nainital.mp4" },

{ name:"Auli", category:"Mountains", video:"../videos/auli.mp4" },

{ name:"Leh Ladakh", category:"Mountains", video:"../videos/ladakh.mp4" },

{ name:"Kashmir", category:"Mountains", video:"../videos/kashmir.mp4" },

{ name:"Sikkim", category:"Mountains", video:"../videos/sikkim.mp4" },

{ name:"Dharamshala", category:"Mountains", video:"../videos/dharamshala.mp4" },

{ name:"Kasauli", category:"Mountains", video:"../videos/kasauli.mp4" },

{ name:"Spiti Valley", category:"Mountains", video:"../videos/spitivalley.mp4" },

{ name:"Tawang", category:"Mountains", video:"../videos/tawang.mp4" },

{ name:"Gangtok", category:"Mountains", video:"../videos/gangtok.mp4" },

{ name:"Mount Abu", category:"Mountains", video:"../videos/mountabu.mp4" },

{ name:"Munnar", category:"Mountains", video:"../videos/munnar.mp4" },

{ name:"Agra", category:"Heritage", video:"../videos/agra.mp4" },

{ name:"Jaipur", category:"Heritage", video:"../videos/jaipur.mp4" },

{ name:"Udaipur", category:"Heritage", video:"../videos/udaipur.mp4" },

{ name:"Jodhpur", category:"Heritage", video:"../videos/jodhpur.mp4" },

{ name:"Jaisalmer", category:"Heritage", video:"../videos/jaisalmer.mp4" },

{ name:"Khajuraho", category:"Heritage", video:"../videos/khajuraho.mp4" },

{ name:"Hampi", category:"Heritage", video:"../videos/hampi.mp4" },

{ name:"Mysore", category:"Heritage", video:"../videos/mysore.mp4" },

{ name:"Mahabalipuram", category:"Heritage", video:"../videos/mahabalipuram.mp4" },

{ name:"Ajanta Ajanta", category:"Heritage", video:"../videos/ajanta.mp4" },


{ name:"Bodh Gaya", category:"Heritage", video:"../videos/bodhgaya.mp4" },

{ name:"Bikaner", category:"Heritage", video:"../videos/bikaner.mp4" },

{ name:"Pushkar", category:"Heritage", video:"../videos/pushkar.mp4" },

{ name:"Somnath", category:"Heritage", video:"../videos/somnath.mp4" },

{ name:"Dwarka", category:"Heritage", video:"../videos/dwarka.mp4" },

{ name:"Kerala", category:"Nature", video:"../videos/kerala.mp4" },

{ name:"Darjeeling", category:"Nature", video:"../videos/darjeeling.mp4" },

{ name:"Coorg", category:"Nature", video:"../videos/coorg.mp4" },

{ name:"Meghalaya", category:"Nature", video:"../videos/meghalaya.mp4" },

{ name:"Shillong", category:"Nature", video:"../videos/shillong.mp4" },

{ name:"Ooty", category:"Nature", video:"../videos/ooty.mp4" },

{ name:"Chikmagalur", category:"Nature", video:"../videos/chikmagalur.mp4" },

{ name:"Kaziranga", category:"Nature", video:"../videos/kaziranga.mp4" },

{ name:"Sundarbans", category:"Nature", video:"../videos/sundarban.mp4" },

{ name:"Ziro Valley", category:"Nature", video:"../videos/zirovalley.mp4" },

{ name:"Kutch", category:"Nature", video:"../videos/kutch.mp4" },

{ name:"Ranchi", category:"Nature", video:"../videos/ranchi.mp4" },

{ name:"Rishikesh", category:"Adventure", video:"../videos/rishikesh.mp4" },

{ name:"Leh Ladakh", category:"Adventure", video:"../videos/ladakh.mp4" },

{ name:"Auli", category:"Adventure", video:"../videos/auli.mp4" },

{ name:"Ranthambore", category:"Adventure", video:"../videos/ranthambore.mp4" },

{ name:"Jim Corbett", category:"Adventure", video:"../videos/jimcorbett.mp4" },

{ name:"Gir National Park", category:"Adventure", video:"../videos/gir-national-park.mp4" },

{ name:"Spiti Valley", category:"Adventure", video:"../videos/spitivalley.mp4" },

{ name:"Tawang", category:"Adventure", video:"../videos/tawang.mp4" }
];



// ===========================================
// ELEMENTS
// ===========================================

const videoGrid = document.getElementById("videoGrid");
const buttons = document.querySelectorAll(".category-btn");
const startBtn = document.getElementById("startTripBtn");

// ===========================================
// LOAD VIDEOS
// ===========================================

function loadVideos(category) {

    videoGrid.innerHTML = "";

    const filtered = destinations.filter(place => place.category === category);

    filtered.forEach(place => {

        videoGrid.innerHTML += `
        <div class="video-card" onclick="openPlanner('${place.name}')">

            <video autoplay muted loop playsinline>
                <source src="${place.video}" type="video/mp4">
            </video>

            <h3>${place.name}</h3>

        </div>
        `;

    });

}
// ===========================================
// CATEGORY BUTTONS
// ===========================================

if (buttons.length > 0) {

    buttons.forEach(btn => {

    btn.addEventListener("click", function () {

        buttons.forEach(b => b.classList.remove("active"));

        this.classList.add("active");

        loadVideos(this.dataset.category);

    });

});

}

// ===========================================
// START TRIP BUTTON
// ===========================================

if (startBtn) {

    startBtn.addEventListener("click", function () {

        window.location.href = "planner.html";

    });

}

// ===========================================
// OPEN PLANNER
// ===========================================

function openPlanner(destination) {

    localStorage.setItem("destination", destination);

    window.location.href =
        "planner.html?destination=" +
        encodeURIComponent(destination);

}

// ===========================================
// PLAY VIDEOS AFTER LOADING
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    loadVideos();

    setTimeout(() => {

        document.querySelectorAll(".video-card video").forEach(video => {

            video.play().catch(() => {});

        });

    }, 200);

});
loadVideos("Beaches");