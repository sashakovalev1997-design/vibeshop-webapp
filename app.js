const tg = window.Telegram.WebApp;
tg.expand();

// Элементы DOM
const elements = {
    preloader: document.getElementById('preloader'),
    contactBtn: document.getElementById('contact-btn'),
    contactModal: document.getElementById('contact-modal'),
    cartToggle: document.getElementById('cart-toggle'),
    cartSidebar: document.getElementById('cart-sidebar'),
    closeCart: document.getElementById('close-cart'),
    overlay: document.getElementById('overlay'),
    cartItems: document.getElementById('cart-items'),
    cartEmpty: document.getElementById('cart-empty'),
    cartTotal: document.getElementById('cart-total'),
    sendOrder: document.getElementById('send-order'),
    copyOrder: document.getElementById('copy-order'),
    toast: document.getElementById('toast'),
    closeModal: document.querySelector('.close-modal')
};

let cartItems = [];
const user = tg.initDataUnsafe.user;
let userInfo = '';

// Инициализация
function init() {
    setupEventListeners();
    loadUserInfo();
    hidePreloader();
}

// Скрытие прелоадера
function hidePreloader() {
    setTimeout(() => {
        elements.preloader.style.opacity = '0';
        setTimeout(() => {
            elements.preloader.style.display = 'none';
        }, 300);
    }, 1000);
}

// Настройка обработчиков событий
function setupEventListeners() {
    elements.contactBtn.addEventListener('click', openContactModal);
    elements.closeModal.addEventListener('click', closeContactModal);
    elements.overlay.addEventListener('click', closeAllModals);
    elements.cartToggle.addEventListener('click', toggleCart);
    elements.closeCart.addEventListener('click', closeCart);
    elements.sendOrder.addEventListener('click', sendOrder);
    elements.copyOrder.addEventListener('click', copyOrder);

    // Обработчики для кнопок добавления в корзину
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            addToCart(productCard);
        });
    });

    // Быстрый просмотр
    document.querySelectorAll('.quick-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            showQuickView(productCard);
        });
    });
}

// Открытие модального окна контактов
function openContactModal() {
    elements.contactModal.classList.add('active');
    elements.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна контактов
function closeContactModal() {
    elements.contactModal.classList.remove('active');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Закрытие всех модальных окон
function closeAllModals() {
    closeContactModal();
    closeCart();
}

// Открытие Telegram
function openTelegram(username) {
    const telegramUrl = `https://t.me/${username}`;
    window.open(telegramUrl, '_blank');
    closeContactModal();
    showToast(`Открываю Telegram: @${username}`, 'success');
}

// Загрузка информации о пользователе
function loadUserInfo() {
    if (user) {
        userInfo = `👤 Пользователь: ${user.first_name}${user.last_name ? ' ' + user.last_name : ''}`;
        if (user.username) userInfo += ` (@${user.username})`;
        userInfo += `\n🆔 ID: ${user.id}\n`;
    } else {
        userInfo = '👤 Пользователь: Гость\n';
    }
}

// Добавление в корзину
function addToCart(productCard) {
    const name = productCard.dataset.name;
    const price = productCard.dataset.price;
    const image = productCard.querySelector('img').src;

    if (cartItems.some(item => item.name === name)) {
        showToast('Этот товар уже в корзине!', 'warning');
        return;
    }

    cartItems.push({ name, price, image });

    // Обновляем UI кнопки
    const addBtn = productCard.querySelector('.add-to-cart-btn');
    addBtn.classList.add('added');
    addBtn.innerHTML = '<i class="fas fa-check"></i> Добавлено';

    setTimeout(() => {
        addBtn.classList.remove('added');
        addBtn.innerHTML = '<i class="fas fa-plus"></i> В корзину';
    }, 2000);

    updateCartUI();
    showToast('Товар добавлен в корзину!', 'success');
}

// Обновление UI корзины
function updateCartUI() {
    elements.cartItems.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        elements.cartEmpty.style.display = 'block';
        elements.cartTotal.textContent = '0 BYN';
        document.getElementById('cart-count').textContent = '0';
        return;
    }

    elements.cartEmpty.style.display = 'none';

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} BYN</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">
                <i class="fas fa-times"></i>
            </button>
        `;
        elements.cartItems.appendChild(itemElement);
        total += Number(item.price);
    });

    elements.cartTotal.textContent = `${total} BYN`;
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Удаление из корзины
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartUI();
    showToast('Товар удален из корзины', 'info');
}

// Открытие/закрытие корзины
function toggleCart() {
    elements.cartSidebar.classList.toggle('open');
    elements.overlay.classList.toggle('active');
    document.body.style.overflow = elements.cartSidebar.classList.contains('open') ? 'hidden' : '';
}

function closeCart() {
    elements.cartSidebar.classList.remove('open');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Отправка заказа
function sendOrder() {
    if (cartItems.length === 0) {
        showToast('Корзина пуста!', 'error');
        return;
    }

    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА 🛒\n\n";
    orderText += userInfo + "\n";
    orderText += "📦 Состав заказа:\n";

    let total = 0;
    cartItems.forEach(item => {
        orderText += `• ${item.name} — ${item.price} BYN\n`;
        total += Number(item.price);
    });

    orderText += `\n💰 Итого: ${total} BYN`;
    orderText += `\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`;
    orderText += `\n\n🔥 *УЛЬТРА МЕГА РЕПЛИКИ 1:1*`;
    orderText += `\n✅ Все бирки и ярлыки как в оригинале`;
    orderText += `\n✅ Качество материалов 1:1`;
    orderText += `\n✅ Полное визуальное соответствие`;

    // Кодируем текст заказа для URL
    const encodedOrder = encodeURIComponent(orderText);
    const telegramUrl = `https://t.me/bigdigovich?text=${encodedOrder}`;

    // Открываем Telegram
    window.open(telegramUrl, '_blank');

    showToast('Открываю Telegram...', 'success');

    // Очищаем корзину
    setTimeout(() => {
        cartItems = [];
        updateCartUI();
        closeCart();
    }, 2000);
}

// Копирование заказа
function copyOrder() {
    if (cartItems.length === 0) {
        showToast('Корзина пуста!', 'error');
        return;
    }

    let orderText = "🛒 ДЕТАЛИ ЗАКАЗА 🛒\n\n";
    orderText += userInfo + "\n";
    orderText += "📦 Состав заказа:\n";

    let total = 0;
    cartItems.forEach(item => {
        orderText += `• ${item.name} — ${item.price} BYN\n`;
        total += Number(item.price);
    });

    orderText += `\n💰 Итого: ${total} BYN`;
    orderText += `\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`;
    orderText += `\n\n🔥 *УЛЬТРА МЕГА РЕПЛИКИ 1:1*`;
    orderText += `\n✅ Все бирки и ярлыки как в оригинале`;
    orderText += `\n✅ Качество материалов 1:1`;
    orderText += `\n✅ Полное визуальное соответствие`;

    navigator.clipboard.writeText(orderText).then(() => {
        showToast('Заказ скопирован в буфер!', 'success');
    }).catch(err => {
        showToast('Ошибка копирования', 'error');
    });
}

// Быстрый просмотр
function showQuickView(productCard) {
    const name = productCard.dataset.name;
    showToast(`Просмотр: ${name}`, 'info');
}

// Toast уведомления
function showToast(message, type = 'info') {
    elements.toast.textContent = message;
    elements.toast.className = `toast ${type}`;
    elements.toast.classList.add('show');

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// Глобальные функции для HTML
window.removeFromCart = removeFromCart;
window.openTelegram = openTelegram;

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);