import"./assets/styles-eXUVIhJS.js";import{a as n}from"./assets/vendor-C19taMLP.js";async function h(t){try{return(await n.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data.products}catch(e){alert(e.message)}}async function C(t){try{return(await n.get(`https://dummyjson.com/products/${t}`)).data}catch(e){alert(e.message)}}async function $(){try{return(await n.get("https://dummyjson.com/products/category-list")).data}catch(t){alert(t.message)}}async function v(t,e){try{return(await n.get(`https://dummyjson.com/products/category/${e}?limit=12&skip=${(t-1)*12}`)).data.products}catch(o){alert(o.message)}}async function g(){try{return(await n.get("https://dummyjson.com/products")).data.total}catch(t){alert(t.message)}}async function f(t){try{return(await n.get(`https://dummyjson.com/products/category/${t}`)).data.products.length}catch(e){alert(e.message)}}function P(t){return t.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("")}function m(t){return t.map(({id:e,images:o,description:d,title:u,brand:b,category:L,price:M})=>`
  <li class="products__item" data-id="${e}">
    <img class="products__image" src="${o[0]}" alt="${d}"/>
    <p class="products__title">${u}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${b}</span></p>
    <p class="products__category">Category: ${L}</p>
    <p class="products__price">Price: ${M}</p>
 </li>
`).join("")}function A({images:t,description:e,title:o,tags:d,price:u}){return`<img class="modal-product__img" src="${t[0]}" alt="${d}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o}</p>
        <ul class="modal-product__tags">${d}</ul>
        <p class="modal-product__description">${e}</p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: ${u}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`}const s={categories:document.querySelector(".categories"),products:document.querySelector(".products"),productsItem:document.querySelector(".products__item"),categoriesBtn:document.querySelector(".categories__btn"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),notFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".load-more__btn"),loader:document.querySelector(".loader-js")};function B(t,e){for(const o of t)if(o.firstElementChild.classList.contains("categories__btn--active")){o.firstElementChild.classList.remove("categories__btn--active");break}e.classList.add("categories__btn--active")}function j(t){t.length?s.notFound.classList.remove("not-found--visible"):s.notFound.classList.add("not-found--visible")}function _(t,e){e==="All"&&h(t).then(o=>{s.products.insertAdjacentHTML("beforeend",m(o))}).catch(o=>console.log(o.message)),v(t,e).then(o=>{s.products.insertAdjacentHTML("beforeend",m(o))}).catch(o=>console.log(o.message))}function k(t){if(t==="All"){g().then(e=>{Math.ceil(Number(e)/12)>1?p():l()}).catch(e=>e.message);return}f(t).then(e=>{Math.ceil(Number(e)/12)>1?p():l()}).catch(e=>e.message)}//!================= LoadMore =================
function l(){s.loadMoreBtn.classList.add("visually-hidden")}function p(){s.loadMoreBtn.classList.remove("visually-hidden")}//!================= Loader =================
function S(){s.loader.classList.remove("loader")}function q(){s.loader.classList.add("loader")}//!================= Loader =================
function y(){alert("No more products!")}const i=1;let c="All",r=i,a=1;//!================= home.js =================
function w(t){if(!t.target.classList.contains("categories__btn"))return;j(c),l(),r=i,s.products.innerHTML="";const e=Array.from(s.categories.children);B(e,t.target),c=t.target.textContent,_(i,c),k(c)}function E(){r++,q(),_(r,c),N(),S()}function N(){c==="All"?g().then(t=>{a=Math.ceil(Number(t)/12),r>=a&&l(),r!==1&&r>=a&&(console.log(r),y())}).catch(t=>console.log(t.message)):T(c)}function T(t){f(t).then(e=>{a=Math.ceil(Number(e)/12),r>=a&&l(),r!==1&&r>=a&&(console.log(r),y())}).catch(e=>console.log(e.message))}//!================= modal.js =================
function H(t){if(t.target.classList.contains("products"))return;const e=Number(t.target.closest(".products__item").dataset.id);C(e).then(o=>{s.modalProduct.innerHTML=A(o),s.modal.classList.add("modal--is-open")}).catch(o=>console.log(o.message))}function x(){s.modal.classList.remove("modal--is-open")}s.categories.addEventListener("click",w);s.loadMoreBtn.addEventListener("click",E);$().then(t=>s.categories.insertAdjacentHTML("beforeend",P(["All",...t]))).catch(t=>alert(t.message)).finally(()=>{s.categories.firstElementChild.firstElementChild.classList.add("categories__btn--active")});h(i).then(t=>s.products.insertAdjacentHTML("beforeend",m(t))).catch(t=>console.log(t.message));g().then(t=>{Math.ceil(Number(t)/12)>1?p():hideLoadMoreButton()}).catch(t=>t.message);s.products.addEventListener("click",H);s.modalCloseBtn.addEventListener("click",x);
//# sourceMappingURL=index.js.map
