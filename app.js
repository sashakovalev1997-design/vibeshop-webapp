// Telegram WebApp SDK
const tg = window.Telegram.WebApp;
tg.expand();

// Плавное появление карточек с задержкой
const products = document.querySelectorAll(".product");
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting){
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, index * 150); // последовательное появление
        }
    });
}, { threshold: 0.2 });

products.forEach(p => observer.observe(p));

// Параллакс при скролле с requestAnimationFrame
let latestScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    latestScroll = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            products.forEach((product, index) => {
                // параллакс только для видимых элементов
                if (product.classList.contains("visible")) {
                    const speed = 0.03 + index * 0.01; // лёгкое смещение
                    product.style.transform = `translateY(${ -latestScroll * speed }px)`;
                }
            });
            ticking = false;
        });
        ticking = true;
    }
});

// Контейнер для всплывающих уведомлений
const notificationContainer = document.getElementById("notification-container");

// Функция для всплывающих уведомлений
function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Функция анимации "летящего" товара
function flyToCart(product) {
    const img = product.querySelector("img");
    const clone = img.cloneNode(true);
    const rect = img.getBoundingClientRect();

    clone.style.position = "fixed";
    clone.style.left = rect.left + "px";
    clone.style.top = rect.top + "px";
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.transition = "all 0.8s ease-in-out";
    clone.style.zIndex = 1000;

    document.body.appendChild(clone);

    const cartX = window.innerWidth / 2 - rect.width / 4;
    const cartY = window.innerHeight;

    setTimeout(() => {
        clone.style.left = cartX + "px";
        clone.style.top = cartY + "px";
        clone.style.width = rect.width / 2 + "px";
        clone.style.height = rect.height / 2 + "px";
        clone.style.opacity = 0;
    }, 50);

    setTimeout(() => {
        clone.remove();
    }, 900);
}

// Функция отправки заказа
function sendOrder(product) {
    const name = product.dataset.name;
    const price = product.dataset.price;
    const order = `Товар: ${name}\nЦена: ${price} BYN`;

    tg.sendData(order);

    const btn = product.querySelector(".order-btn");
    btn.textContent = "✅ Заказ отправлен!";
    btn.disabled = true;
    btn.style.background = "#28a745";

    showNotification(`🛒 Вы заказали: ${name}`);
    flyToCart(product);
}

// Кнопки заказа
document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const product = e.target.closest(".product");
        sendOrder(product);
    });
});

// Тёмная/светлая тема
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
