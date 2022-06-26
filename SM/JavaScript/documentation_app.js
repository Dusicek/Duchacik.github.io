// aside
const card = document.querySelector(".card");
const cover = document.querySelector(".cover");
const aside = document.querySelector("aside");
const arrow = document.querySelectorAll(".fa-chevron-down");

// scrolling down > values of elements
const asidePaddDefVal = "75px";
const asidePaddMoveVal = "20px";
const cardDefVal = "70px";
const cardMoveVal = "10px";

// closing Aside
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
        navbar.style.top = navDefVal;
        aside.style.paddingTop = asidePaddDefVal;
        card.style.top = cardDefVal;
    }

    else if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 150)) {
        navbar.style.top = navDefVal;
        aside.style.paddingTop = asidePaddDefVal;
        card.style.top = cardDefVal;
    }

    else if (scrollPoss < 150) {
        navbar.style.top = navDefVal;
        aside.style.paddingTop = asidePaddDefVal;
        card.style.top = cardDefVal;
    }

    else {
        navbar.style.top = navHiddVal;
        aside.style.paddingTop = asidePaddMoveVal;
        card.style.top = cardMoveVal;
    }
    scrollPoss = currentPoss;
};