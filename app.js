const tg = window.Telegram.WebApp;
tg.expand();

const cartToggle = document.getElementById('cart-toggle');
const cart = document.getElementById('cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const sendOrderBtn = document.getElementById('send-order');
const products = document.querySelectorAll('.product');

let cartItems = [];

function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price} BYN`;
        cartItemsList.appendChild(li);
        total += Number(item.price);
    });
    cartTotal.textContent = total;
}

products.forEach(product => {
    const btn = product.querySelector('.order-btn');
    btn.addEventListener('click', () => {
        const name = product.dataset.name;
        const price = product.dataset.price;
        cartItems.push({name, price});
        updateCartUI();
    });
});

sendOrderBtn.addEventListener('click', () => {
    if (cartItems.length === 0) return alert('Корзина пуста!');
    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА\n";
    cartItems.forEach(item => {
        orderText += `${item.name} — ${item.price} BYN\n`;
    });
    try {
        tg.sendData(orderText);
        alert('✅ Заказ отправлен!');
        cartItems = [];
        updateCartUI();
        tg.close();
    } catch (e) {
        alert('❌ Ошибка отправки заказа');
        console.error(e);
    }
});
