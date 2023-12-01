import "./App.css";
import AuthContext from "./Contexts/AuthContext";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import RegisterForm from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";

function App() {
  const [usuario, setUsuario] = useState(null);


  return (
    <div className="App">
      <AuthContext.Provider value={{ usuario, setUsuario }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
