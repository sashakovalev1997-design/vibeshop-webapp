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
            "Доступные размеры:  M, L"
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
    // ... остальные продукты остаются без изменений
    // (полный список продуктов из вашего исходного файла)
};

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Переменные для пагинации
let currentPage = 1;
const productsPerPage = 8;
let scrollPosition = 0;
let filteredProducts = [];

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
    monitorPerformance();
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

    // Инициализируем отфильтрованные продукты
    filteredProducts = Array.from(productCards);

    // Функция фильтрации товаров по категориям
    function filterProducts(category) {
        filteredProducts = Array.from(productCards);

        if (category !== 'все') {
            filteredProducts = filteredProducts.filter(card => {
                const cardCategory = card.dataset.category;
                return cardCategory === category;
            });
        }

        // Сбрасываем пагинацию при смене категории
        currentPage = 1;

        // Обновляем отображение товаров
        updateProductsDisplay();

        // Обновляем пагинацию
        updatePagination();
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

    // Устанавливаем первое изображение сразу
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
    mainImage.style.opacity = 1;
    mainImage.style.transition = 'opacity 0.3s ease';

    // Добавляем обработчик ошибки для главного изображения
    mainImage.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwIiB5PSI0MCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+';
    };

    // Миниатюры
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${product.name} - вид ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            thumbnail.loading = 'lazy';

            if (index === 0) {
                thumbnail.classList.add('active');
            }

            thumbnail.addEventListener('click', function() {
                // Плавная смена главного изображения
                mainImage.style.opacity = 0;

                setTimeout(() => {
                    mainImage.src = this.src;
                    mainImage.style.opacity = 1;

                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                }, 150);
            });

            // Обработчик ошибки для миниатюр
            thumbnail.onerror = function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjM1IiB5PSIzNSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+';
            };

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
    if ('loading' in HTMLImageElement.prototype) {
        // Браузер поддерживает native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
                img.addEventListener('error', () => {
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+';
                    img.style.opacity = '1';
                });
            }
        });
    } else {
        // Fallback для старых браузеров
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src || lazyImage.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    }
}

// Функция для измерения и оптимизации производительности
function monitorPerformance() {
    // Измерение времени загрузки
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Время загрузки страницы: ${loadTime}ms`);

            if (loadTime > 3000) {
                console.warn('Время загрузки превышает 3 секунды. Рекомендуется оптимизация.');
            }
        }, 0);
    });

    // Отслеживание Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
    }).observe({type: 'largest-contentful-paint', buffered: true});
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

    // Получаем все карточки товаров
    const allProducts = Array.from(productsContainer.querySelectorAll('.product-card'));
    filteredProducts = allProducts;

    // Создаем пагинацию
    createPagination();
    updateProductsDisplay();
}

function createPagination() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Очищаем контейнер пагинации
    paginationContainer.innerHTML = '';

    // Если страниц меньше 2, скрываем пагинацию
    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = 'flex';

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

function updateProductsDisplay() {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;

    // Скрываем все товары
    filteredProducts.forEach(product => {
        product.style.display = 'none';
    });

    // Показываем товары для текущей страницы
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < filteredProducts.length; i++) {
        filteredProducts[i].style.display = 'block';
    }
}

function updatePagination() {
    createPagination();
}

// ПОИСК
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const productsContainer = document.querySelector('.products-grid');

    if (!searchInput || !searchBtn || !productsContainer) return;

    const allProducts = Array.from(productsContainer.querySelectorAll('.product-card'));

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === '') {
            // Если поиск пустой, показываем все товары
            filteredProducts = allProducts;
        } else {
            // Фильтруем товары по поисковому запросу
            filteredProducts = allProducts.filter(product => {
                const productName = product.querySelector('.product-name').textContent.toLowerCase();
                const productBrand = product.dataset.category || '';
                return productName.includes(searchTerm) || productBrand.includes(searchTerm);
            });
        }

        // Сбрасываем пагинацию
        currentPage = 1;

        // Обновляем отображение
        updateProductsDisplay();
        updatePagination();
    }

    // Поиск по кнопке
    searchBtn.addEventListener('click', performSearch);

    // Поиск по Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Очистка поиска
    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            filteredProducts = allProducts;
            currentPage = 1;
            updateProductsDisplay();
            updatePagination();
        }
    });
}

// ПРЕДЗАГРУЗКА ИЗОБРАЖЕНИЙ
function preloadProductImages() {
    const productImages = [];

    // Собираем все URL изображений из продуктов
    Object.values(products).forEach(product => {
        product.images.forEach(image => {
            productImages.push(image);
        });
    });

    // Предзагружаем изображения с низким приоритетом
    productImages.forEach((src, index) => {
        setTimeout(() => {
            const img = new Image();
            img.src = src;
        }, index * 100); // Растягиваем загрузку во времени
    });
}

// УВЕДОМЛЕНИЯ
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

    // Показываем с анимацией
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Убираем через 3 секунды
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// ОБРАБОТЧИКИ ДЛЯ РАЗМЕРОВ
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

// ОБРАБОТЧИК ДЛЯ КНОПКИ "НАЗАД" В БРАУЗЕРЕ
window.addEventListener('popstate', function(event) {
    const productDetail = document.getElementById('product-detail');
    if (productDetail && productDetail.classList.contains('active')) {
        productDetail.classList.remove('active');
        document.body.style.overflow = 'auto';
        window.scrollTo(0, scrollPosition);
        history.pushState(null, null, window.location.href);
    }
});

// ОБРАБОТЧИК ДЛЯ КНОПКИ "НАЗАД" В МОБИЛЬНОЙ ВЕРСИИ
if (document.getElementById('back-to-products')) {
    document.getElementById('back-to-products').addEventListener('click', function() {
        const productDetail = document.getElementById('product-detail');
        if (productDetail && productDetail.classList.contains('active')) {
            productDetail.classList.remove('active');
            document.body.style.overflow = 'auto';
            window.scrollTo(0, scrollPosition);
        }
    });
}