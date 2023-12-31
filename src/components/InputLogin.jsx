import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function InputLogin() {
	const { setUsuario } = useContext(AuthContext);
	const navigate = useNavigate();
	const [usuario, setUsuarioLocal] = useState({
		correo: '',
		contrasena: '',
	});

	const handleSetUsuario = ({ target: { value, name } }) => {
		const field = {};
		field[name] = value;
		setUsuarioLocal({ ...usuario, ...field });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const url = 'https://market-back-bapf.onrender.com';
		const endPoint = '/login';
		try {
			const { data: token } = await axios.post(url + endPoint, usuario);
			toast.success('Usuario identificado con éxito 😀', {
				autoClose: 2500, // milliseconds
				position: 'top-center',
			});
			window.localStorage.setItem('token', token);
			setUsuario();
			navigate('/profile');
		} catch (error) {
			toast.error('Correo o contraseña incorrecta', {
				position: 'top-center',
				autoClose: 2500,
			});
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleLogin(e);
		}
	};

	return (
		<>
			<InputGroup className='mb-3 mt-5 font3'>
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

			<InputGroup className='mb-3 font3'>
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
				className='mt-3 primary-btn font3'
				onClick={handleLogin}>
				Iniciar Sesión
			</Button>
		</>
	);
}
