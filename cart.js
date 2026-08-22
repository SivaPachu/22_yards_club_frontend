let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");


function displayCart() {

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <h2>Your cart is empty</h2>
                <a href="index.html">Continue Shopping</a>
            </div>
        `;

        cartTotal.textContent = "0";
        updateCartCount();

        return;
    }


    let total = 0;

    cart.forEach((product, index) => {

        const price = Number(String(product.price).replace(/[₹,\s]/g, ""));

        total += price * product.quantity;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="cart-item-info">

                <h3>${product.name}</h3>

                <p>₹${price.toLocaleString("en-IN")}</p>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

                <button 
                    class="remove-btn"
                    onclick="removeProduct(${index})">

                    <i class="fa-solid fa-trash"></i>
                    Remove

                </button>

            </div>
        `;

        cartContainer.appendChild(cartItem);
    });


    cartTotal.textContent = total.toLocaleString("en-IN");

    updateCartCount();
}


function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();
}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();
}


function removeProduct(index) {

    cart.splice(index, 1);

    saveCart();
}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


function updateCartCount() {

    let count = 0;

    cart.forEach(product => {
        count += product.quantity;
    });

    if (cartCount) {
        cartCount.textContent = count;
    }
}


displayCart();