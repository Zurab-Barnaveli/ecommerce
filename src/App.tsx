import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
// import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </>
  );
};

export default App;
