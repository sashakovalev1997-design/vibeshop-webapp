const tg = window.Telegram.WebApp;
tg.expand();

const productsData = [
    { name: "Футболка", price: 20, img: "https://via.placeholder.com/150?text=Футболка" },
    { name: "Худи", price: 50, img: "https://via.placeholder.com/150?text=Худи" },
    { name: "Сумка", price: 35, img: "https://via.placeholder.com/150?text=Сумка" }
];

const productsDiv = document.getElementById('products');
const cartItemsList = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const sendOrderBtn = document.getElementById('send-order');
const copyOrderBtn = document.getElementById('copy-order');

let cartItems = [];

// Отобразить товары
productsData.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} BYN</p>
        <button>Add to cart</button>
    `;
    const btn = div.querySelector('button');
    btn.addEventListener('click', () => {
        if (!cartItems.includes(product)) {
            cartItems.push(product);
            btn.textContent = "✓ В корзине";
            btn.disabled = true;
            updateCart();
        } else {
            alert("Товар уже в корзине!");
        }
    });
    productsDiv.appendChild(div);
});

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price} BYN`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotalEl.textContent = total;
}

function generateOrderText() {
    if(cartItems.length === 0) return '';
    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА\n";
    cartItems.forEach(item => orderText += `${item.name} — ${item.price} BYN\n`);
    orderText += `Итого: ${cartItems.reduce((sum, i) => sum + i.price, 0)} BYN\n`;
    return orderText;
}

// Копирование заказа в буфер обмена
copyOrderBtn.addEventListener('click', () => {
    const text = generateOrderText();
    if(!text){
        alert("Корзина пуста!");
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        alert("✅ Заказ скопирован в буфер обмена! Теперь откройте чат с продавцом и отправьте сообщение.");
    }).catch(err => {
        alert("❌ Ошибка копирования: " + err);
    });
});

// Открыть личный чат с продавцом
sendOrderBtn.addEventListener('click', () => {
    if(cartItems.length === 0){
        alert("Корзина пуста!");
        return;
    }
    const text = generateOrderText();
    alert("✅ Откроется чат с продавцом. Вставьте скопированный заказ и отправьте сообщение.");
    const yourUsername = "bigdigovich"; // сюда твой Telegram username
    tg.openLink(`https://t.me/${yourUsername}`);
});
