import axios from 'axios';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function InputRegister() {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/register";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

    return (
      < >
          
      <InputGroup className='mb-3 mt-5'>
				<InputGroup.Text id='basic-addon1'>Nombre</InputGroup.Text>
				<Form.Control
					placeholder='Juan'
					aria-label='name'
          name="nombre"
          value={usuario.nombre}
          onChange={handleSetUsuario}
				/>
      </InputGroup>
          
      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Apellido</InputGroup.Text>
				<Form.Control
					placeholder='Pérez'
					aria-label='last-name'
          name="apellido"
          value={usuario.apellido}
          onChange={handleSetUsuario}
				/>
      </InputGroup>
          
      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Correo</InputGroup.Text>
				<Form.Control
					placeholder='juan.perez@gmail.com'
					aria-label='email'
          name="correo"
          value={usuario.correo}
          onChange={handleSetUsuario}
				/>
      </InputGroup>  
        
      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Contraseña</InputGroup.Text>
				<Form.Control
					placeholder='***************'
					aria-label='password'
          type="password"
          name="contrasena"
          value={usuario.contrasena}
          onChange={handleSetUsuario}
				/>
      </InputGroup>
  
      <Form.Select 
        aria-label="Default select example"
        name="genero"
        value={usuario.genero}
        onChange={handleSetUsuario}
        >
        <option>Selecciona tu género</option>
        <option value="femenine">Femenino</option>
        <option value="masculine">Masculino</option>
        <option value="other">Otro</option>
      </Form.Select>

        <Button className='mt-3 primary-btn' onClick={registrarUsuario}>
          Enviar formulario
        </Button>
      </>
    );
  }
  