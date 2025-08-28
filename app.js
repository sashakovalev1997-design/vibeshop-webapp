document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    const products = [
        { id: 1, name: "Футболка Vibe", price: 1500, img: "images/tshirt.jpg" },
        { id: 2, name: "Худи Vibe", price: 3500, img: "images/hoodie.jpg" },
        { id: 3, name: "Сумка Vibe", price: 2500, img: "images/bag.jpg" }
    ];

    let cart = [];
    const container = document.getElementById("products");

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} ₽</p>
      <button onclick="addToCart(${p.id})">Добавить в корзину</button>
    `;
        container.appendChild(card);
    });

    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        alert(`${product.name} добавлен в корзину`);
    };

    document.getElementById("checkout").addEventListener("click", () => {
        if(cart.length === 0) {
            alert("Корзина пуста!");
            return;
        }

        // Отправка заказа боту
        tg.sendData(JSON.stringify(cart));

        // Показываем сообщение пользователю
        alert("✅ Ваш заказ отправлен!");

        // Очищаем корзину для новых покупок
        cart = [];
    });
});
