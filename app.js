document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Футболка", price: 1200, img: "https://via.placeholder.com/150" },
        { name: "Худи", price: 2500, img: "https://via.placeholder.com/150" },
        { name: "Сумка", price: 1800, img: "https://via.placeholder.com/150" }
    ];

    const container = document.getElementById("products");

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} ₽</p>
      <button>Добавить</button>
    `;
        container.appendChild(card);
    });

    document.getElementById("checkout").addEventListener("click", () => {
        alert("🛒 Заказ оформлен! (здесь будет интеграция с ботом)");
    });
});
