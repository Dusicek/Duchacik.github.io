const header = document.querySelector("header");
const fade = document.querySelectorAll("article");
const fadeBig =  document.querySelectorAll(".big-article");

header.addEventListener("click", () => {
    closeNav();
});

// how big part of the element needs to be on page
const apearOptions = {
    threshold: 0.5
};

// Observer(and function) for scrolling
const scrollAppear = new IntersectionObserver
(function(
    entries,
    scrollAppear
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) { // if we didnt have this > everything will load when page loads
                return;
            }
            else {
                entry.target.classList.add("appear");
                scrollAppear.unobserve(entry.target);
            }
        })
    },
    apearOptions
);

fade.forEach(fade => {
    scrollAppear.observe(fade);
});

fadeBig.forEach(fadeBig => {
    scrollAppear.observe(fadeBig);
});