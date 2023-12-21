import { useContext,useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import AuthContext from '../Contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function InputSell() {
	const {  usuario } = useContext(AuthContext);
	const [user, setU] = useState({})
 	const navigate = useNavigate();
	const handleSetProduct = ({ target: { value, name } }) => {
		setProduct({
			...product,
			[name]: value,
		});
	};
	const token = localStorage.getItem('token');
	const urlServer = 'http://localhost:3000';
	const getUsuarioData = async () => {
		const endpoint = '/profile';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setU(data[0]);
		} catch (error) {
			alert('🙁');
			console.log(error);
		}
	};
	useEffect(() => {
		getUsuarioData();
		console.log(user)
	}, []);
	const [product, setProduct] = useState({
		usuario_id: usuario.id,
		estado: true,
	});
	const postProduct = async () => {
		const endPoint = '/sell';
		console.log(product)
		try {
			await axios.post(urlServer + endPoint, product, {
				headers: { Authorization: 'Bearer ' + token },
			});
			alert(' Producto publicado 😎 ')
			navigate('/profile')
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Título</InputGroup.Text>
				<Form.Control
					onChange={handleSetProduct}
					value={product.titulo}
					name='titulo'
					placeholder='Polera Pumba'
					aria-label='Polera Pumba'
				/>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon2'>Descripción</InputGroup.Text>
				<Form.Control
					as="textarea"
					rows={4}
					maxLength={1000}
					onChange={handleSetProduct}
					value={product.descripcion}
					name='descripcion'
					placeholder='Color, tamaño...'
					aria-label='Color, tamaño...'
				/>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon3'>Imagen</InputGroup.Text>
				<Form.Control
					onChange={handleSetProduct}
					value={product.url_img}
					name='url_img'
					placeholder='Url de la imagen'
					aria-label='Url de la imagen'
				/>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon4'>Precio</InputGroup.Text>
				<Form.Control
					onChange={handleSetProduct}
					value={product.precio}
					name='precio'
					placeholder='20000'
					aria-label='20000'
				/>
			</InputGroup>
			<Button
				className='primary-btn'
				onClick={postProduct}>
				Publicar producto
			</Button>
		</>
	);
}
