const tg=window.Telegram.WebApp; tg.expand();

const products=document.querySelectorAll(".product");
const notificationContainer=document.getElementById("notification-container");

// Плавное появление карточек
const observer=new IntersectionObserver(entries=>{
    entries.forEach((entry,index)=>{
        if(entry.isIntersecting)setTimeout(()=>entry.target.classList.add("visible"),index*150);
    });
},{threshold:0.2});
products.forEach(p=>observer.observe(p));

// Корзина
let cartItems=[], cartTotal=0;
const cartToggle=document.getElementById("cart-toggle");
const cart=document.getElementById("cart");
const cartList=document.getElementById("cart-items");
const cartTotalEl=document.getElementById("cart-total");
const cartCountEl=document.getElementById("cart-count");
cartToggle.addEventListener("click",()=>cart.classList.toggle("hidden"));

function showNotification(message){
    const n=document.createElement("div"); n.classList.add("notification"); n.textContent=message;
    notificationContainer.appendChild(n);
    setTimeout(()=>n.remove(),2000);
}

function flyToCart(product){
    const img=product.querySelector("img");
    const clone=img.cloneNode(true);
    const rect=img.getBoundingClientRect();
    clone.style.position="fixed"; clone.style.left=rect.left+"px"; clone.style.top=rect.top+"px";
    clone.style.width=rect.width+"px"; clone.style.height=rect.height+"px"; clone.style.transition="all 0.6s ease-in-out"; clone.style.zIndex=1000;
    document.body.appendChild(clone);
    const cartX=window.innerWidth-80; const cartY=100;
    setTimeout(()=>{ clone.style.left=cartX+"px"; clone.style.top=cartY+"px"; clone.style.width=rect.width/2+"px"; clone.style.height=rect.height/2+"px"; clone.style.opacity=0; },50);
    setTimeout(()=>clone.remove(),700);
}

function updateCart(){
    cartList.innerHTML="";
    cartItems.forEach((item,index)=>{
        const li=document.createElement("li");
        li.textContent=`${item.name} — ${item.price} BYN`;
        const delBtn=document.createElement("button"); delBtn.textContent="❌";
        delBtn.addEventListener("click",()=>{
            cartTotal-=item.price; cartItems.splice(index,1); updateCart();
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

function sendOrder(product){
    const name=product.dataset.name, price=product.dataset.price;
    const order=`Товар: ${name}\nЦена: ${price} BYN`;
    tg.sendData(order);

    const btn=product.querySelector(".order-btn");
    btn.textContent="✅ Заказ отправлен!"; btn.disabled=true; btn.style.background="#28a745";

    showNotification(`🛒 Вы заказали: ${name}`);
    flyToCart(product);
    addToCart(name,price);
}

document.querySelectorAll(".order-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
        const product=e.target.closest(".product");
        sendOrder(product);
    });
});

// Темная тема
const themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    themeToggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});
