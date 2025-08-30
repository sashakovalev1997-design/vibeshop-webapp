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
        li.style.cssText = 'display: flex; justify-content: space-between;';
        li.textContent = `${item.name} — ${item.price} BYN`;
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
        const price = product.dataset.price;

        if(cartItems.some(i => i.name === name)) {
            alert('Этот товар уже в корзине!');
            return;
        }

        cartItems.push({name, price});
        btn.classList.add('in-cart');
        btn.textContent = '✓ В корзине';
        updateCartUI();
        cart.classList.add('show');
    });
});

// Управление корзиной
cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cart.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!cart.contains(e.target) && e.target !== cartToggle) {
        cart.classList.remove('show');
    }
});

// Отправка заказа
sendOrderBtn.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА\n";
    cartItems.forEach(item => orderText += `${item.name} — ${item.price} BYN\n`);

    try {
        tg.sendData(orderText);
        alert('✅ Заказ отправлен!');
        cartItems = [];
        updateCartUI();
        cart.classList.remove('show');
        tg.close();
    } catch (error) {
        alert('❌ Ошибка отправки заказа');
        console.error(error);
    }
});
