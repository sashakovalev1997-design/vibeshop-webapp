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

    // Инициализация кнопок добавления в корзину
    initAddToCartButtons();

    // Обработка ошибок изображений
    initImageErrorHandling();

    // Первоначальная фильтрация продуктов
    filterProducts(); // Добавьте эту строку
}

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
        window.open(`https://t.me/${telegramUsername}?text=${encodedText}`, '_blank');
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

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Товар добавлен в корзину');

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
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwIiB5PSI0MCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+'">
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

    priceRange.addEventListener('input', function() {
        priceValue.textContent = `До ${this.value} BYN`;
        filterProducts(); // Добавьте этот вызов
    });

    // Добавьте вызов filterProducts() для всех обработчиков
    brandFilter.addEventListener('change', function() {
        filterProducts();
    });

    sizeFilter.addEventListener('change', function() {
        filterProducts();
    });

    sortFilter.addEventListener('change', function() {
        filterProducts();
    });

    resetButton.addEventListener('click', function() {
        priceRange.value = 300;
        priceValue.textContent = 'До 300 BYN';
        brandFilter.value = 'all';
        sizeFilter.value = 'all';
        sortFilter.value = 'newest';

        document.querySelectorAll('.category').forEach(cat => {
            cat.classList.remove('active');
        });
        document.querySelector('.category[data-category="все"]').classList.add('active');

        filterProducts(); // Добавьте этот вызов
    });
}

function filterProducts() {
    const priceRange = document.getElementById('price-range').value;
    const brandFilter = document.getElementById('brand-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;
    const activeCategory = document.querySelector('.category.active')?.dataset.category || 'все';

    const productCards = Array.from(document.querySelectorAll('.product-card'));

    // Фильтрация
    const filteredCards = productCards.filter(card => {
        const productPrice = parseInt(card.querySelector('.price').textContent);
        const productCategory = card.dataset.category;
        const productBrand = card.dataset.brand;

        const categoryMatch = activeCategory === 'все' || productCategory === activeCategory;
        const priceMatch = productPrice <= priceRange;
        const brandMatch = brandFilter === 'all' || productBrand === brandFilter;

        return categoryMatch && priceMatch && brandMatch;
    });

    // Сортировка
    if (sortFilter === 'price-asc' || sortFilter === 'price-desc') {
        filteredCards.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.price').textContent);
            const priceB = parseInt(b.querySelector('.price').textContent);

            return sortFilter === 'price-asc' ? priceA - priceB : priceB - priceA;
        });
    }
    // Для "newest" и "popular" можно добавить дополнительную логику позже

    // Сначала скрываем все карточки
    productCards.forEach(card => {
        card.style.display = 'none';
        card.style.opacity = '0';
    });

    // Затем показываем отфильтрованные карточки с анимацией
    setTimeout(() => {
        filteredCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            }, index * 50);
        });
    }, 50);
}

// Категории
function initCategories() {
    const categories = document.querySelectorAll('.category');
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    const categoriesContainer = document.querySelector('.categories');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            filterProducts(); // Добавьте этот вызов
        });
    });

    document.querySelector('.category[data-category="все"]').classList.add('active');

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

    contactBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', function() {
        contactModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    overlay.addEventListener('click', function() {
        contactModal.classList.remove('active');
        document.getElementById('cart-sidebar').classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
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

    backToProductsBtn.addEventListener('click', function() {
        productDetailPage.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    document.getElementById('detail-add-to-cart').addEventListener('click', function() {
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

    productName.textContent = product.name;
    productPrice.textContent = `${product.price} BYN`;
    productDesc.textContent = product.description;

    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${product.name} - вид ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.loading = 'lazy';
        thumbnail.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjM1IiB5PSIzNSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1iZWRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ2NDY0Ij5ObyBpbWFnZTwvdGV4dD4KPC9zdmc+';
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

    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    addToCartBtn.dataset.productId = productId;

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

// Кнопки добавления в корзину
function initAddToCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;

            const productId = Object.keys(products).find(id =>
                products[id].name === productName
            );

            if (productId) {
                addToCart(productId);

                // Анимация добавления
                this.classList.add('added');
                const originalHtml = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Добавлено';

                setTimeout(() => {
                    this.classList.remove('added');
                    this.innerHTML = originalHtml;
                }, 2000);
            }
        });
    });
}

// Обработка ошибок изображений
function initImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NDY0NjQiPk5vIGltYWdlPC90ZXh0Pgo8L3N2Zz4=';
        };
    });
}

// Пагинация
function initPagination() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');

    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            paginationBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Здесь можно добавить логику переключения страниц
            showToast('Пагинация будет реализована в следующем обновлении', 'error');
        });
    });
}

// Уведомления
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast active';
    toast.classList.add(type);

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Глобальные функции для использования в HTML
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.filterProducts = filterProducts;