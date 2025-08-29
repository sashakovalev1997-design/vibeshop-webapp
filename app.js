const tg = window.Telegram.WebApp;
tg.expand();

const cartItems = [];
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const sendOrderBtn = document.getElementById('send-order');

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
}

// Добавление товаров
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const name = product.dataset.name;
        const price = Number(product.dataset.price);
        if (!cartItems.some(i => i.name === name)) {
            cartItems.push({name, price});
        }
        updateCartUI();
    });
});

// Отправка заказа (WebApp не закрывается)
sendOrderBtn.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    const order = {
        items: cartItems,
        total: cartItems.reduce((sum, i) => sum + i.price, 0)
    };

    tg.sendData(JSON.stringify(order)); // WebApp остаётся открытым
    cartItems.length = 0;
    updateCartUI();
    alert('✅ Ваш заказ отправлен! Вы можете продолжать покупки.');
});
