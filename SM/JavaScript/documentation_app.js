// aside
const asideMenu = document.querySelector(".asideMenuContainer");
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
}

// nav-links animation
menu.addEventListener("click", () => {
    closeAside();
});

// aside submenu animation
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        const arrowParent = e.target.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

// Aside Menu & aside animation
asideMenu.addEventListener("click", () => {
    aside.classList.toggle("closed");
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
    }

    else if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 150)) {
        navbar.style.top = navDefVal;
        aside.style.paddingTop = asidePaddDefVal;
    }

    else if (scrollPoss < 150) {
        navbar.style.top = navDefVal;
        aside.style.paddingTop = asidePaddDefVal;
    }

    else {
        navbar.style.top = navHiddVal;
        aside.style.paddingTop = asidePaddMoveVal;
    }
    scrollPoss = currentPoss;
};