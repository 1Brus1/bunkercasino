// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Product Gallery Logic
const mainImg = document.getElementById("main-img");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImg.src = thumb.src;

        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
    });
});

// Cart Functionality
const addToCartBtn = document.getElementById("add-to-cart");
const cartSidebar = document.getElementById("cart-sidebar");
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];
const price = 59.99;

// Open Cart
cartBtn.addEventListener("click", () => {
    cartSidebar.classList.toggle("hidden");
});

// Add to Cart
addToCartBtn.addEventListener("click", () => {
    const item = {
        name: "Classic Oversized Hoodie",
        price: price,
        qty: 1
    };

    cart.push(item);
    updateCartUI();
});

// Update UI
function updateCartUI() {
    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;

        cartItemsDiv.appendChild(div);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}
