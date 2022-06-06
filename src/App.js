import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import Product from "./Components/product/Product";
import MainPage from "./Components/mainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/contact/ContactUs";

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderNav></HeaderNav>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
