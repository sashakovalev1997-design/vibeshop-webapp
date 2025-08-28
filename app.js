document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    document.getElementById("sendTest").addEventListener("click", () => {
        const testCart = [
            { id: 1, name: "Тестовый товар", price: 10 }
        ];

        console.log("Отправка тестового заказа:", testCart);
        tg.sendData(JSON.stringify(testCart)); // данные уходят боту
        alert("✅ Тестовый заказ отправлен!");
    });
});
