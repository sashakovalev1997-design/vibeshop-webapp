let cart = [];

function addToCart(button) {
    const product = button.parentElement;
    cart.push({
        name: product.dataset.name,
        price: product.dataset.price
    });
    alert(`${product.dataset.name} добавлен в корзину`);
}

function checkout() {
    if(cart.length === 0){
        alert("Корзина пуста!");
        return;
    }

    const order = JSON.stringify(cart);

    // Отправка заказа в Telegram через WebApp
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(order);
        cart = [];
    } else {
        alert("Ошибка: Telegram WebApp не найден");
    }
}
