import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import userFake from '../mocks/user.json';

export default function InputLogin() {
  const { setUsuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!email) {
        alert('Por favor, proporcione un correo electrónico válido.');
      } else if (password.length < 5) {
        alert('La contraseña debe tener al menos 5 caracteres.');
      } else {
        const { email: emailFake, password: passwordFake, token, nombre } = userFake;

        if (emailFake === email && passwordFake === password) {
          setUsuario({
            token: token,
            email: emailFake,
            nombre: nombre,
            apellido: 'Doe',
            genero: 'masculino',
          });
          return navigate('/profile');
        }
      }
    } catch (error) {
      alert('Hubo un error con los datos entregados. Vuelve a intentarlo.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event); 
    }
  };

  return (
    <>
      <InputGroup className='mb-3 mt-5'>
        <InputGroup.Text id='basic-addon1'>Correo</InputGroup.Text>
        <Form.Control
          onChange={(event) => setEmail(event.target.value)}
          placeholder='juan.perez@gmail.com'
          aria-label='email'
          onKeyDown={handleKeyPress}
        />
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>Contraseña</InputGroup.Text>
        <Form.Control
          onChange={(event) => setPassword(event.target.value)}
          placeholder='***************'
          aria-label='password'
          type='password'
          onKeyDown={handleKeyPress}
        />
      </InputGroup>

      <Button className='mt-3 primary-btn' onClick={handleSubmit}>
        Iniciar Sesión
      </Button>
    </>
  );
}
