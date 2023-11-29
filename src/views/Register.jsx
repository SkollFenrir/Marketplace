export default function RegisterForm() {


  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>¡Regístrate!</h1>

      <div className="form-group mt-1 ">
        <label>Nombre</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Juan"
        />
      </div><div className="form-group mt-1 ">
        <label>Apellido</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Pérez"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="juan.perez@correo.com"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="************"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Género</label>
        <select
          name="gender"
          className="form-select"
        >
          <option disabled selected>
            Seleccione un género
          </option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      

      <button  className="btn btn-light mt-3">
        Registrarme
      </button>
    </div>
  );
}
