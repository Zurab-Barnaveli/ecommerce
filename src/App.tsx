import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import Home from "./user/pages/Home";
import Products from "./user/pages/Products";
import Cart from "./user/pages/Cart";
import Admin from "./admin/pages/Admin";
import Profile from "./user/pages/Profile";
import HomePage from "./user/pages/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
