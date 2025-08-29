const tg = window.Telegram.WebApp;
tg.expand();

// Появление товаров
const products = document.querySelectorAll(".product");
products.forEach((p, i) => setTimeout(() => p.classList.add("visible"), i * 150));

// Корзина
let cartItems = [], cartTotal = 0;
const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");
const cartList = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");
const sendOrderBtn = document.getElementById("send-order");

cartToggle.addEventListener("click", () => cart.classList.toggle("show"));

function showNotification(msg) {
    const n = document.createElement("div");
    n.className = "notification";
    n.textContent = msg;
    document.getElementById("notification-container").appendChild(n);
    setTimeout(() => n.remove(), 2000);
}

function updateCart() {
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price} BYN`;
        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.addEventListener("click", () => {
            cartTotal -= item.price;
            cartItems.splice(index, 1);
            updateCart();
        });
        li.appendChild(delBtn);
        cartList.appendChild(li);
    });
    cartTotalEl.textContent = cartTotal;
    cartCountEl.textContent = cartItems.length;
}

function addToCart(name, price) {
    cartItems.push({name, price: Number(price)});
    cartTotal += Number(price);
    updateCart();
}

document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const product = e.target.closest(".product");
        const name = product.dataset.name;
        const price = product.dataset.price;

        addToCart(name, price);
        showNotification(`🛒 Вы добавили: ${name}`);
    });
});

// Отправка заказа через Telegram WebApp
sendOrderBtn.addEventListener("click", () => {
    if (cartItems.length === 0) {
        showNotification("🛒 Корзина пуста!");
        return;
    }
    if (tg.sendData) {
        tg.sendData(JSON.stringify({items: cartItems, total: cartTotal}));
        showNotification("✅ Заказ отправлен!");
        cartItems = [];
        cartTotal = 0;
        updateCart();
        cart.classList.remove("show");
    }
});

// Темная тема
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Плавающие контакты
const contactToggle = document.getElementById("contactToggle");
const contactCard = document.getElementById("contactCard");
contactToggle.addEventListener("click", () => {
    contactCard.classList.toggle("show");
});
