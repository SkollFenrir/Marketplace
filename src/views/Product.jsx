import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../Contexts/ProductContext';
import AuthContext from '../Contexts/AuthContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import Footer from '../components/Footer';


const Product = () => {
	const { id } = useParams();
	const { products, setProducts } = useContext(ProductContext);
	const { usuario, setUsuario } = useContext(AuthContext);

	const token = localStorage.getItem('token');
	const urlServer = 'http://localhost:3000';
	const endPoint = '/product/:id';
	const navigate = useNavigate();
	const product_Id = Number(id)

	const getUsuarioData = async () => {
		const endpoint = '/profile';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setUsuario(data[0]);
		} catch ({ response: { data: message } }) {
			console.log(message);
		}
	};

	const getProducts = async () => {
		const endPoint = '/gallery';
		const { data } = await axios.get(urlServer + endPoint, {
			params: {id: product_Id},
			headers: { Authorization: 'Bearer ' + token },
		});
		setProducts(data);
	};

	useEffect(() => {
		getUsuarioData();
		getProducts();
	}, []);

	const currentProduct = products.find((p) => p.id === Number(id));

	const putEstado = async () => {
		const estado = {
			estado: false,
		};
		try {
			await axios.put(urlServer + endPoint, estado, {
				params: { producto_id: currentProduct.id },
				headers: { Authorization: 'Bearer ' + token },
			});
			navigate('/gallery');
			toast.warn('Producto sin stock',{
				position: 'top-center',
				autoClose: 2500,
			});
		} catch (error) {}
	};

	const addToFavorites = async () => {
		const productId = { producto_id: product_Id };
		try {
			await axios.post(urlServer + endPoint, productId, {
				headers: { Authorization: 'Bearer ' + token },
			});
			navigate('/gallery');
			toast.success('Agregado a Favoritos', {
				position: 'top-center',
				autoClose: 2500,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const removeFromFavorites = async () => {
		try {
			await axios.delete(urlServer + endPoint, {
				params: { producto_id: product_Id },
				headers: { Authorization: 'Bearer ' + token },
			});
			navigate('/gallery');
			toast.warn('Eliminado de favoritos', {
				position: 'top-center',
				autoClose: 2500,
			});
		} catch (error) {
			console.log(error);
		}
	};
	const [isInFavorites, setIsInFavorites] = useState('');
	const checkFavoriteStatus = async () => {
		const endPoint = '/isFavorite';
		try {
			const { data } = await axios.get(urlServer + endPoint, {
				params: {
					producto_id: product_Id,
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
		<div className='bottom-footer'>
			<Container className='Gallery-container font3'>
			<Row className='justify-content-center w-100'>
				<Col xs={12} className='text-center'>
					<h2 className='shadowed-text mt-3 fw-bold'>
						¿Qué tal este producto? Revisa sus características
					</h2>
				</Col>
			</Row>
			<Card className='w-75 mx-auto mt-4 mb-5 font4'>
				<Row>
					<Col
						md={4}
						className='d-flex align-items-center'>
						<div className='square-image-container'>
							<img
								className='img-fluid rounded'
								src={currentProduct.url_img}
								alt={currentProduct.titulo}
							/>
						</div>
					</Col>
					<Col md={8}>
						<Card.Body className='ayuda aquí GPT'>
							
							<div>
								<Card.Title className='fw-bolder first-let-cap'>
								{currentProduct.titulo}
								</Card.Title>

								<Card.Text>{currentProduct.descripcion}</Card.Text>
							</div>

							<div className='d-flex justify-content-between mt-5'>
								
								<div>
								<div className='fw-bold fs-4'>
									$ {currentProduct.precio.toLocaleString()}
								</div>
								<div>{currentProduct.estado}</div> {/* para qué está esto? */}
								</div>

								<div>
								{usuario.id == currentProduct.usuario_id ? (
									<Button
										onClick={() => putEstado()}
										className='danger-btn mx-2'>
										Eliminar producto ❌
									</Button>
								) : (
									<></>
								)}

								{!isInFavorites ? (
									<Button
										className='primary-btn mx-2'
										onClick={() => addToFavorites()}>
										Añadir a Favoritos ❤
									</Button>
								) : (
									<Button
										className='primary-btn mx-2'
										onClick={() => removeFromFavorites()}>
										Eliminar de Favoritos ❌
									</Button>
								)}
								</div>
							</div>
						</Card.Body>
					</Col>
				</Row>
			</Card>
			
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Product;
