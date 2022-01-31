import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import IntroduceCorp from "./layout/IntroduceCorp"
import IndexCarousel from "./layout/IndexCarousel";

function App() {
    return (
        <div>
            <Header></Header>
            <HeaderNav></HeaderNav>
            <IndexCarousel></IndexCarousel>
            <IntroduceCorp></IntroduceCorp>
            <Footer></Footer>
        </div>
    );
}

export default App;
