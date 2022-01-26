import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Components/Home";

function App() {
    return (
        // TODO: Home 페이지 라우팅이 되지 않고 index.html로 이동 중,
        <Router>
            <Routes>
                <Route path="/" component={Home}/>
            </Routes>
        </Router>
    );
}

export default App;
