import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import Product from "./layout/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./layout/MainPage";

function App() {
    return (
        <div>
            <Header></Header>
            <HeaderNav></HeaderNav>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={MainPage}></Route>
                    <Route path="/product" component={Product}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
