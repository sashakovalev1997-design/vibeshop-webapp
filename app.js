document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    // Товары
    const products = [
        { id: 1, name: "Футболка Vibe", price: 55, category: "Футболки", img: "images/tshirt.jpg" },
        { id: 2, name: "Худи Vibe", price: 130, category: "Кофты", img: "images/hoodie.jpg" },
        { id: 3, name: "Сумка Vibe", price: 85, category: "Сумки", img: "images/bag.jpg" }
    ];

    let cart = [];

    const categoriesDiv = document.getElementById("categories");
    const productsDiv = document.getElementById("products");
    const checkoutBtn = document.getElementById("checkout");

    // Генерируем кнопки категорий
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.innerText = cat;
        btn.className = "category-btn";
        btn.addEventListener("click", () => showProducts(cat));
        categoriesDiv.appendChild(btn);
    });

    // Показываем товары выбранной категории
    function showProducts(category) {
        productsDiv.innerHTML = "";
        const filtered = products.filter(p => p.category === category);
        filtered.forEach(p => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <img src="${p.img}" width="100">
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
    }

    // Checkout — отправляем данные в Telegram
    checkoutBtn.addEventListener("click", () => {
        if(cart.length === 0){
            alert("Корзина пуста!");
            return;
        }
        tg.sendData(JSON.stringify(cart));
        alert("✅ Заказ отправлен!");
        cart = [];
        productsDiv.innerHTML = "";
    });
});
