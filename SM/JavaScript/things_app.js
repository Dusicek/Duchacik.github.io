const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

const navbar = document.querySelector("nav");

const main = document.querySelector("main");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

const loading = document.querySelector(".loading-page");

// scrolling down > values of elements
const navDefVal = "0px";
const navHiddVal = "-90px";

let scrollPoss = window.pageYOffset;

window.addEventListener("load", vanish);

function vanish() {
    loading.classList.add("disappear");
    body.classList.remove("loading");
};

function closeNav() {
    navLinks.className = "nav-links";
    menu.className = "menu";

    navLinksLi.forEach((link, index) => {
        link.style.animation = "";
    });
};

// showing and hiding navbar on scroll
window.onscroll = function () {
    const currentPoss = window.pageYOffset;
    if (scrollPoss > currentPoss) {
        navbar.style.top = navDefVal;
    }

    else if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 150 )) {
        navbar.style.top = navDefVal;
    }

    else if (scrollPoss < 150) {
        navbar.style.top = navDefVal;
    }
    
    else {
        navbar.style.top = navHiddVal;
    }
    scrollPoss = currentPoss;
};

// Toggle NAV
menu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    // Animate links
    navLinksLi.forEach((link, index) => {
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
    if (navLinks.style.transition) {
        navLinks.style.transition = "";
    }

    else {
        navLinks.style.transition = `transform 0.4s ease-in`;
    }

    navbar.style.top = "0px";
};