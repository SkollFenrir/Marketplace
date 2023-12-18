import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { postLogin } from '../axios/axios.js';

export default function InputLogin() {
	const { usuario, setUsuario } = useContext(AuthContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await postLogin({ correo : email, contrasena :  password });
      console.log(user)
      setUsuario(user)
      setEmail('')
      setPassword('')
			return navigate('/profile');
		} catch (error) {
			alert('Hubo un error con los datos entregados. Vuelve a intentarlo.');
		}
	};
  console.log(email + password)
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSubmit(e);
		}
	};

	return (
		<>
			<InputGroup className='mb-3 mt-5'>
				<InputGroup.Text id='basic-addon1'>Correo</InputGroup.Text>
				<Form.Control
					onChange={({target}) => setEmail(target.value)}
					placeholder='juan.perez@gmail.com'
          value={email}
					aria-label='email'
					onKeyDown={handleKeyPress}
				/>
			</InputGroup>

			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Contraseña</InputGroup.Text>
				<Form.Control
					onChange={({target}) => setPassword(target.value)}
          value ={password}
					placeholder='***************'
					aria-label='password'
					type='password'
					onKeyDown={handleKeyPress}
				/>
			</InputGroup>

			<Button
				className='mt-3 primary-btn'
				onClick={handleSubmit}>
				Iniciar Sesión
			</Button>
		</>
	);
}
