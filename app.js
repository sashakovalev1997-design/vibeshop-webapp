// Данные о продуктах
const products = {
    1: {
        name: "Свитшот Hermes",
        brand: "hermes",
        price: 129,
        description: "Премиальный свитшот от Hermes с фирменным логотипом. Качество 1:1. Идеальная посадка и комфорт.",
        features: [
            "Материал: премиальный хлопок",
            "Качество 1:1",
            "Фирменная бирка и упаковка",
            "Доступные размеры: S, M, L, XL"
        ],
        images: [
            "hermeshud1.jpg",
            "hermeshud2.jpg",
            "hermeshud3.jpg",
            "hermeshud4.jpg",
            "hermeshud5.jpg",
            "hermeshud6.jpg",
        ]
    },
    2: {
        name: "Свитшот Burberry",
        brand: "burberry",
        price: 114,
        description: "Классический свитшот Burberry с узнаваемым клетчатым узором. Высокое качество пошива.",
        features: [
            "Материал: высококачественный хлопок",
            "Узнаваемый клетчатый узор",
            "Фирменная бирка",
            "Размеры: M, L"
        ],
        images: [
            "СВИТШОТЫ BURBERRY1.jpg",
            "СВИТШОТЫ BURBERRY2.jpg",
            "СВИТШОТЫ BURBERRY3.jpg",
            "СВИТШОТЫ BURBERRY4.jpg",
            "СВИТШОТЫ BURBERRY5.jpg",
            "СВИТШОТЫ BURBERRY6.jpg",
            "СВИТШОТЫ BURBERRY7.jpg"
        ]
    },
    3: {
        name: "Свитшот Lacoste",
        brand: "lacoste",
        price: 98,
        description: "Спортивный свитшот Lacoste с фирменным крокодилом. Удобство и стиль для повседневной носки.",
        features: [
            "Материал: хлопок с небольшим добавлением эластана",
            "Фирменный крокодил",
            "Комфортная посадка",
            "Размеры: M, L"
        ],
        images: [
            "СВИТШОТЫ LACOSTEбел1.jpg",
            "СВИТШОТЫ LACOSTEбел2.jpg",
            "СВИТШОТЫ LACOSTEбел3.jpg",
            "СВИТШОТЫ LACOSTEбел4.jpg",
            "СВИТШОТЫ LACOSTEбел5.jpg",
            "СВИТШОТЫ LACOSTEбел6.jpg",
            "СВИТШОТЫ LACOSTEбел7.jpg"
        ]
    },
    4: {
        name: "Свитшот Lacoste черный",
        brand: "lacoste",
        price: 98,
        description: "Черный свитшот Lacoste для элегантного и стильного образа. Универсальный вариант на любой случай.",
        features: [
            "Материал: премиальный хлопок",
            "Классический черный цвет",
            "Фирменный крокодил",
            "Размеры: S, M, L, XL"
        ],
        images: [
            "СВИТШОТЫ LACOSTEчер1.jpg",
            "СВИТШОТЫ LACOSTEчер2.jpg",
            "СВИТШОТЫ LACOSTEчер3.jpg",
            "СВИТШОТЫ LACOSTEчер4.jpg",
            "СВИТШОТЫ LACOSTEчер5.jpg",
            "СВИТШОТЫ LACOSTЕчер6.jpg",
        ]
    },
    5: {
        name: "Зипка Dior",
        brand: "dior",
        price: 149,
        description: "Стильная зипка от Dior с фирменными элементами. Качество 1:1. Идеальный выбор для модного образа.",
        features: [
            "Материал: высококачественный полиэстер",
            "Фирменная фурнитура",
            "Качество 1:1",
            "Размеры: M, L"
        ],
        images: [
            "DIORзип1.jpg",
            "DIORзип2.jpg",
            "DIORзип3.jpg",
            "DIORзип4.jpg",
            "DIORзип5.jpg",
            "DIORзип6.jpg",
            "DIORзип7.jpg",
            "DIORзип8.jpg",
            "DIORзип9.jpg"
        ]
    },
    6: {
        name: "Лонгслив Guess",
        brand: "guess",
        price: 90,
        description: "Модный лонгслив от Guess с узнаваемым логотипом. Комфорт и стиль для повседневной носки.",
        features: [
            "Материал: хлопок",
            "Узнаваемый логотип Guess",
            "Удобный крой",
            "Размеры: M, L"
        ],
        images: [
            "Лонгguess1.jpg",
            "Лонgguess2.jpg",
            "Лонgguess3.jpg",
            "Лонgguess4.jpg",
            "Лонgguess5.jpg",
            "Лонgguess6.jpg",
            "Лонgguess7.jpg"
        ]
    },
    7: {
        name: "Лонгслив Guess черный",
        brand: "guess",
        price: 90,
        description: "Модный лонgслив от Guess с узнаваемым логотипом. Комфорт и стиль для повседневной носки.",
        features: [
            "Материал: хлопок",
            "Узнаваемый логотип Guess",
            "Удобный крой",
            "Размеры: M, L"
        ],
        images: [
            "Лонgguessчер1.jpg",
            "Лонgguessчер2.jpg",
            "Лонgguessчер3.jpg",
            "Лонgguessчер4.jpg",
            "Лонgguessчер5.jpg",
            "Лонgguessчер6.jpg",
            "Лонgguessчер7.jpg"
        ]
    },
    8: {
        name: "Жилетка Corteiz",
        brand: "corteiz",
        price: 139,
        description: "Уличная жилетка Corteiz для создания модного образа. Качество 1:1. Стиль и функциональность.",
        features: [
            "Материал: нейлон",
            "Водоотталкивающая пропитка",
            "Несколько карманов",
            "Размеры: M, L"
        ],
        images: [
            "photo_2025-07-01_17-31-38.jpg",
            "CORTEIZjil2.jpg",
            "CORTEIZjil3.jpg",
            "CORTEIZjil4.jpg",
            "CORTEIZjil5.jpg",
            "CORTEIZjil6.jpg",
            "CORTEIZjil7.jpg"
        ]
    },
    9: {
        name: "Жилетка Jordan & Supreme",
        brand: "jordan",
        price: 169,
        description: "Коллаборация Jordan и Supreme. Уникальный дизайн и высшее качество. Эксклюзивный предмет гардероба.",
        features: [
            "Материал: полиэстер",
            "Уникальный дизайн коллаборации",
            "Фирменные логотипы",
            "Размеры: M, L"
        ],
        images: [
            "ЖИЛЕТКИ JORDAN & SUPREMEбел1.jpg",
            "ЖИЛЕТКИ JORDAN & SUPREMEбел2.jpg",
            "ЖИЛЕТКИ JORDAN & SUPREMEбел3.jpg",
            "ЖИЛЕТКИ JORDAN & SUPREMEбел4.jpg",
            "ЖИЛЕТКИ JORDAN & SUPREMEбел5.jpg",
            "ЖИЛЕТКИ JORDAN & SUPREMEбел6.jpg",
            "ЖИЛЕТКИ JORDAN & SUPREMEбел7.jpg"
        ]
    },
    10: {
        name: "Жилетка Nike ACG",
        brand: "nike",
        price: 124,
        description: "Функциональная жилетка Nike ACG для активного отдыха и городского стиля. Технологичные материалы.",
        features: [
            "Материал: технологичная ткань Nike",
            "Водоотталкивающие свойства",
            "Светоотражающие элементы",
            "Размеры: M, L"
        ],
        images: [
            "ЖИЛЕТКИ NIKEasg1.jpg",
            "ЖИЛЕТКИ NIKEasg2.jpg",
            "ЖИЛЕТКИ NIKEasg3.jpg",
            "ЖИЛЕТКИ NIKEasg4.jpg",
            "ЖИЛЕТКИ NIKEasg5.jpg",
            "ЖИЛЕТКИ NIKEasg6.jpg",
            "ЖИЛЕТКИ NIKEasg7.jpg"
        ]
    },
    11: {
        name: "Жилетка Polo Ralph Lauren",
        brand: "polo",
        price: 119,
        description: "Классическая жилетка Polo Ralph Lauren. Элегантность и качество. Подходит для различных стилей.",
        features: [
            "Материал: хлопок/нейлон",
            "Классический дизайн",
            "Фирменный логотип",
            "Размеры: S, M, L, XL"
        ],
        images: [
            "ЖИЛЕТКИ POLO RALPH LAUREN1.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN2.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN3.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN4.jpg",
            "ЖиЛЕТКИ POLO RALPH LAUREN5.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN6.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN7.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN8.jpg"
        ]
    },
    12: {
        name: "Жилетка Prada",
        brand: "prada",
        price: 189,
        description: "Роскошная жилетка от Prada. Премиальные материалы и идеальная посадка. Высший уровень качества.",
        features: [
            "Материал: премиальные материалы",
            "Идеальная посадка",
            "Фирменная фурнитура",
            "Размеры: M, L"
        ],
        images: [
            "ЖИЛЕТКИ PRADA1.jpg",
            "ЖИЛЕТКИ PRADA2.jpg",
            "ЖИЛЕТКИ PRADA3.jpg",
            "ЖИЛЕТКИ PRADA4.jpg",
            "ЖИЛЕТКИ PRADA5.jpg",
            "ЖИЛЕТКИ PRADA6.jpg",
        ]
    }
};

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Переменная для хранения позиции прокрутки
let scrollPosition = 0;

