import "./App.css";
import AuthContext from "./Contexts/AuthContext";
import ProductContext from "./Contexts/ProductContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import RegisterForm from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Gallery from "./views/Gallery";
import Product from "./views/Product";
import NotFound from "./views/NotFound";


function App() {
  const [usuario, setUsuario] = useState(null);
  const [products, setProducts] = useState([]);

	const getData = async () => {
		let res = await fetch('/products.json');
		let data = await res.json();
		setProducts(data);
	};

	useEffect(() => {
		getData();
	}, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ usuario, setUsuario }}>
      <ProductContext.Provider value={{ products }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
