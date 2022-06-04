const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const navbar = document.querySelector("nav");

const main = document.querySelector("main");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

const loading = document.querySelector(".loading-page");

let scrollPoss = window.pageYOffset;

window.addEventListener("load", vanish);

function vanish() {
    loading.classList.add("disappear");
    body.classList.remove("loading");
}

function closeNav() {
    nav.className = "nav-links";
    menu.className = "menu";

    navLinks.forEach((link, index) => {
        link.style.animation = "";
    });
}

// showing and hiding navbar on scroll
window.onscroll = function () {
    const currentPoss = window.pageYOffset;
    if (scrollPoss > currentPoss) {
        navbar.style.top = "0vh";
    }
    
    else {
        navbar.style.top = "-11vh";
    }
    scrollPoss = currentPoss;
}

// Toggle NAV
menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    // Menu animation
    menu.classList.toggle("toggle");
});

// when clicked on main > close navlinks
main.addEventListener("click", () => {
    closeNav();
});

// when clicked on footer > close navlinks
footer.addEventListener("click", () => {
    closeNav();
});

window.onload = function() {
    navbar.style.top = "0vh";
    if (nav.style.transition) {
        nav.style.transition = "";
    }
    else {
        nav.style.transition = `transform 0.4s ease-in`;
    }
}