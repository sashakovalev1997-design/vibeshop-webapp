// app.js - Основной JavaScript код для работы сайта
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация приложения
    initApp();
});

function initApp() {
    // Инициализация компонентов
    initPreloader();
    initModals();
    initCart();
    initFilters();
    initCategories();
    initQuickView();
    initSizeSelection();
    initProductDetails();
    initAddToCartButtons();
}

// Preloader
function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 1000);
        }
    });

    // На всякий случай скрываем прелоадер через 5 секунд
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if (preloader && preloader.style.display !== 'none') {
            preloader.style.display = 'none';
        }
    }, 5000);
}

// Модальные окна
function initModals() {
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const overlay = document.getElementById('overlay');

    contactBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
        overlay.classList.add('active');
    });

    closeModalBtn.addEventListener('click', function() {
        contactModal.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        contactModal.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// Корзина
function initCart() {
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.querySelector('.close-btn');
    const overlay = document.getElementById('overlay');

    cartToggle.addEventListener('click', function() {
        cartSidebar.classList.add('open');
        overlay.classList.add('active');
    });

    closeCartBtn.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
}

// Фильтры
function initFilters() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const resetFilters = document.getElementById('reset-filters');

    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = `До ${this.value} BYN`;
        });
    }

    if (resetFilters) {
        resetFilters.addEventListener('click', function() {
            if (priceRange) priceRange.value = 300;
            if (priceValue) priceValue.textContent = 'До 300 BYN';
            document.getElementById('brand-filter').value = 'all';
            document.getElementById('size-filter').value = 'all';
            document.getElementById('sort-filter').value = 'newest';
        });
    }
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
            filterByCategory(this.dataset.category);
        });
    });

    if (scrollLeft && categoriesContainer) {
        scrollLeft.addEventListener('click', function() {
            categoriesContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });
    }

    if (scrollRight && categoriesContainer) {
        scrollRight.addEventListener('click', function() {
            categoriesContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
}

// Детали продукта
function initProductDetails() {
    const backBtn = document.getElementById('back-to-products');
    const productDetail = document.getElementById('product-detail');

    if (backBtn && productDetail) {
        backBtn.addEventListener('click', function() {
            productDetail.classList.remove('active');
        });
    }
}

// Инициализация кнопок "В корзину"
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.price').textContent;

            showToast(`${productName} добавлен в корзину!`, 'success');
            updateCartCount();
        });
    });
}

// Инициализация быстрого просмотра
function initQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            showProductDetail(productId);
        });
    });
}

// Объект с данными продуктов для быстрого просмотра
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
    // Добавьте остальные продукты по аналогии
    2: {
        name: "Свитшот Burberry",
        price: 114,
        description: "Качественный свитшот Burberry с классическим принтом.",
        features: [
            "Материал: высококачественный хлопок",
            "Точная копия оригинала",
            "Фирменная бирка",
            "Размеры: S, M, L, XL"
        ],
        images: [
            "СВИТШОТЫ BURBERRY1.jpg"
        ]
    }
    // Продолжите для остальных продуктов...
};

// Показать детали продукта
function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;

    const productDetail = document.getElementById('product-detail');
    const mainImage = document.getElementById('main-product-image');
    const productName = document.getElementById('detail-product-name');
    const productPrice = document.getElementById('detail-product-price');
    const productDesc = document.getElementById('detail-product-desc');
    const productFeatures = document.getElementById('detail-features');
    const thumbnailsContainer = document.querySelector('.product-thumbnails');

    // Заполняем информацию о продукте
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
    productName.textContent = product.name;
    productPrice.textContent = `${product.price} BYN`;
    productDesc.textContent = product.description;

    // Очищаем и заполняем характеристики
    productFeatures.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        productFeatures.appendChild(li);
    });

    // Очищаем и заполняем миниатюры
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Миниатюра ${index + 1}`;
        thumbnail.className = 'thumbnail';
        thumbnail.loading = 'lazy';

        thumbnail.addEventListener('click', function() {
            mainImage.src = image;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });

        if (index === 0) {
            thumbnail.classList.add('active');
        }

        thumbnailsContainer.appendChild(thumbnail);
    });

    // Показываем страницу деталей продукта
    productDetail.classList.add('active');

    // Добавляем обработчик для кнопки добавления в корзину
    const addToCartBtn = document.getElementById('detail-add-to-cart');
    addToCartBtn.onclick = function() {
        addToCart(productId, product);
    };
}

// Инициализация выбора размера
function initSizeSelection() {
    const sizeOptions = document.querySelectorAll('.size-option');

    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Добавить в корзину
function addToCart(productId, product) {
    // Получаем выбранный размер
    const selectedSize = document.querySelector('.size-option.selected');
    const size = selectedSize ? selectedSize.getAttribute('data-size') : 'M';

    // Здесь будет логика добавления в корзину
    showToast(`${product.name} (Размер: ${size}) добавлен в корзину!`, 'success');

    // Обновляем счетчик корзины
    updateCartCount();
}

// Обновить счетчик корзины
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    let count = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = count + 1;
}

// Вспомогательные функции
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// Функция фильтрации по категориям (заглушка)
function filterByCategory(category) {
    showToast(`Выбрана категория: ${category}`, 'info');
}