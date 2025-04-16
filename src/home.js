//Логіка сторінки Home

import {
  getAllProducts,
  getCategoriesList,
  getProductById,
  getProductByName,
  getProductsByCategory,
  getTotalProductsAmount,
  getCategoriesProductsAmount,
} from './js/products-api';

import { handleCategories, handleLoadMore } from './js/handlers';
import { renderCategories, renderCards } from './js/render-function';
import { refs } from './js/refs';
import { startpage } from './js/constants';
import { showLoadMoreButton } from './js/helpers';

refs.categories.addEventListener('click', handleCategories);
refs.loadMoreBtn.addEventListener('click', handleLoadMore);

getCategoriesList()
  .then(response =>
    refs.categories.insertAdjacentHTML(
      'beforeend',
      renderCategories([...['All'], ...response])
    )
  )
  .catch(error => alert(error.message))
  .finally(() => {
    refs.categories.firstElementChild.firstElementChild.classList.add(
      'categories__btn--active'
    );
  });

getAllProducts(startpage)
  .then(response =>
    refs.products.insertAdjacentHTML('beforeend', renderCards(response))
  )
  .catch(error => console.log(error.message));

// showLoadMoreButton();

// ==================== Load More ====================
getTotalProductsAmount();
getCategoriesProductsAmount('groceries');
