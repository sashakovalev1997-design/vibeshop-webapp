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
            updateCartUI();
        };
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        total += Number(item.price);
    });
    cartTotal.textContent = total;
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Добавление товаров
products.forEach(product => {
    const btn = product.querySelector('.order-btn');
    btn.addEventListener('click', () => {
        const name = product.dataset.name;
        const price = Number(product.dataset.price);
        if(!cartItems.some(i=>i.name===name)) cartItems.push({name, price});
        updateCartUI();
    });
});

// Открытие/закрытие корзины
cartToggle.addEventListener('click', e => { e.stopPropagation(); cart.classList.toggle('show'); });
document.addEventListener('click', e => { if(!cart.contains(e.target) && e.target!==cartToggle) cart.classList.remove('show'); });

// Отправка заказа
sendOrderBtn.addEventListener('click', () => {
    if(cartItems.length === 0) return;
    const order = {items: cartItems, total: cartItems.reduce((sum,i)=>sum+i.price,0)};
    tg.sendData(JSON.stringify(order));
    cartItems = [];
    updateCartUI();
    alert('✅ Заказ отправлен! WebApp остаётся открытым.');
});
