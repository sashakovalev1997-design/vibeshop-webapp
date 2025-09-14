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
        description: "Модный лонгслив от Guess с узнаваемым логотипом. Комфорт и стиль для повседневной носки.",
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

// Переменные для пагинации
let currentPage = 1;
const productsPerPage = 8;
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

    // Инициализация загрузки изображений
    initImageLoading();

    // Инициализация пагинации
    initPagination();

    // Инициализация touch events для мобильных
    initTouchEvents();

    // Обновляем счетчик корзины при загрузке
    updateCartCount();
    // Инициализация поиска
    initSearch();
    // Предзагрузка изображений
    preloadProductImages();
}

// КОРЗИНА
function initCart() {
    updateCartCount();

    // Обработчик открытия корзины
    document.getElementById('cart-toggle').addEventListener('click', function() {
        document.getElementById('cart-sidebar').classList.add('active');
        document.getElementById('overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCartItems();
    });

    // Обработчик закрытия корзины
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('cart-sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = 'auto';
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

        // Очищаем корзину
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();

        // Показываем уведомление
        showToast('Заказ отправлен, корзина очищена', 'success');
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
}

// Универсальная функция открытия Telegram
function openTelegramLink(encodedText, username) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const telegramUrl = `https://t.me/${username}?text=${encodedText}`;

    if (isMobile) {
        // Пробуем открыть приложение Telegram
        const appUrl = `tg://resolve?domain=${username}&text=${encodedText}`;

        // Создаем iframe для открытия приложения
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = appUrl;
        document.body.appendChild(iframe);

        // Таймаут для проверки, открылось ли приложение
        let appOpened = false;
        const timeout = setTimeout(() => {
            if (!appOpened) {
                // Если приложение не открылось, открываем веб-версию
                window.location.href = telegramUrl;
            }
            document.body.removeChild(iframe);
        }, 500);

        // Событие для определения, что приложение открылось
        window.addEventListener('blur', function onBlur() {
            appOpened = true;
            clearTimeout(timeout);
            window.removeEventListener('blur', onBlur);
            document.body.removeChild(iframe);
        });
    } else {
        // На ПК сразу открываем веб-версию
        window.open(telegramUrl, '_blank');
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
    showToast('Товар добавлен в корзину');

    // Обновляем корзину если она открыта
    if (document.getElementById('cart-sidebar').classList.contains('active')) {
        renderCartItems();
    }
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
        showToast('Товар удален из корзины');
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cart-count');

    if (cartBadge) {
        cartBadge.textContent = count;

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
    }
}

function renderCartItems() {
    const cartContent = document.getElementById('cart-content');
    const cartTotal = document.getElementById('cart-total-price');

    if (!cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Ваша корзина пуста</p>
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
            <div class="cart-item">
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
                        <button class="remove-item" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i> Удалить
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
    // Получаем выбранный способ оплаты
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = selectedPayment ? selectedPayment.value : 'Наличные';

    let text = "Здравствуйте! Хочу оформить заказ:\n\n";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        text += `- ${item.name} (Размер: ${item.size}) - ${item.quantity} шт. × ${item.price} BYN = ${itemTotal} BYN\n`;
    });

    text += `\nИтого: ${total} BYN`;
    text += `\n💳 Способ оплаты: ${paymentMethod}`;
    text += "\n\nСпасибо!";
    return text;
}

// КАТЕГОРИИ
function initCategories() {
    const categoryElements = document.querySelectorAll('.category');
    const productCards = document.querySelectorAll('.product-card');
    const categoriesContainer = document.querySelector('.categories');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');

    // Функция фильтрации товаров по категориям
    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (category === 'все' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Обработчики для категорий
    categoryElements.forEach(categoryEl => {
        categoryEl.addEventListener('click', function() {
            const selectedCategory = this.dataset.category;

            // Убираем выделение со всех категорий и выделяем выбранную
            categoryElements.forEach(el => el.classList.remove('active'));
            this.classList.add('active');

            // Фильтруем товары
            filterProducts(selectedCategory);
        });
    });

    // Прокрутка категорий
    if (scrollLeftBtn && scrollRightBtn) {
        scrollRightBtn.addEventListener('click', () => {
            categoriesContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });

        scrollLeftBtn.addEventListener('click', () => {
            categoriesContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });
    }

    // Активируем категорию "Все" по умолчанию
    const allCategory = document.querySelector('.category[data-category="все"]');
    if (allCategory) {
        allCategory.classList.add('active');
    }
}

// МОДАЛЬНЫЕ ОКНА
function initModals() {
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const overlay = document.getElementById('overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    if (contactBtn && contactModal) {
        contactBtn.addEventListener('click', function() {
            contactModal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            contactModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
            document.getElementById('cart-sidebar').classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
}

// БЫСТРЫЙ ПРОСМОТР
function initQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const backToProductsBtn = document.getElementById('back-to-products');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();

            // Сохраняем текущую позицию прокрутки
            scrollPosition = window.scrollY;

            const productId = this.dataset.product;
            showProductDetail(productId);
        });
    });

    if (backToProductsBtn) {
        backToProductsBtn.addEventListener('click', function() {
            document.getElementById('product-detail').classList.remove('active');
            document.body.style.overflow = 'auto';

            // Восстанавливаем позицию прокрутки
            window.scrollTo(0, scrollPosition);
        });
    }

    const detailAddToCartBtn = document.getElementById('detail-add-to-cart');
    if (detailAddToCartBtn) {
        detailAddToCartBtn.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const selectedSize = document.querySelector('.size-option.selected')?.dataset.size || 'M';

            addToCart(productId, selectedSize);

            this.classList.add('added');
            this.innerHTML = '<i class="fas fa-check"></i> Добавлено в корзину';

            setTimeout(() => {
                this.classList.remove('added');
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> Добавить в корзину';
            }, 2000);
        });
    }
}

