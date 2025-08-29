const tg = window.Telegram.WebApp;
tg.expand();

let cartItems = [], cartTotal = 0;
const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");
const cartList = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");
const sendOrderBtn = document.getElementById("send-order");

cartToggle.addEventListener("click", () => cart.classList.toggle("show"));

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

document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const product = e.target.closest(".product");
        const name = product.dataset.name;
        const price = Number(product.dataset.price);
        cartItems.push({name, price});
        cartTotal += price;
        updateCart();
    });
});

sendOrderBtn.addEventListener("click", () => {
    if (cartItems.length === 0) return;
    if (tg.sendData) {
        tg.sendData(JSON.stringify({items: cartItems, total: cartTotal}));
        cartItems = [];
        cartTotal = 0;
        updateCart();
        alert("✅ Заказ отправлен!");
    }
});
