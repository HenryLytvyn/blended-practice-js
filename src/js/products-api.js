// Функції для роботи з бекендом

import axios from 'axios';

export async function getAllProducts(currentPage) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`
    );
    return response.data.products;
  } catch (error) {
    alert(error.message);
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getProductByName(name) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${name}`
    );
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getCategoriesList() {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category-list`
    );
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getProductsByCategory(currentPage, category) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}?limit=12&skip=${
        (currentPage - 1) * 12
      }`
    );
    return response.data.products;
  } catch (error) {
    alert(error.message);
  }
}
