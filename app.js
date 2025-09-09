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
let currentProductId = null;
let selectedSize = 'M';

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
    });

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
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('selected');
            });
            this.classList.add('selected');
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

function initCategories() {
    const categories = document.querySelectorAll('.category');
    const productsGrid = document.getElementById('products-grid');
    const products = document.querySelectorAll('.product-card');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.dataset.category;

            // Убираем активный класс у всех категорий
            categories.forEach(cat => cat.classList.remove('active'));
            // Добавляем активный класс текущей категории
            this.classList.add('active');

            // Фильтрация товаров
            products.forEach(product => {
                if (categoryName === 'все' || product.dataset.category === categoryName) {
                    product.style.display = 'block';
                    product.classList.add('animate');
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Инициализация кнопок прокрутки категорий
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    const categoriesContainer = document.querySelector('.categories');

    if (scrollLeft && scrollRight && categoriesContainer) {
        scrollLeft.addEventListener('click', () => {
            categoriesContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });

        scrollRight.addEventListener('click', () => {
            categoriesContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
}

function initModals() {
    // Модальное окно контактов
    const contactModal = document.getElementById('contact-modal');
    const contactBtn = document.getElementById('contact-btn');
    const closeModalBtn = document.querySelector('.close-modal');

    if (contactBtn && contactModal) {
        contactBtn.addEventListener('click', () => {
            contactModal.classList.add('active');
            document.getElementById('overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            contactModal.classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Обработчик для overlay
    document.getElementById('overlay').addEventListener('click', function() {
        closeCart();
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.querySelectorAll('.advantage-modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

function initQuickView() {
    // Обработчики для быстрого просмотра
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-view')) {
            const productId = e.target.dataset.product;
            showProductDetail(productId);
        }
    });

    // Обработчик для кнопки "Назад к товарам"
    document.getElementById('back-to-products').addEventListener('click', function() {
        document.getElementById('product-detail').classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Обработчики для выбора размера
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('size-option')) {
            // Убираем выделение у всех размеров
            document.querySelectorAll('.size-option').forEach(option => {
                option.classList.remove('selected');
            });
            // Выделяем выбранный размер
            e.target.classList.add('selected');
            selectedSize = e.target.dataset.size;
        }
    });

    // Обработчик для добавления в корзину из детальной страницы
    document.getElementById('detail-add-to-cart').addEventListener('click', function() {
        if (currentProductId) {
            addToCart(currentProductId, selectedSize);
            this.classList.add('added');
            setTimeout(() => {
                this.classList.remove('added');
            }, 1000);
        }
    });
}

function initAddToCartButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart-btn')) {
            const productCard = e.target.closest('.product-card');
            const productId = Array.from(productCard.parentNode.children).indexOf(productCard) + 1;
            addToCart(productId.toString(), 'M');

            // Анимация кнопки
            const btn = e.target.closest('.add-to-cart-btn');
            btn.classList.add('adding');
            setTimeout(() => {
                btn.classList.remove('adding');
            }, 1000);
        }
    });
}

function initAdvantageModals() {
    // Обработчики для модальных окон преимуществ
    const advantageModals = {
        'quality': document.getElementById('quality-modal'),
        'delivery': document.getElementById('delivery-modal'),
        'prices': document.getElementById('prices-modal')
    };

    const closeButtons = document.querySelectorAll('.close-advantage-modal');

    // Закрытие модальных окон преимуществ
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.advantage-modal').forEach(modal => {
                modal.classList.remove('active');
            });
            document.getElementById('overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Открытие модальных окон при клике на преимущества в hero
    document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.addEventListener('click', function() {
            let modalKey = '';
            switch(index) {
                case 0: modalKey = 'delivery'; break;
                case 1: modalKey = 'quality'; break;
                case 2: modalKey = 'prices'; break;
            }

            if (advantageModals[modalKey]) {
                advantageModals[modalKey].classList.add('active');
                document.getElementById('overlay').classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
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

// Универсальная функция открытия Telegram
function openTelegramLink(encodedText, username) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = `tg://resolve?domain=${username}&text=${encodedText}`;
        setTimeout(() => {
            window.open(`https://t.me/${username}?text=${encodedText}`, '_blank');
        }, 500);
    } else {
        window.open(`https://t.me/${username}?text=${encodedText}`, '_blank');
    }
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

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    flyElement.style.left = (viewportWidth / 2 - 30) + 'px';
    flyElement.style.top = (viewportHeight / 2 - 30) + 'px';

    const cartBtn = document.getElementById('cart-toggle');
    const cartRect = cartBtn.getBoundingClientRect();
    const endX = cartRect.left + cartRect.width / 2 - 30;
    const endY = cartRect.top + cartRect.height / 2 - 30;

    document.documentElement.style.setProperty('--fly-x', (endX - viewportWidth / 2) + 'px');
    document.documentElement.style.setProperty('--fly-y', (endY - viewportHeight / 2) + 'px');

    document.body.appendChild(flyElement);

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

        if (count > 0) {
            cartBadge.style.display = 'flex';
        } else {
            cartBadge.style.display = 'none';
        }

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

        if ('vibrate' in navigator) {
            navigator.vibrate(20);
        }
    }
}

function renderCartItems() {
    const cartContent = document.getElementById('cart-content');
    const cartTotal = document.getElementById('cart-total-price');

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
}

function generateOrderText() {
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

    if (total >= 200) {
        text += "\n🚚 Доставка: Бесплатная";
    } else {
        text += "\n🚚 Доставка: 15 BYN";
    }

    text += "\n\n📦 Пожалуйста, укажите адрес доставки и удобное время для получения заказа.";

    return text;
}

function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;

    currentProductId = productId;

    // Заполняем информацию о товаре
    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-price').textContent = `${product.price} BYN`;
    document.getElementById('detail-product-desc').textContent = product.description;

    // Заполняем характеристики
    const featuresList = document.getElementById('detail-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Устанавливаем главное изображение
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Создаем миниатюры
    const thumbnailsContainer = document.querySelector('.product-thumbnails');
    thumbnailsContainer.innerHTML = '';

    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Миниатюра ${index + 1}`;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');

        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });

        thumbnailsContainer.appendChild(thumbnail);
    });

    // Сбрасываем выбор размера
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector('.size-option[data-size="M"]').classList.add('selected');
    selectedSize = 'M';

    // Показываем страницу товара
    document.getElementById('product-detail').classList.add('active');
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

// Функция для показа уведомлений
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Добавляем обработчик для overlay
document.getElementById('overlay').addEventListener('click', function() {
    closeCart();
    document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
    });
    document.querySelectorAll('.advantage-modal.active').forEach(modal => {
        modal.classList.remove('active');
    });
    this.classList.remove('active');
    document.body.style.overflow = 'auto';
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
