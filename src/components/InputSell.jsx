import { useContext, useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import AuthContext from '../Contexts/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function InputSell() {
	const { setUsuario } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleSetProduct = ({ target: { value, name } }) => {
		setProduct({
			...product,
			[name]: value,
		});
	};
	const token = localStorage.getItem('token');
	const urlServer = 'https://market-back-bapf.onrender.com';
	const getUsuarioData = async () => {
		const endpoint = '/profile';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setUsuario(data[0]);
		} catch (error) {
			toast.error('Falló la obtención de los datos del usuario', {
				position: 'top-center',
				autoClose: 2500,
			});
			console.log(error);
		}
	};
	useEffect(() => {
		getUsuarioData();
	}, []);
	const [product, setProduct] = useState({
		estado: true,
	});
	const postProduct = async () => {
		const endPoint = '/sell';
		try {
			await axios.post(urlServer + endPoint, product, {
				headers: { Authorization: 'Bearer ' + token },
			});
			toast.success(' Producto publicado 😎', {
				position: 'top-center',
				autoClose: 2500,
			});
			navigate('/profile');
		} catch (error) {
			console.log(error);
			toast.error('No se pudo publicar tu producto', {
				position: 'top-center',
				autoClose: 2500,
			});
		}
	};

	return (
		<>
			<InputGroup className='mb-3 font3'>
				<InputGroup.Text id='basic-addon1'>Título</InputGroup.Text>
				<Form.Control
					onChange={handleSetProduct}
					value={product.titulo}
					name='titulo'
					placeholder='Polera Pumba'
					aria-label='Polera Pumba'
				/>
			</InputGroup>
			<InputGroup className='mb-3 font3'>
				<InputGroup.Text id='basic-addon2'>Descripción</InputGroup.Text>
				<Form.Control
					as='textarea'
					rows={4}
					maxLength={1000}
					onChange={handleSetProduct}
					value={product.descripcion}
					name='descripcion'
					placeholder='Color, tamaño...'
					aria-label='Color, tamaño...'
				/>
			</InputGroup>
			<InputGroup className='mb-3 font3'>
				<InputGroup.Text id='basic-addon3'>Imagen</InputGroup.Text>
				<Form.Control
					onChange={handleSetProduct}
					value={product.url_img}
					name='url_img'
					placeholder='Url de la imagen'
					aria-label='Url de la imagen'
				/>
			</InputGroup>
			<InputGroup className='mb-3 font3'>
				<InputGroup.Text id='basic-addon4'>Precio</InputGroup.Text>
				<Form.Control
					onChange={handleSetProduct}
					value={product.precio}
					name='precio'
					type='number'
					inputMode='numeric'
					placeholder='20000'
					aria-label='20000'
				/>
			</InputGroup>
			<Button
				className='primary-btn font3'
				onClick={postProduct}>
				Publicar producto
			</Button>
		</>
	);
}
