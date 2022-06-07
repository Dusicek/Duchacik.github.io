//aside
const card = document.querySelector(".card");
const cover = document.querySelector(".cover");
const aside = document.querySelector("aside");
const arrow = document.querySelectorAll(".fa-chevron-down");

//closing Aside
function closeAside() {
    aside.className = "closed";
    cover.className = "cover closed";
    card.className = "card";
}

// nav-links animation
menu.addEventListener("click", () => {
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

// when clicked on main > close aside
main.addEventListener("click", () => {
    closeAside();
});

// when clicked on footer > close aside
footer.addEventListener("click", () => {
    closeAside();
});

window.onscroll = function () {
    const currentPoss = window.pageYOffset;
    if (scrollPoss > currentPoss) {
        navbar.style.top = "0px";
        aside.style.paddingTop = "75px";
        card.style.top = "90px";
    }

    else if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 150)) {
        navbar.style.top = "0px";
        aside.style.paddingTop = "75px";
        card.style.top = "90px";
    }

    else if (scrollPoss < 150) {
        navbar.style.top = "0px";
        aside.style.paddingTop = "75px";
        card.style.top = "90px";
    }

    else {
        navbar.style.top = "-90px";
        aside.style.paddingTop = "20px";
        card.style.top = "2vh";
    }
    scrollPoss = currentPoss;
};