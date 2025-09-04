// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TX305753YW');

// Данные товаров
const products = {
    1: {
        name: "Свитшот Hermes",
        price: 129,
        brand: "hermes",
        category: "свитшоты",
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
        brand: "burberry",
        category: "свитшоты",
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
        price: 89,
        brand: "lacoste",
        category: "свитшоты",
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
        price: 89,
        brand: "lacoste",
        category: "свитшоты",
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
            "СВИТШОТЫ LACOSTEчер6.jpg",
        ]
    },
    5: {
        name: "Зипка Dior",
        price: 149,
        brand: "dior",
        category: "зипки",
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
        price: 98,
        brand: "guess",
        category: "лонгсливы",
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
        name: "Жилетка Corteiz",
        price: 139,
        brand: "corteiz",
        category: "жилетки",
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
    8: {
        name: "Жилетка Jordan & Supreme",
        price: 169,
        brand: "jordan",
        category: "жилетки",
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
    9: {
        name: "Жилетка Nike ACG",
        price: 124,
        brand: "nike",
        category: "жилетки",
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
    10: {
        name: "Жилетка Polo Ralph Lauren",
        price: 119,
        brand: "polo",
        category: "жилетки",
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
            "ЖИЛЕТКИ POLO RALPH LAUREN5.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN6.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN7.jpg",
            "ЖИЛЕТКИ POLO RALPH LAUREN8.jpg"
        ]
    },
    11: {
        name: "Жилетка Prada",
        price: 189,
        brand: "prada",
        category: "жилетки",
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

// Инициализация корзины
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedSize = 'M';
let currentPage = 1;
const itemsPerPage = 8;
let filteredProducts = Object.values(products);

// DOM элементы
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartContent = document.querySelector('.cart-content');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const contactModal = document.getElementById('contact-modal');
const productDetailPage = document.getElementById('product-detail');
const toast = document.getElementById('toast');
const cartItemsContainer = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');
const productsGrid = document.getElementById('products-grid');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const brandFilter = document.getElementById('brand-filter');
const sizeFilter = document.getElementById('size-filter');
const sortFilter = document.getElementById('sort-filter');
const resetFilters = document.getElementById('reset-filters');
const pagination = document.getElementById('pagination');

// Lazy loading для изображений
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Обновление счетчика корзины
function updateCartCount() {
    cartCount.textContent = cart.length;
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 300);
}

// Обновление общей стоимости
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalPrice.textContent = `${total.toLocaleString('ru-RU')} BYN`;
}

// Отображение товаров в корзине
function renderCartItems() {
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        return;
    }

    cartEmpty.style.display = 'none';
    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image || 'https://via.placeholder.com/80'}" alt="${item.name}" loading="lazy">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString('ru-RU')} BYN</div>
                <small>Размер: ${item.size}</small>
            </div>
            <button class="remove-item" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');

    // Добавляем обработчики событий для кнопок удаления
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
            updateCartCount();
            updateCartTotal();
            showToast('Товар удален из корзины', 'success');
        });
    });
}

// Показать уведомление
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Открыть корзину
document.getElementById('cart-toggle').addEventListener('click', () => {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Закрыть корзину
document.getElementById('close-cart').addEventListener('click', closeCart);

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Открыть модальное окно контактов
document.getElementById('contact-btn').addEventListener('click', () => {
    contactModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Закрыть модальное окно
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        contactModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Обработчик для оверлея
overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    contactModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Универсальная функция добавления в корзину
function addToCartFromCard(productCard) {
    const productName = productCard.querySelector('h4').textContent;
    const productPrice = parseInt(productCard.querySelector('.price').textContent.replace(/\D/g, ''));
    const productImage = productCard.querySelector('img').src;

    // Проверяем, нет ли уже такого товара в корзине
    if (cart.some(item => item.name === productName && item.size === selectedSize)) {
        showToast('Этот товар уже в корзине!', 'warning');
        return;
    }

    cart.push({
        name: productName,
        price: productPrice,
        size: selectedSize,
        image: productImage
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
    renderCartItems();
    showToast('Товар добавлен в корзину!', 'success');

    // Аналитика
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            'items': [{
                'name': productName,
                'price': productPrice
            }]
        });
    }
}

// Обработчики для кнопок добавления в корзину
function initAddToCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.currentTarget.closest('.product-card');
            addToCartFromCard(productCard);

            // Анимация кнопки
            const originalHtml = e.currentTarget.innerHTML;
            e.currentTarget.innerHTML = '<i class="fas fa-check"></i> Добавлено';
            e.currentTarget.classList.add('added');
            setTimeout(() => {
                e.currentTarget.classList.remove('added');
                e.currentTarget.innerHTML = originalHtml;
            }, 2000);
        });
    });
}