function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;

    const productDetailPage = document.getElementById('product-detail');
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsContainer = document.querySelector('.product-thumbnails');
    const productName = document.getElementById('detail-product-name');
    const productPrice = document.getElementById('detail-product-price');
    const productDesc = document.getElementById('detail-product-desc');
    const featuresList = document.getElementById('detail-features');
    const addToCartBtn = document.getElementById('detail-add-to-cart');

    if (!productDetailPage || !mainImage || !productName) return;

    productName.textContent = product.name;
    productPrice.textContent = `${product.price} BYN`;
    productDesc.textContent = product.description;

    // Убедитесь, что изображение загружается напрямую, без ленивой загрузки
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
    mainImage.style.opacity = 1; // Убедитесь, что изображение видимо

    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${product.name} - вид ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            thumbnail.loading = 'lazy';
            thumbnail.onerror = function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjM1IiB5PSIzNSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1iZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+';
            };

            if (index === 0) {
                thumbnail.classList.add('active');
            }

            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                mainImage.style.opacity = 0;
                setTimeout(() => {
                    mainImage.style.opacity = 1;
                }, 100);
            });

            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    if (featuresList) {
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }

    if (addToCartBtn) {
        addToCartBtn.dataset.productId = productId;
    }

    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.size === 'M') {
            option.classList.add('selected');
        }
    });

    productDetailPage.classList.add('active');
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// КНОПКИ ДОБАВЛЕНИЯ В КОРЗИНУ
function initAddToCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();

            const productCard = this.closest('.product-card');
            if (!productCard) return;

            // Находим кнопку быстрого просмотра в той же карточке товара
            const quickViewBtn = productCard.querySelector('.quick-view');
            if (!quickViewBtn) return;

            // Получаем ID продукта из data-атрибута кнопки быстрого просмотра
            const productId = quickViewBtn.dataset.product;
            if (!productId || !products[productId]) return;

            // Добавляем в корзину
            addToCart(productId);

            // Анимация кнопки
            const originalHtml = this.innerHTML;
            this.classList.add('added');
            this.innerHTML = '<i class="fas fa-check"></i> Добавлено';

            setTimeout(() => {
                this.classList.remove('added');
                this.innerHTML = originalHtml;
            }, 2000);
        });
    });
}

// МОДАЛЬНЫЕ ОКНА ПРЕИМУЩЕСТВ
function initAdvantageModals() {
    const features = document.querySelectorAll('.feature');
    const modals = {
        '🚚': 'delivery-modal',
        '🏅': 'quality-modal',
        '🏷️': 'prices-modal'
    };

    features.forEach(feature => {
        feature.addEventListener('click', function() {
            const emoji = this.querySelector('.emoji-icon').textContent.trim();
            const modalId = modals[emoji];

            if (modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });

    // Закрытие модальных окон
    document.querySelectorAll('.close-advantage-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.advantage-modal').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        });
    });

    // Закрытие по клику вне модального окна
    document.querySelectorAll('.advantage-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.advantage-modal').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });
}

