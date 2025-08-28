// Получаем Telegram WebApp SDK
const tg = window.Telegram.WebApp;

// Устанавливаем расширение окна
tg.expand();

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const product = e.target.closest(".product");
        const name = product.dataset.name;
        const price = product.dataset.price;

        const order = `Товар: ${name}\nЦена: ${price} BYN`;

        // Отправляем заказ в Telegram боту
        tg.sendData(order);

        alert("✅ Заказ отправлен!");
    });
});
