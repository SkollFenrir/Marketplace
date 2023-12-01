import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";


export default function RegistroForm() {
  const { setUsuario } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = () => {
    // Cambiar el estado de autenticación a true
    alert("Usuario identificado con éxito 😀")
    setUsuario();
    navigate("/profile")
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>Iniciar Sesión</h1>
      
      <div className="form-group mt-1 ">
        <label>Correo electrónico</label>
        <input

          // onChange={} todavía no se usará
          type="email"
          name="email"
          className="form-control"
          placeholder="juan.perez@correo.com"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Contraseña</label>
        <input

          // onChange={} todavía no se usará
          type="password"
          name="password"
          className="form-control"
          placeholder="********"
        />
      </div>
      
      <button className="btn btn-light mt-3" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
}
