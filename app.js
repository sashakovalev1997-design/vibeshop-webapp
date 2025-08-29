// Подключение Telegram WebApp SDK
const tg = window.Telegram.WebApp;
tg.expand();

// Обработка кнопок заказа
document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const product = e.target.closest(".product");
        const name = product.dataset.name;
        const price = product.dataset.price;

        const order = `Товар: ${name}\nЦена: ${price} BYN`;

        // Отправка данных в Telegram боту
        tg.sendData(order);

        // Визуальное подтверждение пользователю
        btn.textContent = "✅ Заказ отправлен!";
        btn.disabled = true;
        btn.style.background = "#28a745";
    });
});
