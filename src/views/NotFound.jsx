import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center notFound mt-5">
      <div className="text-center">
        <img
          src="https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif" 
          alt="Imagen de Error"
          className="mb-4" // Agrega clases o estilos según sea necesario
          height={250}
        />
        <h1 className="display-1 fw-bold">Error 404</h1>
        <p className="fs-3">
          <span className="text-danger">Ups!</span> Página no encontrada.
        </p>
        <p className="lead">
          ¿Qué esperabas encontrar? La ruta que estás siguiendo no existe...
        </p>
        <a href="/" className="btn primary-btn">
          Ir al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
