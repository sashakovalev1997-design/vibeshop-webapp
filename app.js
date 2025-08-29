const tg=window.Telegram.WebApp; tg.expand();

const products=document.querySelectorAll(".product");
const notificationContainer=document.getElementById("notification-container");

// Появление товаров
products.forEach(p=>{
    setTimeout(()=>p.classList.add("visible"), 100);
});

// Корзина
let cartItems=[], cartTotal=0;
const cartToggle=document.getElementById("cart-toggle");
const cart=document.getElementById("cart");
const cartList=document.getElementById("cart-items");
const cartTotalEl=document.getElementById("cart-total");
const cartCountEl=document.getElementById("cart-count");

cartToggle.addEventListener("click", ()=>cart.classList.toggle("hidden"));

function showNotification(msg){
    const n=document.createElement("div");
    n.className="notification"; n.textContent=msg;
    notificationContainer.appendChild(n);
    setTimeout(()=>n.remove(),2000);
}

function updateCart(){
    cartList.innerHTML="";
    cartItems.forEach((item,index)=>{
        const li=document.createElement("li");
        li.textContent=`${item.name} — ${item.price} BYN`;
        const delBtn=document.createElement("button"); delBtn.textContent="❌";
        delBtn.addEventListener("click", ()=>{
            cartTotal-=item.price;
            cartItems.splice(index,1);
            updateCart();
        });
        li.appendChild(delBtn);
        cartList.appendChild(li);
    });
    cartTotalEl.textContent=cartTotal;
    cartCountEl.textContent=cartItems.length;
}

function addToCart(name,price){
    cartItems.push({name,price:Number(price)});
    cartTotal+=Number(price);
    updateCart();
}

document.querySelectorAll(".order-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
        const product=e.target.closest(".product");
        const name=product.dataset.name;
        const price=product.dataset.price;

        addToCart(name,price);
        showNotification(`🛒 Вы заказали: ${name}`);

        if(tg.sendData) tg.sendData(`Товар: ${name}\nЦена: ${price} BYN`);

        btn.textContent="✅ Заказ отправлен!"; btn.disabled=true; btn.style.background="#28a745";
    });
});

// Темная тема
const themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    themeToggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});
