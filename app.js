const tg = window.Telegram?.WebApp;
if(!tg) console.warn("⚠ Telegram WebApp SDK не найден, тестируем в браузере.");
tg?.expand();

const products = document.querySelectorAll(".product");
products.forEach((p, i) => setTimeout(() => p.classList.add("visible"), i*150));

let cartItems = [], cartTotal = 0;
const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");
const cartList = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");
const sendOrderBtn = document.getElementById("send-order");

cartToggle.addEventListener("click", ()=> cart.classList.toggle("show"));

function showNotification(msg){
    const n = document.createElement("div");
    n.className="notification"; n.textContent=msg;
    document.getElementById("notification-container").appendChild(n);
    setTimeout(()=>n.remove(), 2000);
}

function updateCart(){
    cartList.innerHTML="";
    cartItems.forEach((item,index)=>{
        const li = document.createElement("li");
        li.textContent=`${item.name} — ${item.price} BYN`;
        const delBtn = document.createElement("button"); delBtn.textContent="❌";
        delBtn.addEventListener("click", ()=>{
            cartTotal -= item.price;
            cartItems.splice(index,1);
            updateCart();
            resetProductButton(item.name);
        });
        li.appendChild(delBtn);
        cartList.appendChild(li);
    });
    cartTotalEl.textContent=cartTotal;
    cartCountEl.textContent=cartItems.length;
}

// Подсветка кнопки
function markProductButton(name){
    const product = Array.from(products).find(p => p.dataset.name === name);
    if(product){
        const btn = product.querySelector(".order-btn");
        btn.textContent="В корзине";
        btn.style.background="#28a745";
        btn.disabled=true;
    }
}

function resetProductButton(name){
    const product = Array.from(products).find(p => p.dataset.name === name);
    if(product){
        const btn = product.querySelector(".order-btn");
        btn.textContent="Добавить в корзину";
        btn.style.background="linear-gradient(90deg,#6a0dad,#b76efb)";
        btn.disabled=false;
    }
}

function addToCart(name,price){
    cartItems.push({name, price:Number(price)});
    cartTotal += Number(price);
    updateCart();
    markProductButton(name);
}

document.querySelectorAll(".order-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
        const product = e.target.closest(".product");
        addToCart(product.dataset.name, product.dataset.price);
        showNotification(`🛒 Вы добавили: ${product.dataset.name}`);
    });
});

// Отправка заказа
sendOrderBtn.addEventListener("click", ()=>{
    if(cartItems.length === 0){ showNotification("🛒 Корзина пуста!"); return; }
    if(tg && tg.sendData){
        tg.sendData(JSON.stringify({items: cartItems, total: cartTotal}));
        showNotification("✅ Заказ отправлен!");
        // Сброс корзины и кнопок
        cartItems.forEach(item => resetProductButton(item.name));
        cartItems=[]; cartTotal=0; updateCart(); cart.classList.remove("show");
    }
});

// Темная тема
document.getElementById("theme-toggle").addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    document.getElementById("theme-toggle").textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});

// Плавающие контакты
document.getElementById("contactToggle").addEventListener("click", ()=>{
    document.getElementById("contactCard").classList.toggle("show");
});
