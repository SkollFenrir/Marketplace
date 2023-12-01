import { useContext, useState, useEffect } from "react";
import AuthContext from "../Contexts/AuthContext.js";

export default function Profile() {
  
  return (
    <div className="py-5">
      <div>
        <h1>
        Bienvenido <span className="fw-bold">Juan Pérez</span>
      </h1>
      <h3>
        Lorem ipsum dolor sit amet.
      </h3>
      </div>
      <div>
      <button>Mis productos</button> <br />
      <button>Vender</button>
      </div>
      <div>
      <h3>Datos personales</h3>
      <ul>
        <li>Nombre Apellido</li>
        <li>Correo</li>
        <li>Género</li>
      </ul>
      </div>
    </div>
  );
}
