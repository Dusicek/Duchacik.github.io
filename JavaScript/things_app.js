const navSlide = () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle NAV
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
    });
}
//activation of function
navSlide();