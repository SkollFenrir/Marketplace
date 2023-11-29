import "./App.css";
import Context from "./Context";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import RegisterForm from "./views/Register";
import Login from "./views/Login";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