// Универсальная функция для показа товара
function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;

    // Заполняем информацию о товаре
    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-price').textContent = `${product.price.toLocaleString('ru-RU')} BYN`;
    document.getElementById('detail-product-desc').textContent = `${product.name} - качественная реплика 1:1 от бренда ${product.brand}.`;

    // Заполняем характеристики
    const featuresList = document.getElementById('detail-features');
    featuresList.innerHTML = product.features.map(feature =>
        `<li>${feature}</li>`
    ).join('');

    // Устанавливаем изображения
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsContainer = document.querySelector('.product-thumbnails');

    if (product.images && product.images.length > 0) {
        mainImage.src = product.images[0];
        thumbnailsContainer.innerHTML = '';

        product.images.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.className = 'thumbnail';
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.src = imageSrc;
            thumbnail.dataset.index = index;
            thumbnail.loading = 'lazy';

            thumbnail.addEventListener('click', () => {
                mainImage.src = imageSrc;
                document.querySelectorAll('.thumbnail').forEach(thumb => {
                    thumb.classList.remove('active');
                });
                thumbnail.classList.add('active');
            });

            if (index === 0) {
                thumbnail.classList.add('active');
            }

            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    // Показываем страницу товара
    productDetailPage.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Аналитика
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_item', {
            'items': [{
                'item_name': product.name,
                'price': product.price
            }]
        });
    }
}

// Обработчики для быстрого просмотра
function initQuickViewButtons() {
    const buttons = document.querySelectorAll('.quick-view');
    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.currentTarget.dataset.product;
            showProductDetail(productId);
        });
    });
}

// Обработчик для кнопки "Назад"
document.getElementById('back-to-products').addEventListener('click', () => {
    productDetailPage.classList.remove('active');
    document.body.style.overflow = '';
});

// Обработчики для выбора размера
document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', (e) => {
        // Убираем выделение у всех вариантов
        document.querySelectorAll('.size-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Выделяем выбранный вариант
        e.currentTarget.classList.add('selected');
        selectedSize = e.currentTarget.dataset.size;
    });
});

// Обработчик для добавления в корзину со страницы товара
document.getElementById('detail-add-to-cart').addEventListener('click', () => {
    const productName = document.getElementById('detail-product-name').textContent;
    const productPrice = parseInt(document.getElementById('detail-product-price').textContent.replace(/\D/g, ''));
    const productImage = document.getElementById('main-product-image').src;

    // Проверяем, нет ли уже такого товара в корзине
    if (cart.some(item => item.name === productName && item.size === selectedSize)) {
        showToast('Этот товар уже в корзине!', 'warning');
        return;
    }

    cart.push({
        name: productName,
        price: productPrice,
        size: selectedSize,
        image: productImage
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
    renderCartItems();
    showToast('Товар добавлен в корзину!', 'success');

    // Закрываем страницу товара
    productDetailPage.classList.remove('active');
    document.body.style.overflow = '';

    // Аналитика
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            'items': [{
                'name': productName,
                'price': productPrice
            }]
        });
    }
});

// Генерация текста заказа
function generateOrderText() {
    if (cart.length === 0) return 'Корзина пуста';

    let orderText = '🛒 ДЕТАЛИ ЗАКАЗА 🛒\n\n';
    orderText += '👤 Пользователь: Гость\n\n';
    orderText += '📦 Состав заказа:\n';

    cart.forEach((item, index) => {
        orderText += `• ${item.name} (Размер: ${item.size}) - ${item.price.toLocaleString('ru-RU')} BYN\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    orderText += `\n💰 Итого: ${total.toLocaleString('ru-RU')} BYN\n`;
    orderText += `\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`;
    orderText += `\n✅ Все бирки и ярлыки как в оригинале`;
    orderText += `\n✅ Качество материалов 1:1`;
    orderText += `\n✅ Полное визуальное соответствие`;

    return orderText;
}

// Обработчик для оформления заказа
document.getElementById('order-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Добавьте товары в корзину', 'error');
        return;
    }

    const orderText = generateOrderText();
    const telegramUrl = `https://t.me/bigdigovich?text=${encodeURIComponent(orderText)}`;
    window.open(telegramUrl, '_blank');

    showToast('Открываю Telegram...', 'success');

    // Аналитика
    if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase', {
            'transaction_id': Date.now().toString(),
            'value': cart.reduce((sum, item) => sum + item.price, 0),
            'currency': 'BYN',
            'items': cart.map(item => ({
                'item_name': item.name,
                'price': item.price,
                'quantity': 1
            }))
        });
    }

    // Очищаем корзину после отправки
    setTimeout(() => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartTotal();
        renderCartItems();
        closeCart();
    }, 2000);
});