// TOUCH EVENTS ДЛЯ МОБИЛЬНЫХ
function initTouchEvents() {
    let touchStartY = 0;
    const scrollThreshold = 5; // Порог для определения скролла

    const quickViewButtons = document.querySelectorAll('.quick-view');

    quickViewButtons.forEach(button => {
        button.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        button.addEventListener('touchmove', function(e) {
            const currentY = e.touches[0].clientY;
            const deltaY = Math.abs(currentY - touchStartY);

            // Если пользователь скроллит, отменяем действие
            if (deltaY > scrollThreshold) {
                this.style.opacity = '0.5'; // Визуальная обратная связь
            }
        }, { passive: true });

        button.addEventListener('touchend', function(e) {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = Math.abs(touchEndY - touchStartY);

            // Если это был тап, а не скролл
            if (deltaY <= scrollThreshold) {
                e.preventDefault();
                e.stopPropagation();

                // Сохраняем позицию прокрутки
                scrollPosition = window.scrollY;

                const productId = this.dataset.product;
                showProductDetail(productId);
            }

            this.style.opacity = '1';
        });
    });

    // Обработка свайпов для модальных окон изображений
    document.addEventListener('DOMContentLoaded', function() {
        const productDetail = document.getElementById('product-detail');
        if (!productDetail) return;

        let touchStartX = 0;
        let touchEndX = 0;

        productDetail.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        productDetail.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            // Определяем свайп влево/вправо
            if (Math.abs(deltaX) > 50) { // Порог для свайпа
                const mainImage = document.getElementById('main-product-image');
                const thumbnails = document.querySelectorAll('.thumbnail');
                let currentIndex = 0;

                // Находим текущее активное изображение
                thumbnails.forEach((thumb, index) => {
                    if (thumb.classList.contains('active')) {
                        currentIndex = index;
                    }
                });

                if (deltaX > 0) { // Свайп вправо - предыдущее изображение
                    const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
                    thumbnails[prevIndex].click();
                } else { // Свайп влево - следующее изображение
                    const nextIndex = (currentIndex + 1) % thumbnails.length;
                    thumbnails[nextIndex].click();
                }
            }
        }, { passive: true });
    });
}

// ЗАГРУЗКА ИЗОБРАЖЕНИЙ
function initImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    // Создаем Intersection Observer для ленивой загрузки
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src') || img.src;

                // Загружаем изображение
                loadImageWithPriority(src).then(() => {
                    img.src = src;
                    img.setAttribute('data-loaded', 'true');
                    observer.unobserve(img);
                }).catch(() => {
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+';
                });
            }
        });
    }, {
        rootMargin: '200px 0px', // Начинаем загружать заранее
        threshold: 0.01
    });

    // Наблюдаем за всеми изображениями
    images.forEach(img => {
        // Сохраняем оригинальный src в data-src
        if (!img.hasAttribute('data-src')) {
            img.setAttribute('data-src', img.src);
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPg==';
        }
        imageObserver.observe(img);
    });
}

// Функция приоритетной загрузки изображений
function loadImageWithPriority(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;

        // Таймаут для избежания вечной загрузки
        setTimeout(() => {
            if (!img.complete) reject();
        }, 10000);
    });
}

// ПАГИНАЦИЯ
function initPagination() {
    const productsContainer = document.querySelector('.products-grid');
    const paginationContainer = document.querySelector('.pagination');

    if (!productsContainer || !paginationContainer) return;

    const allProducts = Array.from(productsContainer.querySelectorAll('.product-card'));
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    // Создаем пагинацию
    function createPagination() {
        paginationContainer.innerHTML = '';

        // Кнопка "Назад"
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.classList.add('pagination-btn');
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateProductsDisplay();
                updatePagination();
                window.scrollTo(0, 0);
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Номера страниц
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.classList.add('pagination-btn');
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                updateProductsDisplay();
                updatePagination();
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(pageBtn);
        }

        // Кнопка "Вперед"
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.classList.add('pagination-btn');
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updateProductsDisplay();
                updatePagination();
                window.scrollTo(0, 0);
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    // Обновление отображения товаров
    function updateProductsDisplay() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        allProducts.forEach((product, index) => {
            if (index >= startIndex && index < endIndex) {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'translateY(0)';
                }, 50);
            } else {
                product.style.opacity = '0';
                product.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    product.style.display = 'none';
                }, 300);
            }
        });
    }

    // Обновление состояния пагинации
    function updatePagination() {
        const buttons = paginationContainer.querySelectorAll('.pagination-btn');
        buttons.forEach((button, index) => {
            if (index === 0) return; // Пропускаем кнопку "Назад"
            if (index === buttons.length - 1) return; // Пропускаем кнопку "Вперед"

            const pageNum = parseInt(button.textContent);
            button.classList.toggle('active', pageNum === currentPage);
        });

        // Обновляем состояние кнопок навигации
        buttons[0].disabled = currentPage === 1;
        buttons[buttons.length - 1].disabled = currentPage === totalPages;
    }

    // Инициализация пагинации
    createPagination();
    updateProductsDisplay();
}

