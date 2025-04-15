import"./assets/styles-0jjx1hvP.js";import{a as c}from"./assets/vendor-C19taMLP.js";async function d(t){try{return(await c.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(e){alert(e.message)}}async function p(t){try{return(await c.get(`https://dummyjson.com/products/${t}`)).data}catch(e){alert(e.message)}}async function m(){try{return(await c.get("https://dummyjson.com/products/category-list")).data}catch(t){alert(t.message)}}async function g(t){try{return(await c.get(`https://dummyjson.com/products/category/${t}`)).data}catch(e){alert(e.message)}}function _(t){return t.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("")}function n(t){return t.map(({id:e,images:o,description:s,title:a,brand:i,category:l,price:u})=>`
  <li class="products__item" data-id="${e}">
    <img class="products__image" src="${o[0]}" alt="${s}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i}</span></p>
    <p class="products__category">Category: ${l}</p>
    <p class="products__price">Price: ${u}</p>
 </li>
`).join("")}function y({images:t,description:e,title:o,tags:s,price:a}){return`<img class="modal-product__img" src="${t[0]}" alt="${s}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o}</p>
        <ul class="modal-product__tags">${s}</ul>
        <p class="modal-product__description">${e}</p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: ${a}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`}const r={categories:document.querySelector(".categories"),products:document.querySelector(".products"),productsItem:document.querySelector(".products__item"),categoriesBtn:document.querySelector(".categories__btn"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")};function h(t){if(!t.target.classList.contains("categories__btn"))return;const e=Array.from(r.categories.children);//! ===========================================
for(const s of e)if(s.firstElementChild.classList.contains("categories__btn--active")){s.firstElementChild.classList.remove("categories__btn--active");break}t.target.classList.add("categories__btn--active");const o=t.target.innerHTML;o==="All"&&d(1).then(s=>r.products.innerHTML=n(s.products)).catch(s=>console.log(s.message)),g(o).then(s=>{r.products.innerHTML=n(s.products)}).catch(s=>console.log(s.message))}//! ===========================================
function f(t){if(!t.target.classList.contains("products"))return Number(t.target.closest(".products__item").dataset.id)}//! ===========================================
function b(){r.modal.classList.remove("modal--is-open")}let L=1;r.categories.addEventListener("click",h);m().then(t=>r.categories.insertAdjacentHTML("beforeend",_(["All",...t]))).catch(t=>alert(t.message));d(L).then(t=>r.products.insertAdjacentHTML("beforeend",n(t.products))).catch(t=>console.log(t.message));r.products.addEventListener("click",t=>{const e=f(t);p(e).then(o=>{console.log(o),r.modalProduct.innerHTML=y(o),r.modal.classList.add("modal--is-open")}).catch(o=>console.log(o.message))});r.modalCloseBtn.addEventListener("click",b);
//# sourceMappingURL=index.js.map
