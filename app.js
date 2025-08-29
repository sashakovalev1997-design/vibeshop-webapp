const tg = window.Telegram.WebApp;
tg.expand();

let cartItems = [];

const cartEl = document.getElementById("cart");
const cartItemsEl = document.getElementById("cart-items");
const sendOrderBtn = document.getElementById("send-order");
const closeCartBtn = document.getElementById("close-cart");

const contactsBtn = document.getElementById("contacts-btn");
const contactsEl = document.getElementById("contacts");
const closeContactsBtn = document.getElementById("close-contacts");

// --- Обновление корзины ---
function updateCartUI() {
    cartItemsEl.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price} BYN`;
        cartItemsEl.appendChild(li);
    });

    cartEl.style.display = cartItems.length ? "block" : "none";
}

// --- Добавление товара в корзину ---
document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const product = e.target.closest(".product");
        const name = product.dataset.name;
        const price = product.dataset.price;

        if(cartItems.find(i => i.name === name)) return;

        cartItems.push({name, price});
        btn.classList.add("in-cart");
        updateCartUI();
    });
});

// --- Отправка заказа ---
sendOrderBtn.addEventListener("click", () => {
    if(cartItems.length === 0){
        alert("Корзина пуста!");
        return;
    }

    let orderText = "🛒 Новый заказ:\n";
    cartItems.forEach(item => orderText += `${item.name} — ${item.price} BYN\n`);

    tg.sendData(orderText);

    cartItems = [];
    document.querySelectorAll(".add-to-cart").forEach(btn => btn.classList.remove("in-cart"));
    updateCartUI();
    alert("✅ Ваш заказ отправлен!");
});

// --- Закрытие корзины ---
closeCartBtn.addEventListener("click", () => {
    cartEl.style.display = "none";
});

// --- Открытие/закрытие контактов ---
contactsBtn.addEventListener("click", () => {
    contactsEl.style.display = "block";
});

closeContactsBtn.addEventListener("click", () => {
    contactsEl.style.display = "none";
});

// Закрытие по клику вне блока
window.addEventListener("click", (e) => {
    if(e.target === contactsEl){
        contactsEl.style.display = "none";
    }
});
