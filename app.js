document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    // Товары с ценой в BYN
    const products = [
        { id: 1, name: "Футболка Vibe", price: 50, img: "images/tshirt.jpg" },
        { id: 2, name: "Худи Vibe", price: 120, img: "images/hoodie.jpg" },
        { id: 3, name: "Сумка Vibe", price: 80, img: "images/bag.jpg" }
    ];

    let cart = [];
    const container = document.getElementById("products");

    // Отображение товаров
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} BYN</p>
      <button onclick="addToCart(${p.id})">Добавить в корзину</button>
    `;
        container.appendChild(card);
    });

    // Добавление в корзину
    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        alert(`${product.name} добавлен в корзину`);
    };

    // Оформление заказа
    document.getElementById("checkout").addEventListener("click", () => {
        if(cart.length === 0) {
            alert("Корзина пуста!");
            return;
        }

        // Отправка корзины боту
        tg.sendData(JSON.stringify(cart));

        // Сообщение пользователю
        alert("✅ Ваш заказ отправлен!");

        // Очистка корзины для новых покупок
        cart = [];
    });
});
