const tg = window.Telegram?.WebApp;
if (!tg) console.warn("⚠ Telegram WebApp SDK не найден, тестируем в браузере.");
tg?.expand();

const products = document.querySelectorAll(".product");
products.forEach((p, i) => setTimeout(() => p.classList.add("visible"), i * 150));

let cartItems = [], cartTotal = 0;
const orderedItems = new Set(); // Сохраняем, что уже заказано
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
            resetProductButton(item.name);
        });
        li.appendChild(delBtn);
        cartList.appendChild(li);
    });
    cartTotalEl.textContent = cartTotal;
    cartCountEl.textContent = cartItems.length;
}

function markInCart(name) {
    const product = Array.from(products).find(p => p.dataset.name === name);
    if (product) {
        const btn = product.querySelector(".order-btn");
        btn.textContent = "В корзине";
        btn.classList.add("in-cart");
        btn.disabled = true;
    }
}

function markOrdered(name) {
    const product = Array.from(products).find(p => p.dataset.name === name);
    if (product) {
        const btn = product.querySelector(".order-btn");
        btn.textContent = "Заказ отправлен";
        btn.classList.remove("in-cart");
        btn.classList.add("ordered");
        btn.disabled = true;
    }
}

function resetProductButton(name) {
    if (orderedItems.has(name)) return; // Уже заказано
    const product = Array.from(products).find(p => p.dataset.name === name);
    if (product) {
        const btn = product.querySelector(".order-btn");
        btn.textContent = "Добавить в корзину";
        btn.classList.remove("in-cart");
        btn.disabled = false;
    }
}

function addToCart(name, price) {
    if (orderedItems.has(name)) return;
    cartItems.push({name, price: Number(price)});
    cartTotal += Number(price);
    updateCart();
    markInCart(name);
}

document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const product = e.target.closest(".product");
        addToCart(product.dataset.name, product.dataset.price);
        showNotification(`🛒 Вы добавили: ${product.dataset.name}`);
    });
});

sendOrderBtn.addEventListener("click", () => {
    if (cartItems.length === 0) {
        showNotification("🛒 Корзина пуста!");
        return;
    }
    if (tg && tg.sendData) {
        tg.sendData(JSON.stringify({items: cartItems, total: cartTotal}));
        showNotification("✅ Заказ отправлен!");
        cartItems.forEach(item => {
            orderedItems.add(item.name);
            markOrdered(item.name);
        });
        cartItems = [];
        cartTotal = 0;
        updateCart();
        cart.classList.remove("show");
    }
});

// Темная тема
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.getElementById("theme-toggle").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Плавающие контакты
document.getElementById("contactToggle").addEventListener("click", () => {
    document.getElementById("contactCard").classList.toggle("show");
});
