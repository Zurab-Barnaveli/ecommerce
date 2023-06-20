// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./shared/CartContext";
import HomePage from "./user/pages/HomePage";
import ProductDetailsPage from "./user/pages/ProductDetailsPage";
import CartPage from "./user/pages/CartPage";
import AdminPage from "./admin/pages/AdminPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/product/:id' component={ProductDetailsPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/admin' component={AdminPage} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;
