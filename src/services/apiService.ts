// src/services/apiService.ts

import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getProducts = async (
  keyword: string,
  pageSize: number,
  pageNumber: number
) => {
  return axios.post(`${BASE_URL}/products`, {
    keyword,
    page_size: pageSize,
    page_number: pageNumber,
  });
};

export const getProductById = async (id: number) => {
  return axios.get(`${BASE_URL}/product/${id}`);
};

export const registerUser = async (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  password: string
) => {
  return axios.post(`${BASE_URL}/register`, {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  });
};

// ... Implement other API calls (addProduct, changeProduct, deleteUser, loginUser, getUserInfo, changeUserInfo) ...
