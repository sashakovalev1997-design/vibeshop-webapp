// Данные о продуктах
const products = {
    1: {
        name: "Свитшот Hermes",
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
            "Лонгguess2.jpg",
            "Лонгguess3.jpg",
            "Лонгguess4.jpg",
            "Лонгguess5.jpg",
            "Лонгguess6.jpg",
            "Лонгguess7.jpg"
        ]
    },
    7: {
        name: "Лонгслив Guess черный",
        price: 90,
        description: "Модный лонгслив от Guess с узнаваемым логотипом. Комфорт и стиль для повседневной носки.",
        features: [
            "Материал: хлопок",
            "Узнаваемый логотип Guess",
            "Удобный крой",
            "Размеры: M, L"
        ],
        images: [
            "Лонгguessчер1.jpg",
            "Лонгguessчер2.jpg",
            "Лонгguessчер3.jpg",
            "Лонгguessчер4.jpg",
            "Лонгguessчер5.jpg",
            "Лонгguessчер6.jpg",
            "Лонгguessчер7.jpg"
        ]
    },
    8: {
        name: "Жилетка Corteiz",
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
        price: 119,
        description: "Классическая жилетка Polo Ralph Lauren. Элегантность и качество. Подходит для различных стилей.",
        features: [
            "Материал: хлопок/ нейлон",
            "Классический дизайн",
            "Фирменный логотип",
            "Размеры: S, M, L, XL"
        ],
        images: [
            "ЖИЛЕТКИ POLO RALPH LAUREN1.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN2.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN3.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN4.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN5.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN6.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN7.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN8.jpg"
        ]
    },
    12: {
        name: "Жилетка Prada",
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

    // Инициализация фильтров
    initFilters();

    // Инициализация категорий
    initCategories();

    // Инициализация модальных окон
    initModals();

    // Инициализация быстрого просмотра
    initQuickView();

    // Инициализация пагинации
    initPagination();
}

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function initCart() {
    updateCartCount();

    // Обработчик открытия корзины
    document.getElementById('cart-toggle').addEventListener('click', function() {
        document.getElementById('cart-sidebar').classList.add('active');
        document.getElementById('overlay').classList.add('active');
        renderCartItems();
    });

    // Обработчик закрытия корзины
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('cart-sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

    // Обработчик кнопки "Оформить заказ"
    document.getElementById('order-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showToast('Корзина пуста', 'error');
            return;
        }

        const orderText = generateOrderText();
        const phoneNumber = '+375290000000'; // Замените на реальный номер
        const encodedText = encodeURIComponent(orderText);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    });

    // Обработчик кнопки "Скопировать заказ"
    document.getElementById('copy-order-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showToast('Корзина пуста', 'error');
            return;
        }

        const orderText = generateOrderText();
        navigator.clipboard.writeText(orderText)
            .then(() => {
                showToast('Заказ скопирован в буфер обмена');
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
                showToast('Не удалось скопировать заказ', 'error');
            });
    });
}

