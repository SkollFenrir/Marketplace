import { useState, useContext } from "react";
import Context from "../Context";
import { useNavigate } from "react-router-dom";


export default function RegistroForm() {
  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>Iniciar Sesión</h1>
      
      <div className="form-group mt-1 ">
        <label>Correo electrónico</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control"
          placeholder="juan.perez@correo.com"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Contraseña</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="********"
        />
      </div>

      <button className="btn btn-light mt-3">
        Iniciar Sesión
      </button>
    </div>
  );
}
