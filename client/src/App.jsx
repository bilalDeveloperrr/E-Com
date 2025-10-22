import React from "react";
import "./App.css";
import Header from "./components/MainHeader/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
