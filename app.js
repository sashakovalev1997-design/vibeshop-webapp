window.Telegram.WebApp.ready();

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

    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(order);
        cart = [];
        alert("Заказ отправлен!");
    } else {
        alert("Ошибка: Telegram WebApp не найден");
    }
}