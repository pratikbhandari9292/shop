import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./bootstrap.min.css";

import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import ProductDetails from "./pages/product-details/product-details";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/products">
                        <Route path=":productID" element={<ProductDetails />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cart/:id" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
