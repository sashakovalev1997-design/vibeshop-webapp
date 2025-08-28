document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    const products = [
        { id: 1, name: "Футболка Vibe", price: 55, img: "images/tshirt.jpg" },
        { id: 2, name: "Худи Vibe", price: 130, img: "images/hoodie.jpg" },
        { id: 3, name: "Сумка Vibe", price: 85, img: "images/bag.jpg" }
    ];

    let cart = [];
    const container = document.getElementById("products");

    products.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" width="100">
      <h3>${p.name}</h3>
      <p>${p.price} BYN</p>
      <button onclick="addToCart(${p.id})">Добавить в корзину</button>
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
        tg.sendData(JSON.stringify(cart));
        alert("✅ Заказ отправлен!");
        cart = [];
    });
});
