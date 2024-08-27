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