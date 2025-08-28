const tg = window.Telegram.WebApp;
tg.expand();

const products = [
    { id: 1, name: "Футболка", price: 40, image: "images/tshirt.jpg" },
    { id: 2, name: "Худи", price: 70, image: "images/hoodie.jpg" },
    { id: 3, name: "Сумка", price: 35, image: "images/bag.jpg" }
];

let cart = [];

function renderProducts() {
    const container = document.getElementById("products");
    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} BYN</p>
      <button onclick="addToCart(${p.id})">Добавить</button>
    `;
        container.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    tg.MainButton.text = `Оформить заказ (${cart.length})`;
    tg.MainButton.show();
}

document.getElementById("orderBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }
    tg.sendData(JSON.stringify(cart));
});

renderProducts();
