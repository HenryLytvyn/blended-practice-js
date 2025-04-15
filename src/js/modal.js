//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { refs } from './refs';
import { handleProducts, handleCloseModal } from './handlers';

import {
  getAllProducts,
  getCategoriesList,
  getProductById,
  getProductByName,
  getProductsByCategory,
} from './products-api';

import { renderCarts, renderModalCart } from './render-function';

refs.products.addEventListener('click', event => {
  const eventId = handleProducts(event);
  getProductById(eventId)
    .then(response => {
      console.log(response);
      refs.modalProduct.innerHTML = renderModalCart(response);
      refs.modal.classList.add('modal--is-open');
    })
    .catch(error => console.log(error.message));
});

refs.modalCloseBtn.addEventListener('click', handleCloseModal);
