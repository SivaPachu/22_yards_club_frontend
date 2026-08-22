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

// ================================
// ADD TO CART FUNCTIONALITY
// ================================

const addCartButtons = document.querySelectorAll(".add-cart-btn");
const cartCount = document.getElementById("cart-count");

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Update cart count
function updateCartCount() {
    let totalItems = 0;

    cart.forEach(product => {
        totalItems += product.quantity;
    });

    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}


// Add product to cart
addCartButtons.forEach(button => {

    button.addEventListener("click", function () {

        const name = this.dataset.name;
        const price = Number(this.dataset.price);
        const image = this.dataset.image;

        // Check whether product already exists
        const existingProduct = cart.find(product => product.name === name);

        if (existingProduct) {

            // Increase quantity
            existingProduct.quantity++;

        } else {

            // Add new product
            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });
        }

        // Save cart
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update count
        updateCartCount();

        // Button message
        this.innerHTML = '<i class="fa-solid fa-check"></i> Added';

        setTimeout(() => {
            this.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
        }, 1000);

    });

});


// Update count when page loads
updateCartCount();