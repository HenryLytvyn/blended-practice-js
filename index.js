import"./assets/styles-B513HK9d.js";import{a as n}from"./assets/vendor-C19taMLP.js";async function p(t){try{return(await n.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data.products}catch(o){alert(o.message)}}async function f(t){try{return(await n.get(`https://dummyjson.com/products/${t}`)).data}catch(o){alert(o.message)}}async function h(){try{return(await n.get("https://dummyjson.com/products/category-list")).data}catch(t){alert(t.message)}}async function b(t,o){try{return(await n.get(`https://dummyjson.com/products/category/${o}?limit=12&skip=${(t-1)*12}`)).data.products}catch(e){alert(e.message)}}function L(t){return t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("")}function d(t){return t.map(({id:o,images:e,description:c,title:a,brand:g,category:_,price:y})=>`
  <li class="products__item" data-id="${o}">
    <img class="products__image" src="${e[0]}" alt="${c}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${g}</span></p>
    <p class="products__category">Category: ${_}</p>
    <p class="products__price">Price: ${y}</p>
 </li>
`).join("")}function C({images:t,description:o,title:e,tags:c,price:a}){return`<img class="modal-product__img" src="${t[0]}" alt="${c}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${e}</p>
        <ul class="modal-product__tags">${c}</ul>
        <p class="modal-product__description">${o}</p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: ${a}</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`}const s={categories:document.querySelector(".categories"),products:document.querySelector(".products"),productsItem:document.querySelector(".products__item"),categoriesBtn:document.querySelector(".categories__btn"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),notFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".load-more__btn")};function $(t,o){for(const e of t)if(e.firstElementChild.classList.contains("categories__btn--active")){e.firstElementChild.classList.remove("categories__btn--active");break}o.classList.add("categories__btn--active")}function u(t){t.length?s.notFound.classList.remove("not-found--visible"):s.notFound.classList.add("not-found--visible")}function m(t,o){if(o==="All"){p(t).then(e=>{u(e),s.products.insertAdjacentHTML("beforeend",d(e))}).catch(e=>console.log(e.message)),console.log(t);return}b(t,o).then(e=>{console.log(e),console.log(t),console.log(o),u(e),s.products.insertAdjacentHTML("beforeend",d(e))}).catch(e=>console.log(e.message))}const r=1;let l="All",i=r;//!================= home.js =================
function v(t){if(!t.target.classList.contains("categories__btn"))return;i=r,s.products.innerHTML="";const o=Array.from(s.categories.children);$(o,t.target),l=t.target.textContent,m(r,l)}function M(){i++,m(i,l)}//!================= modal.js =================
function A(t){if(t.target.classList.contains("products"))return;const o=Number(t.target.closest(".products__item").dataset.id);f(o).then(e=>{s.modalProduct.innerHTML=C(e),s.modal.classList.add("modal--is-open")}).catch(e=>console.log(e.message))}function B(){s.modal.classList.remove("modal--is-open")}s.categories.addEventListener("click",v);s.loadMoreBtn.addEventListener("click",M);h().then(t=>s.categories.insertAdjacentHTML("beforeend",L(["All",...t]))).catch(t=>alert(t.message)).finally(()=>{s.categories.firstElementChild.firstElementChild.classList.add("categories__btn--active")});p(r).then(t=>s.products.insertAdjacentHTML("beforeend",d(t))).catch(t=>console.log(t.message));s.products.addEventListener("click",A);s.modalCloseBtn.addEventListener("click",B);
//# sourceMappingURL=index.js.map