// Основной код приложения
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация приложения
    initApp();

    // Скрываем прелоадер после загрузки
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
        }, 1000);
    });
});

function initApp() {
    // Инициализация корзины
    initCart();

    // Инициализация категорий
    initCategories();

    // Инициализация модальных окон
    initModals();

    // Инициализация быстрого просмотра
    initQuickView();

    // Инициализация кнопок добавления в корзину
    initAddToCartButtons();

    // Инициализация модальных окон преимуществ
    initAdvantageModals();

    // Обновляем счетчик корзины при загрузке
    updateCartCount();
}

function initCart() {
    updateCartCount();

    // Обработчик открытия корзины
    document.getElementById('cart-toggle').addEventListener('click', function() {
        openCart();
    });

    // Обработчик закрытия корзины
    document.querySelector('.close-btn').addEventListener('click', function() {
        closeCart();
    });

    // Обработчик кнопки "Оформить заказ"
    document.getElementById('order-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showToast('Корзина пуста', 'error');
            return;
        }

        const orderText = generateOrderText();
        const telegramUsername = 'bigdigovich';
        const encodedText = encodeURIComponent(orderText);

        // Открываем Telegram с заказом
        openTelegramLink(encodedText, telegramUsername);

        // Показываем уведомление
        showToast('Заказ отправлен в Telegram', 'success');

        // Не очищаем корзину автоматически - пусть пользователь сам решит
    });

    // Универсальная функция открытия Telegram
    function openTelegramLink(encodedText, username) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Пробуем открыть приложение Telegram
            window.location.href = `tg://resolve?domain=${username}&text=${encodedText}`;

            // Если не открылось — fallback на веб через 500 мс
            setTimeout(() => {
                window.open(`https://t.me/${username}?text=${encodedText}`, '_blank');
            }, 500);
        } else {
            // На ПК сразу открываем веб-версию
            window.open(`https://t.me/${username}?text=${encodedText}`, '_blank');
        }
    }

    // Обработчик кнопки "Скопировать заказ"
    document.getElementById('copy-order-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showToast('Корзина пуста', 'error');
            return;
        }

        const orderText = generateOrderText();

        // Современный API для копирования в буфер обмена
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(orderText)
                .then(() => {
                    showToast('Заказ скопирован в буфер обмена');
                })
                .catch(err => {
                    // Fallback для старых браузеров
                    copyToClipboardFallback(orderText);
                });
        } else {
            // Fallback для старых браузеров
            copyToClipboardFallback(orderText);
        }
    });

    // Обработчики для выбора способа оплаты
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            // Снимаем выделение со всех методов
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('selected');
            });

            // Выделяем выбранный метод
            this.classList.add('selected');

            // Программно выбираем radio-кнопку
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });

    // Автоматически выбираем первый способ оплаты
    const firstPaymentMethod = document.querySelector('.payment-method');
    if (firstPaymentMethod) {
        firstPaymentMethod.classList.add('selected');
        const radio = firstPaymentMethod.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
        }
    }
}

