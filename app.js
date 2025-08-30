const tg = window.Telegram.WebApp;
tg.expand();

const cartToggle = document.getElementById('cart-toggle');
const cart = document.getElementById('cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const sendOrderBtn = document.getElementById('send-order');
const closeCartBtn = document.getElementById('close-cart');
const products = document.querySelectorAll('.product');

let cartItems = [];

// Получаем информацию о пользователе
const user = tg.initDataUnsafe.user;
let userInfo = '';

if (user) {
    userInfo = `👤 Пользователь: ${user.first_name}${user.last_name ? ' ' + user.last_name : ''}`;
    if (user.username) userInfo += ` (@${user.username})`;
    userInfo += `\n🆔 ID: ${user.id}\n`;
}

function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin: 5px 0; padding: 5px; background: #f9f9f9; border-radius: 5px;';

        const itemText = document.createElement('span');
        itemText.textContent = `${item.name} — ${item.price} BYN`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '❌';
        removeBtn.style.cssText = 'background: #ff4444; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer;';

        removeBtn.onclick = () => {
            cartItems.splice(index, 1);
            products.forEach(p => {
                if(p.dataset.name === item.name) {
                    p.querySelector('button').classList.remove('in-cart');
                    p.querySelector('button').textContent = 'Добавить в корзину';
                }
            });
            updateCartUI();
        };

        li.appendChild(itemText);
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        total += Number(item.price);
    });

    cartTotal.textContent = total;
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Добавление товаров в корзину
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

        // Показать корзину при добавлении первого товара
        if (cartItems.length === 1) {
            cart.classList.add('show');
        }
    });
});

// Управление корзиной
cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cart.classList.toggle('show');
});

closeCartBtn.addEventListener('click', () => {
    cart.classList.remove('show');
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

    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА 🛒\n\n";
    orderText += userInfo + "\n";
    orderText += "📦 Состав заказа:\n";

    let total = 0;
    cartItems.forEach(item => {
        orderText += `• ${item.name} — ${item.price} BYN\n`;
        total += Number(item.price);
    });

    orderText += `\n💰 Итого: ${total} BYN`;
    orderText += `\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

    // Отправляем данные в бот
    tg.sendData(orderText);

    // Очистка корзины
    cartItems = [];
    updateCartUI();
    cart.classList.remove('show');

    // Показать благодарность
    alert('✅ Заказ отправлен! Спасибо за покупку! Скоро мы с вами свяжемся.');
});