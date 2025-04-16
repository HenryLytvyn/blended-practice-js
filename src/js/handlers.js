// Функції, які передаються колбеками в addEventListners

import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} from './products-api';
import { renderCards, renderModalCard } from './render-function';
import {
  toggleActiveCategory,
  getProducts,
  checkCategoryAvailability,
} from './helpers';

import { refs } from './refs';
import { startpage } from './constants.js';

let currentCategory = 'All';
let currentPage = startpage;

//!================= home.js =================

export function handleCategories(event) {
  if (!event.target.classList.contains('categories__btn')) {
    return;
  }

  currentPage = startpage;
  refs.products.innerHTML = '';
  const categoryBtns = Array.from(refs.categories.children);

  toggleActiveCategory(categoryBtns, event.target);

  currentCategory = event.target.textContent;

  getProducts(startpage, currentCategory);
}

// ===========================================

export function handleLoadMore() {
  currentPage++;
  getProducts(currentPage, currentCategory);
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
