const tg = window.Telegram.WebApp;
tg.expand();

const cartToggle = document.getElementById('cart-toggle');
const cart = document.getElementById('cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const sendOrderBtn = document.getElementById('send-order');
const products = document.querySelectorAll('.product');

const contactToggle = document.getElementById('contactToggle');
const contactCard = document.getElementById('contactCard');

let cartItems = [];

function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price} BYN`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '❌';
        removeBtn.onclick = () => {
            cartItems.splice(index, 1);
            products.forEach(p => {
                if(p.dataset.name === item.name) p.querySelector('button').classList.remove('in-cart');
            });
            updateCartUI();
        };
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        total += Number(item.price);
    });
    cartTotal.textContent = total;
    document.getElementById('cart-count').textContent = cartItems.length;
}

products.forEach(product => {
    const btn = product.querySelector('.order-btn');
    btn.addEventListener('click', () => {
        const name = product.dataset.name;
        const price = product.dataset.price;
        if(cartItems.some(i => i.name === name)) return;
        cartItems.push({name, price});
        btn.classList.add('in-cart');
        updateCartUI();
        showNotification(`${name} добавлен в корзину`);
    });
});

cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cart.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if(!cart.contains(e.target) && e.target !== cartToggle) {
        cart.classList.remove('show');
    }
});

// --- Отправка заказа напрямую боту ---
sendOrderBtn.addEventListener('click', () => {
    if(cartItems.length === 0){
        showNotification('Корзина пуста!');
        return;
    }

    let orderText = "🛒 Новый заказ:\n";
    cartItems.forEach(item => orderText += `${item.name} — ${item.price} BYN\n`);

    // Отправка заказа в WebApp боту
    tg.sendData(orderText);

    cartItems = [];
    updateCartUI();
    cart.classList.remove('show');
    showNotification('✅ Ваш заказ отправлен!');
});

// --- Контакты ---
contactToggle.addEventListener('click', () => contactCard.classList.toggle('show'));

// --- Всплывающие уведомления ---
function showNotification(text) {
    const notif = document.createElement('div');
    notif.textContent = text;
    notif.style.position = 'fixed';
    notif.style.bottom = '20px';
    notif.style.left = '50%';
    notif.style.transform = 'translateX(-50%)';
    notif.style.background = '#ff073a';
    notif.style.color = '#fff';
    notif.style.padding = '10px 20px';
    notif.style.borderRadius = '10px';
    notif.style.zIndex = 2000;
    notif.style.opacity = '0.9';
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}
