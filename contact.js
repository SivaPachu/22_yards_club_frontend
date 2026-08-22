// Top Ad Banner Section
const adBanner = document.getElementById("adbanner");
const closeAdBtn = document.getElementById("closead");

if (closeAdBtn && adBanner) {
    closeAdBtn.addEventListener("click", () => {
        adBanner.style.display = "none";
    });
}

// Side Navbar Section
const menuIcon = document.getElementById("menuicon");
const sideNav = document.getElementById("sidenav");
const closeNav = document.getElementById("closenav");
const sideLinks = sideNav ? sideNav.querySelectorAll("a") : [];

if (menuIcon && sideNav) {
    menuIcon.addEventListener("click", function () {
        sideNav.classList.add("active");
    });
}

if (closeNav && sideNav) {
    closeNav.addEventListener("click", function () {
        sideNav.classList.remove("active");
    });
}

sideLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        sideNav.classList.remove("active");
    });
});