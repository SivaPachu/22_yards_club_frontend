// ========================================
// 22 YARDS CLUB - SHOP JAVASCRIPT
// ========================================


// ========================================
// 1. AD BANNER
// ========================================

const adBanner = document.getElementById("adbanner");
const closeAd = document.getElementById("closead");

if (closeAd && adBanner) {

    closeAd.addEventListener("click", function () {
        adBanner.style.display = "none";
    });

}


// ========================================
// 2. MOBILE SIDE NAVIGATION
// ========================================

const menuIcon = document.getElementById("menuicon");
const sideNav = document.getElementById("sidenav");
const closeNav = document.getElementById("closenav");


// Open side navigation
if (menuIcon && sideNav) {

    menuIcon.addEventListener("click", function () {
        sideNav.classList.add("active");
    });

}


// Close side navigation
if (closeNav && sideNav) {

    closeNav.addEventListener("click", function () {
        sideNav.classList.remove("active");
    });

}


// Close side navigation when clicking a link
const sideNavLinks = document.querySelectorAll("#sidenav a");

sideNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        sideNav.classList.remove("active");
    });

});


// ========================================
// 3. SHOP PRODUCTS
// ========================================

const products = document.querySelectorAll(".shop__product");

const filterButtons = document.querySelectorAll(".filter__btn");

const searchInput = document.getElementById("shopSearch");

const clearSearch = document.getElementById("clearSearch");

const cartCount = document.getElementById("cart-count");


// Currently selected category
let selectedCategory = "all";

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {

    const totalItems = cart.reduce(function (total, product) {
        return total + Number(product.quantity || 0);
    }, 0);

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

}


// ========================================
// 4. FILTER PRODUCTS FUNCTION
// ========================================

function filterProducts() {

    // Get search value
    const searchValue = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    products.forEach(function (product) {

        // Get category
        const productCategory =
            product.dataset.category.toLowerCase();


        // Get product name
        const productName =
            product.querySelector("h3")
                ? product.querySelector("h3").textContent.toLowerCase()
                : "";


        // Get product category text
        const productCategoryText =
            product.querySelector(".shop__category")
                ? product.querySelector(".shop__category").textContent.toLowerCase()
                : "";


        // ========================================
        // CATEGORY MATCH
        // ========================================

        const categoryMatch =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        // ========================================
        // SEARCH MATCH
        // ========================================

        const searchMatch =
            productName.includes(searchValue) ||
            productCategoryText.includes(searchValue);


        // ========================================
        // SHOW / HIDE PRODUCT
        // ========================================

        if (categoryMatch && searchMatch) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


// ========================================
// 5. CATEGORY FILTER BUTTONS
// ========================================

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        // Add active class to clicked button
        button.classList.add("active");


        // Get selected category
        selectedCategory =
            button.dataset.category.toLowerCase();


        // Filter products
        filterProducts();

    });

});


// ========================================
// 6. SEARCH PRODUCTS
// ========================================

if (searchInput) {

    searchInput.addEventListener("input", function () {

        filterProducts();

    });

}


// ========================================
// 7. CLEAR SEARCH
// ========================================

if (clearSearch) {

    clearSearch.addEventListener("click", function () {

        if (searchInput) {

            searchInput.value = "";

            filterProducts();

            searchInput.focus();

        }

    });

}


// ========================================
// 8. WISHLIST
// ========================================

const wishlistButtons =
    document.querySelectorAll(".shop__wishlist");


wishlistButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const icon = button.querySelector("i");


        if (icon) {

            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");

        }

    });

});


// ========================================
// 9. ADD TO CART
// ========================================

const cartButtons =
    document.querySelectorAll(".shop__cart");


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Find product card
        const productCard =
            button.closest(".shop__product");


        if (!productCard) {
            return;
        }


        // Get product information
        const productName =
            productCard.querySelector("h3").textContent;


        const productPrice =
            Number(productCard.querySelector(".shop__price").textContent
                .replace(/[₹,\s]/g, ""));


        const productImage =
            productCard.querySelector("img").getAttribute("src");


        const productCategory =
            productCard.dataset.category;


        // Create product object
        const product = {

            name: productName,

            price: productPrice,

            image: productImage,

            category: productCategory,

            quantity: 1

        };


        // Get existing cart
        // Check if product already exists
        const existingProduct =
            cart.find(function (item) {

                return item.name === product.name;

            });


        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push(product);

        }


        // Save cart
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();


        // Button feedback
        const originalText = button.textContent;

        button.textContent = "Added ✓";

        button.classList.add("added");


        setTimeout(function () {

            button.textContent = originalText;

            button.classList.remove("added");

        }, 1500);

    });

});


// ========================================
// 10. INITIAL FILTER
// ========================================

filterProducts();
updateCartCount();