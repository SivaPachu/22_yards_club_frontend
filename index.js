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
        sideNav.style.left = "0"; 
    });
}

if (closeNav && sideNav) {
    closeNav.addEventListener("click", function () {
        sideNav.style.left = "-100%"; 
    });
}

sideLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        sideNav.style.left = "-100%";
    });
});


// Slider Banner Section
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

if (slider && slides.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000);
}


// Like Button
const heartButtons = document.querySelectorAll(".like__btn");

heartButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        const icon = this.querySelector("i");
        
        if (this.classList.contains("active")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    });
});