function addToCart(productId, size = 'M') {
    const product = products[productId];
    if (!product) return;

    const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === size);

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

    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Обновляем счетчик корзины
    updateCartCount();

    // Показываем уведомление
    showToast('Товар добавлен в корзину');

    // Обновляем кнопку, если корзина открыта
    if (document.getElementById('cart-sidebar').classList.contains('active')) {
        renderCartItems();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateQuantity(index, change) {
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

function renderCartItems() {
    const cartContent = document.getElementById('cart-content');
    const cartTotal = document.getElementById('cart-total-price');

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Ваша корзина пуста</p>
            </div>
        `;
        cartTotal.textContent = '0 BYN';
        return;
    }

    let total = 0;
    let itemsHTML = '';

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        itemsHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
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
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    cartContent.innerHTML = itemsHTML;
    cartTotal.textContent = `${total} BYN`;
}

function generateOrderText() {
    let text = "Здравствуйте! Хочу оформить заказ:\n\n";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        text += `- ${item.name} (Размер: ${item.size}) - ${item.quantity} шт. × ${item.price} BYN = ${itemTotal} BYN\n`;
    });

    text += `\nИтого: ${total} BYN`;
    text += "\n\nСпасибо!";

    return text;
}

// Фильтры
function initFilters() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const brandFilter = document.getElementById('brand-filter');
    const sizeFilter = document.getElementById('size-filter');
    const sortFilter = document.getElementById('sort-filter');
    const resetButton = document.getElementById('reset-filters');

    // Обновление значения цены
    priceRange.addEventListener('input', function() {
        priceValue.textContent = `До ${this.value} BYN`;
        filterProducts();
    });

    // Обработчики для других фильтров
    brandFilter.addEventListener('change', filterProducts);
    sizeFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);

    // Сброс фильтров
    resetButton.addEventListener('click', function() {
        priceRange.value = 300;
        priceValue.textContent = 'До 300 BYN';
        brandFilter.value = 'all';
        sizeFilter.value = 'all';
        sortFilter.value = 'newest';

        // Сброс активной категории
        document.querySelectorAll('.category').forEach(cat => {
            cat.classList.remove('active');
        });
        document.querySelector('.category[data-category="все"]').classList.add('active');

        filterProducts();
    });
}

function filterProducts() {
    const priceRange = document.getElementById('price-range').value;
    const brandFilter = document.getElementById('brand-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;
    const activeCategory = document.querySelector('.category.active')?.dataset.category || 'все';

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productPrice = parseInt(card.querySelector('.price').textContent);
        const productCategory = card.dataset.category;
        const productName = card.querySelector('h4').textContent.toLowerCase();

        // Проверка категории
        const categoryMatch = activeCategory === 'все' || productCategory === activeCategory;

        // Проверка цены
        const priceMatch = productPrice <= priceRange;

        // Проверка бренда
        let brandMatch = true;
        if (brandFilter !== 'all') {
            brandMatch = productName.includes(brandFilter);
        }

        // Показываем или скрываем карточку в зависимости от соответствия фильтрам
        if (categoryMatch && priceMatch && brandMatch) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });

    // Сортировка (пока заглушка)
    // В реальном приложении здесь должна быть реализация сортировки
}

// Категории
function initCategories() {
    const categories = document.querySelectorAll('.category');
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    const categoriesContainer = document.querySelector('.categories');

    // Обработчики кликов по категориям
    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });

    // Активируем категорию "Все" по умолчанию
    document.querySelector('.category[data-category="все"]').classList.add('active');

    // Прокрутка категорий
    scrollLeft.addEventListener('click', function() {
        categoriesContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', function() {
        categoriesContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Модальные окна
function initModals() {
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const overlay = document.getElementById('overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    // Открытие модального окна контактов
    contactBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
        overlay.classList.add('active');
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        contactModal.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Закрытие по клику на overlay
    overlay.addEventListener('click', function() {
        contactModal.classList.remove('active');
        document.getElementById('cart-sidebar').classList.remove('active');
        this.classList.remove('active');
    });
}

// Быстрый просмотр
function initQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const productDetailPage = document.getElementById('product-detail');
    const backToProductsBtn = document.getElementById('back-to-products');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.product;
            showProductDetail(productId);
        });
    });

    // Обработчик кнопки "Назад к товарам"
    backToProductsBtn.addEventListener('click', function() {
        productDetailPage.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Обработчик кнопки "Добавить в корзину" на странице деталей
    document.getElementById('detail-add-to-cart').addEventListener('click', function() {
        const productId = this.dataset.productId;
        const selectedSize = document.querySelector('.size-option.selected')?.dataset.size || 'M';

        addToCart(productId, selectedSize);

        // Анимация добавления в корзину
        this.classList.add('added');
        this.innerHTML = '<i class="fas fa-check"></i> Добавлено в корзину';

        setTimeout(() => {
            this.classList.remove('added');
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Добавить в корзину';
        }, 2000);
    });
}

// Функция показа деталей продукта
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

    // Заполняем информацию о товаре
    productName.textContent = product.name;
    productPrice.textContent = `${product.price} BYN`;
    productDesc.textContent = product.description;

    // Устанавливаем главное изображение
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Создаем миниатюры
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
            mainImage.src = this.src;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Плавное появление нового изображения
            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.style.opacity = 1;
            }, 100);
        });

        thumbnailsContainer.appendChild(thumbnail);
    });

    // Заполняем характеристики
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Настраиваем кнопку добавления в корзину
    addToCartBtn.dataset.productId = productId;

    // Выбираем размер по умолчанию
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.size === 'M') {
            option.classList.add('selected');
        }
    });

    // Показываем страницу деталей
    productDetailPage.classList.add('active');

    // Блокируем прокрутку основного контента
    document.body.style.overflow = 'hidden';

    // Прокручиваем к верху
    window.scrollTo(0, 0);

    // Добавляем обработчики для выбора размера
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Функция показа уведомлений
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast active'; // Сбрасываем классы
    toast.classList.add(type); // Добавляем класс для типа (success/error)

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Заглушка для пагинации
function initPagination() {
    // Пагинация будет реализована позже
    console.log('Пагинация инициализирована (заглушка)');
}