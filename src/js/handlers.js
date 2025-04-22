// Функції, які передаються колбеками в addEventListners

import {
  getAllProducts,
  getCategoriesList,
  getProductById,
  getProductByName,
  getProductsByCategory,
  getTotalProductsAmount,
  getCategoriesProductsAmount,
} from './products-api';

import { renderCards, renderModalCard } from './render-function';
import {
  toggleActiveCategory,
  getProducts,
  checkCategoryAvailability,
  hideLoadMoreButton,
  showLoadMoreButton,
  showLoader,
  hideLoader,
  errorNoMoreProducts,
  checkPagesQuantity,
} from './helpers';

import { refs } from './refs';
import { startpage } from './constants.js';

let currentCategory = 'All';
let currentPage = startpage;
let maxPage = 1;

//!================= home.js =================

export function handleCategories(event) {
  if (!event.target.classList.contains('categories__btn')) {
    return;
  }

  checkCategoryAvailability(currentCategory);
  hideLoadMoreButton();

  currentPage = startpage;
  refs.products.innerHTML = '';
  const categoryBtns = Array.from(refs.categories.children);

  toggleActiveCategory(categoryBtns, event.target);

  currentCategory = event.target.textContent;

  getProducts(startpage, currentCategory);

  checkPagesQuantity(currentCategory);
}

// ===========================================

export function handleLoadMore() {
  currentPage++;
  showLoader();

  getProducts(currentPage, currentCategory);
  checkMoreAllProducts();

  hideLoader();
}

function checkMoreAllProducts() {
  if (currentCategory === 'All') {
    getTotalProductsAmount()
      .then(response => {
        maxPage = Math.ceil(Number(response) / 12);

        if (currentPage >= maxPage) {
          hideLoadMoreButton();
          // if (currentPage > 2) {
          //   errorNoMoreProducts();
          // }
        }
        if (currentPage !== 1 && currentPage >= maxPage) {
          console.log(currentPage);
          errorNoMoreProducts();
        }
      })
      .catch(error => console.log(error.message));
  } else {
    checkMoreCategoriesProducts(currentCategory);
  }
}

function checkMoreCategoriesProducts(currentCategory) {
  getCategoriesProductsAmount(currentCategory)
    .then(response => {
      maxPage = Math.ceil(Number(response) / 12);

      if (currentPage >= maxPage) {
        hideLoadMoreButton();
        // if (currentPage > 2) {
        //   errorNoMoreProducts();
        // }
      }
      if (currentPage !== 1 && currentPage >= maxPage) {
        console.log(currentPage);
        errorNoMoreProducts();
      }
    })
    .catch(error => console.log(error.message));
}

//!================= modal.js =================

export function handleOpenModal(event) {
  if (event.target.classList.contains('products')) {
    return;
  }

  const eventId = Number(event.target.closest('.products__item').dataset.id);

  getProductById(eventId)
    .then(response => {
      refs.modalProduct.innerHTML = renderModalCard(response);
      refs.modal.classList.add('modal--is-open');
    })
    .catch(error => console.log(error.message));
}

// ===========================================

export function handleCloseModal() {
  refs.modal.classList.remove('modal--is-open');
}
