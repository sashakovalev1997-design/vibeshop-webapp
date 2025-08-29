const tg = window.Telegram.WebApp;
tg.expand(); // открываем WebApp на весь экран

const products = document.querySelectorAll('.product');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const sendOrderBtn = document.getElementById('send-order');

let cartItems = [];

// Обновляем UI корзины
function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price} BYN`;
        cartItemsList.appendChild(li);
        total += Number(item.price);
    });
    cartTotal.textContent = total;
    cartCount.textContent = cartItems.length;
}

// Добавление товаров в корзину
products.forEach(product => {
    const btn = product.querySelector('.order-btn');
    btn.addEventListener('click', () => {
        const name = product.dataset.name;
        const price = product.dataset.price;
        if(cartItems.some(i => i.name === name)) return; // уже в корзине
        cartItems.push({name, price});
        updateCartUI();
    });
});

// Отправка заказа боту
sendOrderBtn.addEventListener('click', () => {
    if(cartItems.length === 0) return;

    // Отправка заказа в Telegram Bot
    tg.sendData(JSON.stringify({
        items: cartItems,
        total: cartItems.reduce((sum, i) => sum + Number(i.price), 0)
    }));

    // Очищаем корзину и закрываем WebApp
    cartItems = [];
    updateCartUI();
    tg.close();
});
