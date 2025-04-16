import"./assets/styles-eXUVIhJS.js";import{a}from"./assets/vendor-C19taMLP.js";async function g(t){try{return(await a.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data.products}catch(e){alert(e.message)}}async function $(t){try{return(await a.get(`https://dummyjson.com/products/${t}`)).data}catch(e){alert(e.message)}}async function v(){try{return(await a.get("https://dummyjson.com/products/category-list")).data}catch(t){alert(t.message)}}async function P(t,e){try{return(await a.get(`https://dummyjson.com/products/category/${e}?limit=12&skip=${(t-1)*12}`)).data.products}catch(o){alert(o.message)}}async function _(){try{return(await a.get("https://dummyjson.com/products")).data.total}catch(t){alert(t.message)}}async function f(t){try{return(await a.get(`https://dummyjson.com/products/category/${t}`)).data.products.length}catch(e){alert(e.message)}}function A(t){return t.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("")}function u(t){return t.map(({id:e,images:o,description:n,title:i,brand:L,category:C,price:M})=>`
  <li class="products__item" data-id="${e}">
    <img class="products__image" src="${o[0]}" alt="${n}"/>
    <p class="products__title">${i}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${L}</span></p>
    <p class="products__category">Category: ${C}</p>
    <p class="products__price">Price: ${M}</p>
 </li>
`).join("")}function j({images:t,description:e,title:o,tags:n,price:i}){return`<img class="modal-product__img" src="${t[0]}" alt="${n}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o}</p>
        <ul class="modal-product__tags">${n}</ul>
        <p class="modal-product__description">${e}</p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: ${i}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`}const s={categories:document.querySelector(".categories"),products:document.querySelector(".products"),productsItem:document.querySelector(".products__item"),categoriesBtn:document.querySelector(".categories__btn"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),notFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".load-more__btn"),loader:document.querySelector(".loader-js")};function B(t,e){for(const o of t)if(o.firstElementChild.classList.contains("categories__btn--active")){o.firstElementChild.classList.remove("categories__btn--active");break}e.classList.add("categories__btn--active")}function p(t){t.length?s.notFound.classList.remove("not-found--visible"):s.notFound.classList.add("not-found--visible")}function y(t,e){if(e==="All"){g(t).then(o=>{p(o),s.products.insertAdjacentHTML("beforeend",u(o))}).catch(o=>console.log(o.message));return}P(t,e).then(o=>{p(o),s.products.insertAdjacentHTML("beforeend",u(o))}).catch(o=>console.log(o.message))}//!================= LoadMore =================
function h(){s.loadMoreBtn.classList.add("visually-hidden")}//!================= Loader =================
function S(){s.loader.classList.remove("loader")}function k(){s.loader.classList.add("loader")}//!================= Loader =================
function b(){alert("No more products!")}const d=1;let r="All",c=d,l=1;//!================= home.js =================
function q(t){if(!t.target.classList.contains("categories__btn"))return;c=d,s.products.innerHTML="";const e=Array.from(s.categories.children);B(e,t.target),r=t.target.textContent,y(d,r),console.log(r),console.log(m(r)),m(r)===c&&console.log("?")}function E(){c++,k(),y(c,r),w(),S()}function w(){r==="All"?_().then(t=>{l=Math.ceil(Number(t)/12),c>=l&&(h(),c>2&&b())}).catch(t=>console.log(t.message)):m(r)}function m(t){f(t).then(e=>{l=Math.ceil(Number(e)/12),c>=l&&(h(),c>2&&b())}).catch(e=>console.log(e.message))}//!================= modal.js =================
function T(t){if(t.target.classList.contains("products"))return;const e=Number(t.target.closest(".products__item").dataset.id);$(e).then(o=>{s.modalProduct.innerHTML=j(o),s.modal.classList.add("modal--is-open")}).catch(o=>console.log(o.message))}function H(){s.modal.classList.remove("modal--is-open")}s.categories.addEventListener("click",q);s.loadMoreBtn.addEventListener("click",E);v().then(t=>s.categories.insertAdjacentHTML("beforeend",A(["All",...t]))).catch(t=>alert(t.message)).finally(()=>{s.categories.firstElementChild.firstElementChild.classList.add("categories__btn--active")});g(d).then(t=>s.products.insertAdjacentHTML("beforeend",u(t))).catch(t=>console.log(t.message));_();f("groceries");s.products.addEventListener("click",T);s.modalCloseBtn.addEventListener("click",H);
//# sourceMappingURL=index.js.map
