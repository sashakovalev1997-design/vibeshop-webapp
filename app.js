document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    const products = [
        { id: 1, name: "Футболка", price: 50 },
        { id: 2, name: "Худи", price: 120 },
        { id: 3, name: "Сумка", price: 80 }
    ];

    let cart = [];
    const container = document.getElementById("products");

    products.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `
      <p>${p.name} — ${p.price} BYN</p>
      <button onclick="addToCart(${p.id})">Добавить</button>
    `;
        container.appendChild(div);
    });

    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        alert(`${product.name} добавлен в корзину`);
    };

    document.getElementById("checkout").addEventListener("click", () => {
        if(cart.length === 0){
            alert("Корзина пуста!");
            return;
        }
        console.log("Отправка заказа:", cart);
        tg.sendData(JSON.stringify(cart));
        alert("✅ Заказ отправлен!");
        cart = [];
    });
});
