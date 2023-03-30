let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");
let menuClose = document.querySelector(".menu-close");
let rectangles = document.querySelectorAll(".rectangle");
let rectanglesTablet = document.querySelectorAll(".rectangle-tablet");
const links = document.querySelectorAll(".links");

menuIcon.addEventListener("click", () => {
    menu.style.right = "0";
});

menuClose.addEventListener("click", () => {
    menu.style.right = `-${menu.offsetWidth}px`;
});


let url = window.location.pathname;
url = url.replace(".html", "");
url = url.replace("/", "");

// Correspondence string-to-index. Can be done without this.
const map = new Map([
    ["home", 0],
    ["destination", 1],
    ["crew", 2],
    ["technology", 3],
]);
rectangles.item(map.get(url)).style.visibility = "visible";
rectanglesTablet.item(map.get(url)).classList.add("chosen");


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
        rectanglesTablet[i].style.opacity = "0.25";
    });
    links[i].addEventListener("mouseout", () => {
        rectanglesTablet[i].style.opacity = "0";
    });
}
