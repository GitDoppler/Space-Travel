const techName = document.querySelector(".tech-name");
const techDescription = document.querySelector(".tech-description");
const image = document.getElementById("image");
const imageDesktop = document.getElementById("imageDesktop");
const selectors = document.querySelectorAll(".tech-selector");
const containerMain = document.querySelector(".wrapper-container");

let technology = [];

function clearAndSelect(index) {
    for (let k = 0; k < selectors.length; k++) {
        if (selectors[k].classList.contains("whiteBG") == true) {
            selectors[k].classList.remove("whiteBG");
            selectors[k].classList.remove("black");
        }
    }
    selectors[index].classList.add("whiteBG");
    selectors[index].classList.add("black");
}

containerMain.addEventListener("animationend", () => {
    containerMain.classList.remove("fadeOutIn");
});

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (categories) {
        technology = categories.technology;
        for (let i = 0; i < selectors.length; i++) {
            selectors[i].addEventListener("click", () => {
                containerMain.classList.remove("fadeOutIn");
                setTimeout(() => {
                    containerMain.classList.add("fadeOutIn");
                }, 20); // If no delay then animation removal and adding doesnt work
                setTimeout(() => {
                    clearAndSelect(i);
                    techName.innerHTML = technology[i].name.toUpperCase();
                    techDescription.innerHTML = technology[i].description;
                    image.src = technology[i].images.landscape;
                    imageDesktop.src = technology[i].images.portrait;
                }, 500)
            })
        }
    })