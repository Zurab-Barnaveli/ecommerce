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

export const loginUser = async (email: string, password: string) => {
  return axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
};

export const addProduct = async (token: string, productData: any) => {
  return axios.post(`${BASE_URL}/product`, productData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const changeProduct = async (
  token: string,
  productId: number,
  productData: any
) => {
  return axios.put(`${BASE_URL}/product/${productId}`, productData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteProduct = async (token: string, productId: number) => {
  return axios.delete(`${BASE_URL}/product/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUserInfo = async (token: string) => {
  return axios.get(`${BASE_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const changeUserInfo = async (token: string, userData: any) => {
  return axios.post(`${BASE_URL}/user`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
