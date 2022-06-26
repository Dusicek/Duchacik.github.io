const arrow = document.querySelectorAll(".fa-angle-right");
const reply = document.querySelectorAll(".reply");

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        arrow[i].classList.toggle("fa-rotate-90");
        reply[i].classList.toggle("opened");
    });
}