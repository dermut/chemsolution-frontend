import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import index from "./index/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={index}/>
      </Routes>
    </Router>
  );
}

export default App;
