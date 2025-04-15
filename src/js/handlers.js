// Функції, які передаються колбеками в addEventListners

import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} from './products-api';
import { renderCarts, renderModalCart } from './render-function';
import { refs } from './refs';

export function handleCategories(event) {
  if (!event.target.classList.contains('categories__btn')) {
    return;
  }

  const categoryBtns = Array.from(refs.categories.children);

  //! ===========================================

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

  event.target.classList.add('categories__btn--active');
  const category = event.target.innerHTML;
  if (category === 'All') {
    getAllProducts(1)
      .then(
        response => (refs.products.innerHTML = renderCarts(response.products))
      )
      .catch(error => console.log(error.message));
  }

  getProductsByCategory(category)
    .then(response => {
      refs.products.innerHTML = renderCarts(response.products);
    })
    .catch(error => console.log(error.message));
}

//! ===========================================

export function handleProducts(event) {
  if (event.target.classList.contains('products')) {
    return;
  }

  return Number(event.target.closest('.products__item').dataset.id);
}

//! ===========================================

export function handleCloseModal() {
  refs.modal.classList.remove('modal--is-open');
}
