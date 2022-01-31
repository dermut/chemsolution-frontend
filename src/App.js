import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import IntroduceCorp from "./layout/IntroduceCorp"
import IndexSlider from "./layout/IndexSlider";

function App() {
    return (
        <section>
            <Header></Header>
            <HeaderNav></HeaderNav>
            <IndexSlider></IndexSlider>
            <IntroduceCorp></IntroduceCorp>
            <Footer></Footer>
        </section>
    );
}

export default App;
