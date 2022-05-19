//navbar
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
//aside
const card = document.querySelector(".card");
const cover = document.querySelector(".cover");
const aside = document.querySelector("aside");
const arrow = document.querySelectorAll(".fa-chevron-down");
//body
const footer = document.querySelector("footer");
const main = document.querySelector("main");

function closeNav() {
    nav.className = "nav-links";
    menu.className = "menu";

    navLinks.forEach((link, index) => {
        link.style.animation = "";
    });
}

function closeAside() {
    aside.className = "closed";
    cover.className = "cover closed";
    card.className = "card";
}

//nav-links animation
menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //Menu animation
    menu.classList.toggle("toggle");
    //closing aside 
    closeAside();
});

// aside submenu animation
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}
// card & aside animation
card.addEventListener("click", () => {
    aside.classList.toggle("closed");
    cover.classList.toggle("closed");

    card.classList.toggle("active");
    closeNav();
});

// not working > overlapping the #nav-links animation
/*
function boddyClick(b) {
    if (b.target.tagName === "NAV" || "FOOTER" || "MAIN") {
        closeAside();
        closeNav();
    }
}*/