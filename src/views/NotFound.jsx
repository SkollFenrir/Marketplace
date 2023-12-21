import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../Contexts/AuthContext';

const NotFound = () => {
	const { setUsuario } = useContext(AuthContext);
	const token = localStorage.getItem('token');
	const urlServer = 'http://localhost:3000';
  
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	const getUsuarioData = async () => {
		const endpoint = '/profile';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setUsuario(data[0]);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getUsuarioData();
	}, []);

	return (
		<div className='d-flex align-items-center justify-content-center notFound mt-5'>
			<div className='text-center'>
				<img
					src='https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif'
					alt='Imagen de Error'
					className='mb-4' // Agrega clases o estilos según sea necesario
					height={250}
				/>
				<h1 className='display-1 fw-bold'>Error 404</h1>
				<p className='fs-3'>
					<span className='text-danger'>Ups!</span> Página no encontrada.
				</p>
				<p className='lead'>
					¿Qué esperabas encontrar? La ruta que estás siguiendo no existe...
				</p>
			</div>
		</div>
	);
};

export default NotFound;
