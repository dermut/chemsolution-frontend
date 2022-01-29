import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeaderNav from "./layout/HeaderNav";
import IndexSlider from "./layout/IndexSlider";

function App() {
    return (
        <section>
            <Header></Header>
            <HeaderNav></HeaderNav>
            <IndexSlider></IndexSlider>
            <Footer></Footer>
        </section>
    );
}

export default App;
