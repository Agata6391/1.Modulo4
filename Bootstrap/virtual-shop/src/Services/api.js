import axios from "axios";


const API_URL='https://fakestoreapi.com';

export const fetchProducts=()=>axios.get(`${API_URL}/products`);
export const fetchProductsDetails=(id)=>axios.get(`${API_URL}/products/${id}`);