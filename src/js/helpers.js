import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} from './products-api';
import { renderCards, renderModalCard } from './render-function';

import { refs } from './refs';

// for handlers.js
export function toggleActiveCategory(categoryBtns, targetBtn) {
  for (const categoryBtn of categoryBtns) {
    if (
      categoryBtn.firstElementChild.classList.contains(
        'categories__btn--active'
      )
    ) {
      categoryBtn.firstElementChild.classList.remove('categories__btn--active');
      break;
    }
  }
  targetBtn.classList.add('categories__btn--active');
}

export function checkCategoryAvailability(array) {
  if (!array.length) {
    refs.notFound.classList.add('not-found--visible');
  } else {
    refs.notFound.classList.remove('not-found--visible');
  }
}

// ================================================

export function getProducts(page, category) {
  if (category === 'All') {
    getAllProducts(page)
      .then(response => {
        checkCategoryAvailability(response);
        refs.products.insertAdjacentHTML('beforeend', renderCards(response));
      })
      .catch(error => console.log(error.message));
    console.log(page);
    return;
  }

  getProductsByCategory(page, category)
    .then(response => {
      console.log(response);
      console.log(page);
      console.log(category);
      checkCategoryAvailability(response);
      refs.products.insertAdjacentHTML('beforeend', renderCards(response));
    })
    .catch(error => console.log(error.message));
}
