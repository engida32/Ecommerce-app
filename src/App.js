/* eslint-disable no-unused-vars */
import ProductInfo from "./pages/ProductInfo";
import React, { useReducer } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./sections/Cart";
import Slider from "./sections/Slider";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./components/Product";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CartContext, reducer } from "./context/Context";
import { useState } from "react";
import "@stripe/stripe-js";

function App() {
  const [carts, addToCarts] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ carts, addToCarts }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