// УВЕДОМЛЕНИЯ
function showToast(message, type = 'success') {
    // Удаляем существующие уведомления
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        toast.remove();
    });

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(toast);

    // Анимация появления
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Автоматическое скрытие через 3 секунды
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}
// ПОИСК
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchResults = document.getElementById('search-results');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const searchContainer = document.querySelector('.search-container');

    let searchTimeout;

    // Функция поиска товаров
    function searchProducts(query) {
        if (!query.trim()) {
            searchResults.style.display = 'none';
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const results = [];

        // Поиск по всем товарам
        Object.entries(products).forEach(([id, product]) => {
            const nameMatch = product.name.toLowerCase().includes(searchTerm);
            const brandMatch = product.brand.toLowerCase().includes(searchTerm);
            const descMatch = product.description.toLowerCase().includes(searchTerm);
            const categoryMatch = getProductCategory(product).toLowerCase().includes(searchTerm);

            if (nameMatch || brandMatch || descMatch || categoryMatch) {
                results.push({
                    id,
                    ...product,
                    category: getProductCategory(product)
                });
            }
        });

        displaySearchResults(results);
    }

    // Функция определения категории товара
    function getProductCategory(product) {
        const name = product.name.toLowerCase();
        if (name.includes('свитшот')) return 'свитшоты';
        if (name.includes('лонгслив')) return 'лонгсливы';
        if (name.includes('зипк')) return 'зипки';
        if (name.includes('жилетк')) return 'жилетки';
        if (name.includes('сумк')) return 'сумки';
        return 'другое';
    }

    // Отображение результатов поиска
    function displaySearchResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>Ничего не найдено</p>
                    <small>Попробуйте изменить запрос</small>
                </div>
            `;
        } else {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${product.images[0]}" alt="${product.name}" class="search-result-image" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI1IiB5PSIyNSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+'">
                    <div class="search-result-info">
                        <div class="search-result-name">${product.name}</div>
                        <div class="search-result-price">${product.price} BYN</div>
                        <div class="search-result-category">${product.category}</div>
                    </div>
                `;

                resultItem.addEventListener('click', () => {
                    showProductDetail(product.id);
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                    clearSearchBtn.style.display = 'none';
                });

                searchResults.appendChild(resultItem);
            });
        }

        searchResults.style.display = 'block';
    }

    // Обработчики событий
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = e.target.value;

        if (query) {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
            searchResults.style.display = 'none';
            return;
        }

        searchTimeout = setTimeout(() => {
            searchProducts(query);
        }, 300);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts(this.value);
        }
    });

    searchBtn.addEventListener('click', () => {
        searchProducts(searchInput.value);
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
    });

    // Закрытие результатов при клике вне области поиска
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target) &&
            !mobileSearchBtn?.contains(e.target)) {
            searchResults.style.display = 'none';

            // На мобильных скрываем всю поисковую панель
            if (window.innerWidth <= 768) {
                searchContainer.classList.remove('active');
            }
        }
    });

    // Мобильный поиск
    if (mobileSearchBtn && searchContainer) {
        mobileSearchBtn.addEventListener('click', () => {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }

    // Обработка escape для закрытия поиска
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.style.display = 'none';
            if (window.innerWidth <= 768) {
                searchContainer.classList.remove('active');
            }
        }
    });
}
// Функция предзагрузки изображений
function preloadProductImages() {
    const allImages = [];

    // Собираем все изображения из продуктов
    Object.values(products).forEach(product => {
        product.images.forEach(image => {
            allImages.push(image);
        });
    });

    // Предзагружаем изображения
    allImages.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
        img.onerror = function() {
            console.warn('Не удалось загрузить изображение:', imageSrc);
        };
    });

    console.log('Предзагружено изображений:', allImages.length);
}
// Инициализация после полной загрузки страницы
window.addEventListener('load', function() {
    // Предзагрузка изображений для текущей viewport
    preloadVisibleImages();

    // Запускаем ленивую загрузку
    initImageLoading();
});

function preloadVisibleImages() {
    const viewportImages = document.querySelectorAll('.product-card:not([style*="display: none"]) img');
    viewportImages.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
}
// Глобальные функции для использования в HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.showProductDetail = showProductDetail;
window.openTelegramLink = openTelegramLink;
window.copyToClipboardFallback = copyToClipboardFallback;