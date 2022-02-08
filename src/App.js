import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import IntroduceCorp from "./layout/IntroduceCorp"
import IndexCarousel from "./layout/IndexCarousel";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div>
            <Header></Header>
            <HeaderNav></HeaderNav>
            <IndexCarousel></IndexCarousel>
            <BrowserRouter>
                <IntroduceCorp></IntroduceCorp>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
