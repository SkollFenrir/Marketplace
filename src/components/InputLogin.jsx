import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from 'react-bootstrap';


export default function InputLogin() {
  const { setUsuario } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = () => {
    // Cambiar el estado de autenticación a true
    // alert("Usuario identificado con éxito 😀")
    setUsuario();
    navigate("/profile")
  };

  return (
    <>
      <InputGroup className='mb-3 mt-5'>
				<InputGroup.Text id='basic-addon1'>Correo</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='juan.perez@gmail.com'
					aria-label='email'
          aria-aria-describedby='correo electrónico del usuario'
				/>
      </InputGroup>

      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Contraseña</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='***************'
					aria-label='password'
          aria-aria-describedby='contraseña del usuario'
          type="password"
				/>
      </InputGroup>
      
      <Button variant="primary" className='mt-3' onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </>
  );
}
