import React from 'react'

const NotFound = () => {
  return (
    
    <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="text-center">
        <h1 className="display-1 fw-bold">Error 404</h1>
        <p className="fs-3"> <span className="text-danger">Ups!</span> Página no encontrada.</p>
        <p className="lead">
            ¿Qué esperabas encontrar? La ruta que estás siguiendo no existe...
          </p>
        <a href="/" className="btn primary-btn">Ir al inicio</a>
    </div>
</div>
  )
}

export default NotFound


