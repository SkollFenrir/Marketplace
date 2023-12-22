import { Col, Container, Row } from 'react-bootstrap';
import CardP from '../components/CardP';
import ProductContext from '../Contexts/ProductContext';
import AuthContext from '../Contexts/AuthContext.js';
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Gallery() {
	const { products, setProducts } = useContext(ProductContext);
	const { setUsuario } = useContext(AuthContext);
	const token = localStorage.getItem('token');
	const urlServer = 'https://market-back-bapf.onrender.com';
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
	useEffect(() => {
		getUsuarioData();
	}, []);

	const getProducts = async () => {
		const endPoint = '/gallery';
		const { data } = await axios.get(urlServer + endPoint, {
			headers: { Authorization: 'Bearer ' + token },
		});
		setProducts(data);
	};
	useEffect(() => {
		getProducts();
	}, []);

	// Calculando la cantidad de columnas vacías necesarias para completar la fila
	const emptyColsCount = (4 - (products.length % 4)) % 4;
	const emptyCols = Array.from({ length: emptyColsCount }).map((_, index) => (
		<Col key={index}></Col>
	));

	return (
		<div className='bottom-footer'>
			<Container className='Gallery-container font3'>
				<Row className='justify-content-center w-100'>
					<Col
						xs={12}
						className='text-center'>
						<h2 className='shadowed-text mt-3 fw-bold'>
							Revisa los productos publicados en nuestro sitio
						</h2>
					</Col>
				</Row>
				<Row className='g-4'>
					{/* Mapeando productos */}
					{products.map((p, i) => (
						<Col key={i}>
							<CardP product={p} />
						</Col>
					))}
					{/* Agregando columnas vacías para completar la fila */}
					{emptyCols}
				</Row>
			</Container>
			<Footer />
		</div>
	);
}
