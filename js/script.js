// ================================
// Elements
// ================================

const videoGrid = document.querySelector(".video-grid");
const buttons = document.querySelectorAll(".categories button");

// ================================
// Create Video Cards
// ================================

function loadVideos(category = "All") {

    videoGrid.innerHTML = "";

    destinations.forEach(place => {

        if (category === "All" || place.category === category) {

            const card = document.createElement("div");

            card.className = "video-card";

            card.innerHTML = `

                <video
                    src="${place.video}"
                    autoplay
                    muted
                    loop
                    playsinline>
                </video>

                <div class="video-title">

                    ${place.name}

                </div>

            `;

            card.addEventListener("click", () => {

                window.location.href =
                "planner.html?destination=" +
                encodeURIComponent(place.name);

            });

            videoGrid.appendChild(card);

        }

    });

}

// ================================
// Category Filter
// ================================

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        loadVideos(button.textContent.trim());

    });

});

// ================================
// Start Button
// ================================

const startButton = document.getElementById("startTrip");

if(startButton){

    startButton.addEventListener("click",()=>{

        window.location.href="planner.html";

    });

}

// ================================
// Load All Videos
// ================================

loadVideos();