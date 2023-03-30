const planetImage = document.querySelector(".planet-image").children[0];
const planetName = document.querySelector(".planet-name");
const planetDescription = document.querySelector(".planet-description");
const planetKM = document.querySelector(".planet-km");
const planetDays = document.querySelector(".planet-days");
const planets = document.querySelectorAll(".planet-selection-column");
const whiteRectangles = document.querySelectorAll(".selection-rectangle");
const containerMain = document.querySelector(".container--main");
const selectionNames = document.querySelectorAll(".selection-name");
whiteRectangles[0].classList.add("chosen"); //Initialize with moon;


for (let i = 0; i < planets.length; i++) {
    planets[i].addEventListener("click", () => {
        containerMain.classList.remove("fadeOutIn");
        changeContent(planets[i]);
    });
}

function disableSelection() {
    for (let i = 0; i < whiteRectangles.length; i++) {
        // console.log(window.getComputedStyle(whiteRectangles[i]).getPropertyValue("visibility"));
        if (whiteRectangles[i].classList.contains("chosen") == true) {
            whiteRectangles[i].classList.remove("chosen");
        }
    }
}

for (let i = 0; i < selectionNames.length; i++) {
    selectionNames[i].addEventListener("mouseover", () => {
        whiteRectangles[i].style.opacity = "0.25";
    });
    selectionNames[i].addEventListener("mouseout", () => {
        whiteRectangles[i].style.opacity = "0";
    });
}


function changeContent(planet) {
    disableSelection();
    planet.children[1].classList.add("chosen");
    // console.log(planet.children[0].innerHTML);
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            for (let destinationName of products.destinations) {
                if (destinationName.name.toUpperCase() == planet.children[0].innerHTML) {
                    containerMain.addEventListener("animationend", () => {
                        containerMain.classList.remove("fadeOutIn");
                    });
                    containerMain.classList.add("fadeOutIn");
                    setTimeout(() => {
                        planetName.innerHTML = destinationName.name.toUpperCase();
                        planetDescription.innerHTML = destinationName.description;
                        planetKM.innerHTML = destinationName.distance;
                        planetDays.innerHTML = destinationName.travel;
                        planetImage.src = destinationName.images.png;
                    }, 500);
                }
            }
        })
}

