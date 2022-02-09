import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import IntroduceCorp from "./layout/IntroduceCorp";
import IndexCarousel from "./layout/IndexCarousel";
import Product from "./layout/Product";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div>
            <Header></Header>
            <HeaderNav></HeaderNav>
            <IndexCarousel></IndexCarousel>
            <BrowserRouter>
                <IntroduceCorp></IntroduceCorp>
                <Product></Product>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
