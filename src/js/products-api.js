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

export async function getTotalProductsAmount() {
  try {
    const response = await axios.get(`https://dummyjson.com/products`);
    // console.log(response.data.total);
    return response.data.total;
  } catch (error) {
    alert(error.message);
  }
}

export async function getCategoriesProductsAmount(category) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    // console.log(typeof response.data.products.length);
    return response.data.products.length;
  } catch (error) {
    alert(error.message);
  }
}
