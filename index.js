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
    duration: 2500,
    delay: 400
 });

ScrollReveal().reveal(".text-info", { delay: 500, origin: 'left'})
ScrollReveal().reveal(".home-img", { delay: 500, origin: 'bottom'})
ScrollReveal().reveal("social-icons", { delay: 900, origin: 'bottom', interval: 200 })
ScrollReveal().reveal(".bx", { delay: 500, origin: 'left'})
ScrollReveal().reveal(".btn-group", { delay: 900, origin: 'bottom'})
ScrollReveal().reveal(".about-img", { delay: 500, origin: 'bottom'})
ScrollReveal().reveal(".about-content", { delay: 500, origin: 'bottom'})
ScrollReveal().reveal(".skill", { delay: 800, origin: 'right'})