// Обработчик для копирования заказа
document.getElementById('copy-order-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Добавьте товары в корзину', 'error');
        return;
    }

    const orderText = generateOrderText();
    navigator.clipboard.writeText(orderText).then(() => {
        showToast('Заказ скопирован в буфер!', 'success');
    }).catch(err => {
        showToast('Ошибка копирования', 'error');
    });
});

// Прокрутка категорий
const categoriesContainer = document.querySelector('.categories');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

if (scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Фильтрация по категориям
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.dataset.category;
        filterProducts(categoryName);
    });
});

function filterProducts(category) {
    if (category === 'все') {
        filteredProducts = Object.values(products);
    } else {
        filteredProducts = Object.values(products).filter(product =>
            product.category === category
        );
    }

    currentPage = 1;
    renderProducts();
    updatePagination();
}

// Функции фильтрации
function applyFilters() {
    const maxPrice = parseInt(priceRange.value);
    const brand = brandFilter.value;
    const size = sizeFilter.value;
    const sort = sortFilter.value;

    filteredProducts = Object.values(products).filter(product => {
        let pass = true;

        // Фильтр по цене
        if (product.price > maxPrice) {
            pass = false;
        }

        // Фильтр по бренду
        if (brand !== 'all' && product.brand !== brand) {
            pass = false;
        }

        return pass;
    });

    // Сортировка
    switch(sort) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            // Здесь можно добавить логику популярности
            break;
        default:
            // newest - оставляем как есть
            break;
    }

    currentPage = 1;
    renderProducts();
    updatePagination();
}

// Рендер товаров
function renderProducts() {
    console.log('Rendering products...');

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    productsGrid.innerHTML = productsToShow.map((product, index) => `
        <div class="product-card" data-id="${Object.keys(products).find(key => products[key] === product)}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="quick-view" data-product="${Object.keys(products).find(key => products[key] === product)}">
                        Быстрый просмотр
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="product-desc">Качественная реплика 1:1</p>
                <div class="product-footer">
                    <div class="price">${product.price} BYN</div>
                    <button class="add-to-cart-btn">
                        <i class="fas fa-shopping-cart"></i> В корзину
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    initAddToCartButtons();
    initQuickViewButtons();
    initLazyLoading();
}

// Обновление пагинации
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }

    pagination.style.display = 'flex';
    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        if (i <= 3 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<button class="pagination-btn">...</button>`;
        }
    }

    pagination.innerHTML = paginationHTML;

    // Добавляем обработчики для кнопок пагинации
    document.querySelectorAll('.pagination-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.textContent === '...') return;

            currentPage = parseInt(btn.textContent);
            renderProducts();
            updatePagination();

            // Прокрутка к верху
            window.scrollTo({
                top: productsGrid.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');

    updateCartCount();
    renderCartItems();
    updateCartTotal();

    // Выбираем размер M по умолчанию
    const defaultSize = document.querySelector('.size-option[data-size="M"]');
    if (defaultSize) {
        defaultSize.classList.add('selected');
    }

    // Инициализация фильтров
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', () => {
            priceValue.textContent = `До ${priceRange.value} BYN`;
            applyFilters();
        });
    }

    if (brandFilter) brandFilter.addEventListener('change', applyFilters);
    if (sizeFilter) sizeFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);

    if (resetFilters) {
        resetFilters.addEventListener('click', () => {
            priceRange.value = 300;
            priceValue.textContent = 'До 300 BYN';
            brandFilter.value = 'all';
            sizeFilter.value = 'all';
            sortFilter.value = 'newest';
            applyFilters();
        });
    }

    // Рендер товаров
    setTimeout(() => {
        renderProducts();
        updatePagination();
    }, 100);

    // Инициализация дополнительных функций
    initLazyLoading();

    // Скрываем прелоадер
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    }, 500);

    // Service Worker для кэширования
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('SW registered'))
            .catch(err => console.log('SW registration failed:', err));
    }
});

// Кэширование в LocalStorage
function cacheProducts() {
    localStorage.setItem('cached_products', JSON.stringify({
        data: products,
        timestamp: Date.now(),
        expires: Date.now() + (24 * 60 * 60 * 1000) // 24 часа
    }));
}

function getCachedProducts() {
    const cached = localStorage.getItem('cached_products');
    if (!cached) return null;

    const { data, timestamp, expires } = JSON.parse(cached);

    if (Date.now() > expires) {
        localStorage.removeItem('cached_products');
        return null;
    }

    return data;
}