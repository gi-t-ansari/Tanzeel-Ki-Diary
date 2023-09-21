import React from "react";
import Home from "./Components/Home/Home";
import TwoLiners from "./Components/TwoLiners/TwoLiners";
import FourLiners from "./Components/FourLiners/FourLiners";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/two-liners" element={<TwoLiners />} />
        <Route path="/four-liners" element= {<FourLiners />} />
      </Routes>
    </div>
  );
}

export default App;
