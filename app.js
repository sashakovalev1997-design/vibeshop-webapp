const tg = window.Telegram.WebApp;
tg.expand();

const cart = [];
const cartList = document.getElementById('cart');
const sendOrderBtn = document.getElementById('send-order');

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.onclick = () => {
        const productDiv = btn.parentElement;
        const name = productDiv.dataset.name;
        const price = productDiv.dataset.price;
        cart.push({ name, price });

        const li = document.createElement('li');
        li.textContent = `${name} — ${price} BYN`;
        cartList.appendChild(li);
    };
});

sendOrderBtn.onclick = () => {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }

    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА\n";
    let total = 0;

    cart.forEach(item => {
        orderText += `${item.name} — ${item.price} BYN\n`;
        total += Number(item.price);
    });

    orderText += `\n💰 Итого: ${total} BYN`;

    tg.sendData(orderText); // отправка в BotHandler
    alert("✅ Заказ отправлен! Мы свяжемся с вами.");
    cartList.innerHTML = "";
};
