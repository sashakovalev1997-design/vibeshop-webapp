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
    loadProducts();
    initProductDetails();
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
}

// Фильтры
function initFilters() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const resetFilters = document.getElementById('reset-filters');

    priceRange.addEventListener('input', function() {
        priceValue.textContent = `До ${this.value} BYN`;
    });

    resetFilters.addEventListener('click', function() {
        priceRange.value = 300;
        priceValue.textContent = 'До 300 BYN';
        document.getElementById('brand-filter').value = 'all';
        document.getElementById('size-filter').value = 'all';
        document.getElementById('sort-filter').value = 'newest';
    });
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

    scrollLeft.addEventListener('click', function() {
        categoriesContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', function() {
        categoriesContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Загрузка продуктов
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    // Очищаем скелетоны
    productsGrid.innerHTML = '';

    // Заглушка для демонстрации
    setTimeout(function() {
        productsGrid.innerHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="кархарт.jpeg" alt="Свитшот" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Изображение+отсутствует'">
                    <div class="product-overlay">
                        <button class="quick-view">Быстрый просмотр</button>
                    </div>
                </div>
                <div class="product-info">
                    <h4>Свитшот Carhartt</h4>
                    <p>Качественный свитшот премиум класса</p>
                    <div class="product-footer">
                        <span class="price">150 BYN</span>
                        <button class="add-to-cart-btn">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }, 1500);
}

// Детали продукта
function initProductDetails() {
    const backBtn = document.getElementById('back-to-products');
    const productDetail = document.getElementById('product-detail');

    backBtn.addEventListener('click', function() {
        productDetail.classList.remove('active');
    });
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
