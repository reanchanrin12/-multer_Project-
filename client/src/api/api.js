import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

//Fetch all products
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
}

//add a new product
export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
}
