//Логіка сторінки Home

import {
  getAllProducts,
  getCategoriesList,
  getProductById,
  getProductByName,
  getProductsByCategory,
} from './js/products-api';

import { handleCategories, handleProducts } from './js/handlers';

import { renderCategories, renderCarts } from './js/render-function';

import { refs } from './js/refs';

let page = 1;

refs.categories.addEventListener('click', handleCategories);

// console.log(getAllProducts(1));
// getAllProducts(1).then(response => console.log(response.products));

// getProductByName('smartphone').then(response => console.log(response));

// getCategoriesList().then(response => console.log(response));

// getProductsByCategory('smartphones').then(response => console.log(response));

getCategoriesList()
  .then(response =>
    refs.categories.insertAdjacentHTML(
      'beforeend',
      renderCategories([...['All'], ...response])
    )
  )
  .catch(error => alert(error.message));

getAllProducts(page)
  .then(response =>
    refs.products.insertAdjacentHTML(
      'beforeend',
      renderCarts(response.products)
    )
  )
  .catch(error => console.log(error.message));
