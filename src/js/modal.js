//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { refs } from './refs';
import { handleOpenModal, handleCloseModal } from './handlers';

import {
  getAllProducts,
  getCategoriesList,
  getProductById,
  getProductByName,
  getProductsByCategory,
} from './products-api';

import { renderCards, renderModalCard } from './render-function';

// refs.products.addEventListener('click', event => {
//   const eventId = handleProducts(event);
//   getProductById(eventId)
//     .then(response => {
//       refs.modalProduct.innerHTML = renderModalCart(response);
//       refs.modal.classList.add('modal--is-open');
//     })
//     .catch(error => console.log(error.message));
// });

refs.products.addEventListener('click', handleOpenModal);
refs.modalCloseBtn.addEventListener('click', handleCloseModal);
