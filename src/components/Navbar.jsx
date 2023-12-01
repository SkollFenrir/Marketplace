import "../assets/css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext.js";
import { useContext } from "react";


export default function Navbar() {
  const navigate = useNavigate();
  const { usuario, setUsuario } = useContext(AuthContext);
  
  
  return (
    <nav className="navbar">
      <span className="logo">AVDG-Place</span>

      <div className="opciones">

        <span className="me-3">
          <Link to="/">
            Inicio
            <i className="fa-solid fa-house ms-2"></i>
          </Link>
        </span>

        {!usuario ? (

          <div>
            <Link to="/register">
              <button className="btn m-1 register-btn">Registrarse</button>
            </Link>

            <Link to="/login">
              <button className="btn login-btn">Iniciar Sesión</button>
            </Link>
          </div>

        ) : (

          <div>
            <Link to="/profile">
              <button className="btn  m-1 btn-light">Mi Perfil</button>
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}
