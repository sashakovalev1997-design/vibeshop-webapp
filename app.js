document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    const products = [
        { id: 1, name: "Футболка Vibe", price: 55, img: "images/tshirt.jpg" },
        { id: 2, name: "Худи Vibe", price: 130, img: "images/hoodie.jpg" },
        { id: 3, name: "Сумка Vibe", price: 85, img: "images/bag.jpg" }
    ];

    let cart = [];

    const productsDiv = document.getElementById("products");
    const checkoutBtn = document.getElementById("checkout");

    // Отображение всех товаров
    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price} BYN</p>
            <button class="add-btn">Добавить</button>
        `;
        div.querySelector(".add-btn").addEventListener("click", () => {
            cart.push(p);
            alert(`${p.name} добавлен в корзину`);
        });
        productsDiv.appendChild(div);
    });

    // Checkout
    checkoutBtn.addEventListener("click", () => {
        if(cart.length === 0){
            alert("Корзина пуста!");
            return;
        }
        tg.sendData(JSON.stringify(cart));
        alert("✅ Заказ отправлен!");
        cart = [];
    });
});