// Открытие корзины
function openCart() {
    document.getElementById('cart-sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();

    // Вибрация при открытии корзины
    if ('vibrate' in navigator) {
        navigator.vibrate(30);
    }
}

// Закрытие корзины
function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fallback метод для копирования в буфер обмена
function copyToClipboardFallback(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('Заказ скопирован в буфер обмена');
        } else {
            showToast('Не удалось скопировать заказ', 'error');
        }
    } catch (err) {
        showToast('Не удалось скопировать заказ', 'error');
    }

    document.body.removeChild(textArea);
}

function addToCart(productId, size = 'M') {
    const product = products[productId];
    if (!product) return;

    const existingItemIndex = cart.findIndex(item =>
        item.id === productId && item.size === size
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            size: size,
            quantity: 1,
            image: product.images[0]
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Товар добавлен в корзину 🛒');

    // Анимация "полета" в корзину
    createFlyToCartAnimation();

    // Обновляем корзину если она открыта
    if (document.getElementById('cart-sidebar').classList.contains('active')) {
        renderCartItems();
    }
}

// Создание анимации "полета" товара в корзину
function createFlyToCartAnimation() {
    const flyElement = document.createElement('div');
    flyElement.className = 'fly-to-cart';
    flyElement.innerHTML = '<i class="fas fa-shopping-cart"></i>';

    // Позиционируем элемент в центре экрана
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    flyElement.style.left = (viewportWidth / 2 - 30) + 'px';
    flyElement.style.top = (viewportHeight / 2 - 30) + 'px';

    // Конечная позиция (иконка корзины)
    const cartBtn = document.getElementById('cart-toggle');
    const cartRect = cartBtn.getBoundingClientRect();
    const endX = cartRect.left + cartRect.width / 2 - 30;
    const endY = cartRect.top + cartRect.height / 2 - 30;

    // Устанавливаем CSS переменные для анимации
    document.documentElement.style.setProperty('--fly-x', (endX - viewportWidth / 2) + 'px');
    document.documentElement.style.setProperty('--fly-y', (endY - viewportHeight / 2) + 'px');
    document.documentElement.style.setProperty('--fly-end-x', (endX - viewportWidth / 2) * 2 + 'px');
    document.documentElement.style.setProperty('--fly-end-y', (endY - viewportHeight / 2) * 2 + 'px');

    document.body.appendChild(flyElement);

    // Удаляем элемент после анимации
    setTimeout(() => {
        document.body.removeChild(flyElement);
    }, 1000);
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const itemElement = document.querySelectorAll('.cart-item')[index];
        if (itemElement) {
            itemElement.classList.add('cart-item-removing');

            setTimeout(() => {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                renderCartItems();
                showToast('Товар удален из корзины');
            }, 300);
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cart-count');

    if (cartBadge) {
        cartBadge.textContent = count;

        // Показываем/скрываем бейдж
        if (count > 0) {
            cartBadge.style.display = 'flex';
        } else {
            cartBadge.style.display = 'none';
        }

        // Анимация счетчика
        cartBadge.classList.add('pulse');
        setTimeout(() => {
            cartBadge.classList.remove('pulse');
        }, 500);
    }
}

function updateQuantity(index, change) {
    if (index >= 0 && index < cart.length) {
        const newQuantity = cart[index].quantity + change;

        if (newQuantity < 1) {
            removeFromCart(index);
            return;
        }

        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();

        // Вибрация при изменении количества
        if ('vibrate' in navigator) {
            navigator.vibrate(20);
        }
    }
}

function renderCartItems() {
    const cartContent = document.getElementById('cart-content');
    const cartTotal = document.getElementById('cart-total-price');
    const progressBar = document.getElementById('cart-progress-bar');
    const freeShippingInfo = document.getElementById('free-shipping-info');
    const shippingInfo = document.getElementById('shipping-info');

    if (!cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                <p>Ваша корзина пуста</p>
                <p style="color: var(--gray); font-size: 0.9rem; margin-top: 0.5rem;">Добавьте товары, чтобы продолжить</p>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '0 BYN';
        if (progressBar) progressBar.style.width = '0%';
        if (freeShippingInfo) freeShippingInfo.style.display = 'none';
        if (shippingInfo) shippingInfo.style.display = 'none';
        return;
    }

    let total = 0;
    let itemsHTML = '';

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        itemsHTML += `
            <div class="cart-item" style="animation-delay: ${index * 0.1}s">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwIiB5PSI0MCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+'>">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} BYN × ${item.quantity} = ${itemTotal} BYN</div>
                    <div class="cart-item-size">Размер: ${item.size}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${index})" title="Удалить товар">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    cartContent.innerHTML = itemsHTML;
    if (cartTotal) cartTotal.textContent = `${total} BYN`;

    // Обновляем прогресс бесплатной доставки
    updateShippingProgress(total);
}

// Обновление прогресса бесплатной доставки
function updateShippingProgress(total) {
    const progressBar = document.getElementById('cart-progress-bar');
    const freeShippingInfo = document.getElementById('free-shipping-info');
    const shippingInfo = document.getElementById('shipping-info');

    const freeShippingThreshold = 200;
    const progress = Math.min((total / freeShippingThreshold) * 100, 100);

    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }

    if (freeShippingInfo && shippingInfo) {
        if (total >= freeShippingThreshold) {
            freeShippingInfo.style.display = 'block';
            shippingInfo.style.display = 'none';
            freeShippingInfo.innerHTML = '🎉 Вы получили бесплатную доставку!';
        } else {
            freeShippingInfo.style.display = 'none';
            shippingInfo.style.display = 'block';
            const remaining = freeShippingThreshold - total;
            shippingInfo.innerHTML = `До бесплатной доставки осталось: ${remaining} BYN`;
        }
    }
}

function generateOrderText() {
    // Получаем выбранный способ оплаты
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = selectedPayment ? selectedPayment.value : 'Наличные';

    let text = "🛍️ Здравствуйте! Хочу оформить заказ:\n\n";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        text += `• ${item.name} (Размер: ${item.size}) - ${item.quantity} шт. × ${item.price} BYN = ${itemTotal} BYN\n`;
    });

    text += `\n💰 Итого: ${total} BYN`;
    text += `\n💳 Способ оплаты: ${paymentMethod}`;

    // Добавляем информацию о бесплатной доставке
    if (total >= 200) {
        text += "\n🚚 Доставка: Бесплатная";
    } else {
        text += "\n🚚 Доставка: 15 BYN";
    }

    text += "\n\n📦 Пожалуйста, укажите адрес доставки и удобное время для получения заказа.";

    return text;
}

// Функция для показа уведомлений
function showToast(message, type = 'success') {
    // Создаем элемент уведомления
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Добавляем в DOM
    document.body.appendChild(toast);

    // Анимация появления
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Автоматическое скрытие через 3 секунды
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Остальные функции (initCategories, initModals, initQuickView и т.д.) остаются без изменений
// ... [остальной код функций инициализации] ...

// Инициализация кнопок добавления в корзину
function initAddToCartButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart-btn')) {
            const productId = e.target.closest('.add-to-cart-btn').dataset.productId;
            const sizeSelect = document.querySelector(`.product-card[data-product-id="${productId}"] .size-select`);
            const size = sizeSelect ? sizeSelect.value : 'M';

            addToCart(productId, size);

            // Анимация кнопки
            const btn = e.target.closest('.add-to-cart-btn');
            btn.classList.add('adding');
            setTimeout(() => {
                btn.classList.remove('adding');
            }, 1000);
        }
    });
}

// Функция для обновления общего количества товаров в корзине
function updateTotalItemsCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalElement = document.getElementById('cart-total-items');
    if (totalElement) {
        totalElement.textContent = totalItems;
    }
}

// Обновляем общее количество при изменении корзины
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cart-count');

    if (cartBadge) {
        cartBadge.textContent = count;
        cartBadge.style.display = count > 0 ? 'flex' : 'none';

        // Анимация
        cartBadge.classList.add('pulse');
        setTimeout(() => cartBadge.classList.remove('pulse'), 500);
    }

    updateTotalItemsCount();
}

// Инициализация модальных окон преимуществ
function initAdvantageModals() {
    const advantageButtons = document.querySelectorAll('.advantage-btn');
    const advantageModal = document.getElementById('advantage-modal');
    const closeModal = advantageModal.querySelector('.close-modal');

    advantageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const advantageType = this.dataset.advantage;
            showAdvantageModal(advantageType);
        });
    });

    closeModal.addEventListener('click', function() {
        advantageModal.classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

function showAdvantageModal(type) {
    const modal = document.getElementById('advantage-modal');
    const title = modal.querySelector('.modal-title');
    const content = modal.querySelector('.modal-content');

    const advantages = {
        quality: {
            title: 'Качество 1:1',
            content: 'Все наши товары проходят строгий контроль качества. Мы гарантируем полное соответствие оригиналу по материалам, пошиву и деталям.'
        },
        delivery: {
            title: 'Быстрая доставка',
            content: 'Доставка по всему миру от 3 до 14 дней. Бесплатная доставка при заказе от 200 BYN. Отслеживание заказа в реальном времени.'
        },
        support: {
            title: 'Поддержка 24/7',
            content: 'Наша служба поддержки работает круглосуточно. Поможем с выбором размера, ответим на вопросы и решим любые проблемы.'
        }
    };

    if (advantages[type]) {
        title.textContent = advantages[type].title;
        content.innerHTML = `<p>${advantages[type].content}</p>`;
        modal.classList.add('active');
        document.getElementById('overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Добавляем функцию для плавной прокрутки
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Инициализация слайдеров
function initSliders() {
    // Инициализация главного слайдера
    const mainSlider = document.querySelector('.main-slider');
    if (mainSlider) {
        let currentSlide = 0;
        const slides = mainSlider.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Автопрокрутка слайдера
        setInterval(nextSlide, 5000);
    }
}

// Добавляем обработчики для улучшения UX
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target !== '#') {
                smoothScrollTo(target);
            }
        });
    });

    // Ленивая загрузка изображений
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Добавляем обработчик для overlay
    document.getElementById('overlay').addEventListener('click', function() {
        closeCart();

        // Закрываем все модальные окна
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });

        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Инициализация слайдеров
    initSliders();

    // Добавляем обработчик для кнопки "Наверх"
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: var(--shadow);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow)';
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(scrollToTopBtn);

    // Показываем/скрываем кнопку при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Добавляем анимации при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .advantage-card, .category-card');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Запускаем сразу при загрузке
    animateOnScroll();
});

// Добавляем поддержку PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Добавляем обработчик для изменения темы
function initTheme() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.title = 'Переключить тему';

    themeToggle.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: var(--shadow);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    document.body.appendChild(themeToggle);
}

// Инициализируем тему при загрузке
document.addEventListener('DOMContentLoaded', initTheme);