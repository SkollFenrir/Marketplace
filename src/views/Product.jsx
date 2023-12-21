import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../Contexts/ProductContext';
import AuthContext from '../Contexts/AuthContext';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import axios from 'axios';

const Product = () => {
	const { id } = useParams();
	const { products } = useContext(ProductContext);
	const { usuario } = useContext(AuthContext);
	const token = localStorage.getItem('token');
	const urlServer = 'http://localhost:3000';
	const endPoint = '/product/:id';
	const navigate = useNavigate();

	const currentProduct = products.find((p) => p.id === Number(id));

	const putEstado = async () => {
		const estado = {
			estado: false,
		};
		console.log(currentProduct.id);
		try {
			await axios.put(urlServer + endPoint, estado, {
				params: { producto_id: currentProduct.id },
				headers: { Authorization: 'Bearer ' + token },
			});
			navigate('/gallery');
			alert('Producto sin stock');
		} catch (error) {}
	};

	const addToFavorites = async () => {
		const ids = { usuario_id: usuario.id, producto_id: currentProduct.id };
		try {
			await axios.post(urlServer + endPoint, ids, {
				headers: { Authorization: 'Bearer ' + token },
			});
			navigate('/my-favorites');
			alert('Agregado a Favoritos');
		} catch (error) {
			console.log(error);
		}
	};

	const removeFromFavorites = async () => {
		try {
			await axios.delete(urlServer + endPoint, {
				params: { usuario_id: usuario.id, producto_id: currentProduct.id },
				headers: { Authorization: 'Bearer ' + token },
			});
			navigate('/my-favorites');
			alert('Eliminado de favoritos');
		} catch (error) {
			console.log(error);
		}
	};
	const [isInFavorites, setIsInFavorites] = useState('');
	const checkFavoriteStatus = async () => {
		const endPoint = '/isFavorite';
		try {
			const {data} = await axios.get(urlServer + endPoint, {
				params: {
					usuario_id: usuario.id,
					producto_id: currentProduct.id,
				},
				headers: { Authorization: 'Bearer ' + token },
			});
			setIsInFavorites(data); 
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		checkFavoriteStatus();
	}, []);

	return (
		<div>
			<Card className='w-50 mx-auto mt-4 mb-5'>
				<Row>
					<Col
						md={5}
						className='d-flex align-items-center'>
						<div className='square-image-container'>
							<img
								className='img-fluid rounded'
								src={currentProduct.url_img}
								alt={currentProduct.titulo}
							/>
						</div>
					</Col>
					<Col md={7}>
						<Card.Body
							md={7}
							className='card-body'>
							<Card.Title className='fw-bolder first-let-cap'>
								{currentProduct.titulo}
							</Card.Title>

							<Card.Text>{currentProduct.descripcion}</Card.Text>

							<div className='d-flex justify-content-between'>
								<div className='fw-bold fs-4'>
									Precio: ${currentProduct.precio.toLocaleString()}
								</div>
								<h2>{currentProduct.estado}</h2>

								{usuario.id == currentProduct.usuario_id ? (
									<Button
										onClick={() => putEstado()}
										className='danger-btn'>
										Eliminar producto ❌
									</Button>
								) : (
									<></>
								)}

								{!isInFavorites ? (
									<Button
										className='primary-btn'
										onClick={() => addToFavorites()}>
										Añadir a Favoritos ❤
									</Button>
								) : (
									<Button
										className='primary-btn'
										onClick={() => removeFromFavorites()}>
										Eliminar de Favoritos ❌
									</Button>
								)}
							</div>
						</Card.Body>
					</Col>
				</Row>
			</Card>

			<Footer></Footer>
		</div>
	);
};

export default Product;
