const menuIcon = document.querySelector("#menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
};

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer", "Mentor"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

ScrollReveal({ reset: true,
    distance: '100px',
    duration: 2300,
    delay: 400
 });

ScrollReveal().reveal(".text-info", { origin: 'left'})
ScrollReveal().reveal(".home-img", { origin: 'bottom'})
ScrollReveal().reveal("social-icons", { origin: 'bottom', interval: 200 })
ScrollReveal().reveal(".bx", { origin: 'left'})
ScrollReveal().reveal(".unique", { origin: 'bottom'})
ScrollReveal().reveal(".about-img", { origin: 'bottom'})
ScrollReveal().reveal(".about-content", { origin: 'bottom'})
ScrollReveal().reveal(".skill", { origin: 'right'})
ScrollReveal().reveal(".heading", { origin: 'top'})
ScrollReveal().reveal(".services-info", { origin: 'right'})
ScrollReveal().reveal(".project-box", { origin: 'bottom'})
ScrollReveal().reveal(".project-h2", { origin: 'top'})
ScrollReveal().reveal(".card", { origin: 'left'})
ScrollReveal().reveal(".input-box", { origin: 'top'})
ScrollReveal().reveal(".input-group-2", { origin: 'bottom'})
