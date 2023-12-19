import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

export default function InputLogin() {
	const { setUsuario } = useContext(AuthContext);
	const navigate = useNavigate();
	const [usuario, setUsuarioLocal] = useState({});

	const handleSetUsuario = ({ target: { value, name } }) => {
		const field = {};
		field[name] = value;
		setUsuarioLocal({ ...usuario, ...field });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
    const url = 'http://localhost:3000';
    const endPoint = '/login';
		try {
			const { data: token } = await axios.post(url + endPoint, usuario);
			alert('Usuario identificado con éxito 😀');
			window.localStorage.setItem('token', token);
			console.log( usuario );
			setUsuario( token);
			navigate('/profile');
		} catch (error) {
			alert('Hubo un error con los datos entregados. Vuelve a intentarlo.');
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleLogin(e);
		}
	};

	return (
		<>
			<InputGroup className='mb-3 mt-5'>
				<InputGroup.Text id='basic-addon1'>Correo</InputGroup.Text>
				<Form.Control
					onChange={handleSetUsuario}
					placeholder='juan.perez@gmail.com'
					value={usuario.correo}
					name='correo'
					aria-label='email'
					onKeyDown={handleKeyPress}
				/>
			</InputGroup>

			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Contraseña</InputGroup.Text>
				<Form.Control
					onChange={handleSetUsuario}
					value={usuario.contrasena}
					name='contrasena'
					placeholder='***************'
					aria-label='password'
					type='password'
					onKeyDown={handleKeyPress}
				/>
			</InputGroup>

			<Button
				className='mt-3 primary-btn'
				onClick={handleLogin}>
				Iniciar Sesión
			</Button>
		</>
	);
}
