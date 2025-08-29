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
    });
});

cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cart.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if(!cart.contains(e.target) && e.target !== cartToggle) cart.classList.remove('show');
});

// --- Отправка заказа ---
sendOrderBtn.addEventListener('click', () => {
    if(cartItems.length === 0) return;

    tg.sendData(JSON.stringify({
        items: cartItems,
        total: cartItems.reduce((sum, i) => sum + Number(i.price), 0)
    }));

    cartItems = [];
    updateCartUI();
    cart.classList.remove('show');
    alert('✅ Ваш заказ отправлен!');
});
