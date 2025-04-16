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

refs.products.addEventListener('click', handleOpenModal);
refs.modalCloseBtn.addEventListener('click', handleCloseModal);
