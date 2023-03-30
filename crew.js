const crewTitle = document.querySelector(".crew-title");
const crewName = document.querySelector(".crew-name");
const crewDescription = document.querySelector(".crew-description");
const crewImage = document.getElementById("image");
const circles = document.querySelectorAll(".selector-circle");
const containerMain = document.querySelector(".container--main");


let crew = [];


function clearAndSelect(index) {
    for (let k = 0; k < circles.length; k++) {
        if (circles[k].classList.contains("opacity-100") == true) {
            circles[k].classList.remove("opacity-100");
        }
    }
    circles[index].classList.add("opacity-100");
}

containerMain.addEventListener("animationend", () => {
    containerMain.classList.remove("fadeOutIn");
});

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (categories) {
        crew = categories.crew;
        for (let i = 0; i < circles.length; i++) {
            circles[i].addEventListener("click", () => {
                containerMain.classList.remove("fadeOutIn");
                setTimeout(() => {
                    containerMain.classList.add("fadeOutIn");
                }, 20); // If no delay then animation removal and adding doesnt work
                setTimeout(() => {
                    clearAndSelect(i);
                    crewTitle.innerHTML = crew[i].role.toUpperCase();
                    crewName.innerHTML = crew[i].name.toUpperCase();
                    crewDescription.innerHTML = crew[i].bio;
                    crewImage.src = crew[i].images.png;
                }, 500)

            });
        }
    })



