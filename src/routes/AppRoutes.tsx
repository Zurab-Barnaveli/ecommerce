import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../components/HomePage";
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage";
import AdminPage from "../components/AdminPage";
import LoginPage from "../components/LoginPage";
import UserprofilePage from "../components/UserprofilePage";
import ContactUsPage from "../components/ContactUsPage";
import ProductListPage from "../components/ProductListPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/profile' element={<UserprofilePage />} />
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/category/:category' element={<ProductListPage />} />
      <Route path='/search/:searchTerm' element={<ProductListPage />} />
    </Routes>
  );
};

export default AppRoutes;
