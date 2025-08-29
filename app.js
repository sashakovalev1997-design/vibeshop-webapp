const tg = window.Telegram.WebApp;
tg.expand();

const productsEl = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const contactsBtn = document.getElementById("contacts-btn");
const cartEl = document.getElementById("cart");
const contactsEl = document.getElementById("contacts");
const closeCartBtn = document.getElementById("close-cart");
const closeContactsBtn = document.getElementById("close-contacts");
const cartItemsEl = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const sendOrderBtn = document.getElementById("send-order");

let cartItems = [];

// Список товаров
const products = [
    { id: 1, name: "Товар 1", price: 10 },
    { id: 2, name: "Товар 2", price: 20 },
    { id: 3, name: "Товар 3", price: 30 },
];

// Рендер товаров
products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.price} BYN</p>
    <button onclick="addToCart(${p.id})">Добавить в корзину</button>
  `;
    productsEl.appendChild(card);
});

window.addToCart = function(id){
    const product = products.find(p => p.id === id);
    cartItems.push(product);
    updateCartUI();
};

// Обновление корзины
function updateCartUI(){
    cartItemsEl.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price} BYN`;
        cartItemsEl.appendChild(li);
    });
    cartCountEl.textContent = cartItems.length;
}

// Кнопка корзины
cartBtn.addEventListener("click", () => {
    cartEl.style.display = "block";
});
closeCartBtn.addEventListener("click", () => {
    cartEl.style.display = "none";
});

// Кнопка контактов
contactsBtn.addEventListener("click", () => {
    contactsEl.style.display = "block";
});
closeContactsBtn.addEventListener("click", () => {
    contactsEl.style.display = "none";
});

// Отправка заказа
sendOrderBtn.addEventListener("click", () => {
    if(cartItems.length === 0){
        alert("Корзина пуста!");
        return;
    }

    let orderText = "🛒 Новый заказ:\n";
    cartItems.forEach(item => orderText += `${item.name} — ${item.price} BYN\n`);

    tg.sendData(orderText);

    cartItems = [];
    updateCartUI();
    cartEl.style.display = "none";
    alert("✅ Заказ отправлен!");
});
