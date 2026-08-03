document.addEventListener("DOMContentLoaded", function () {


    const cards = document.querySelectorAll(".video-card");


    cards.forEach(card => {


        card.addEventListener("click", function () {


            const place = card.querySelector("h3").innerText;


            window.location.href =
            "planner.html?destination=" + encodeURIComponent(place);


        });



        const title = card.querySelector("h3");


        if(title){


            const placeName = title.innerText;


            title.style.display = "none";


            const overlay = document.createElement("div");


            overlay.className = "card-overlay";


            overlay.innerHTML = `

                <h3>${placeName}</h3>

                <button>
                EXPLORE
                </button>

            `;


            card.appendChild(overlay);


        }
document.querySelectorAll(".categories button").forEach(button => {


    button.addEventListener("click", function(){


        const category = this.innerText.toLowerCase();



        document.querySelectorAll(".video-card").forEach(card => {


            const name = card.querySelector(".card-overlay h3")?.innerText.toLowerCase()
            || card.querySelector("h3")?.innerText.toLowerCase();



            if(category === "all"){

                card.style.display = "block";

            }

            else if(name.includes(category)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }


        });


    });


});

    });


});
