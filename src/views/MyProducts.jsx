import { Col, Container, Row } from 'react-bootstrap';
import CardP from '../components/CardP';
import AuthContext from '../Contexts/AuthContext';
import ProductContext from '../Contexts/ProductContext';
import React, { useContext, useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { useEffect } from 'react';

export default function MyProducts() {
	const [products, setMyProducts] = useState([]);
	const { usuario, setUsuario } = useContext(AuthContext);
	const { setProducts } = useContext(ProductContext);

	const urlServer = 'https://market-back-bapf.onrender.com';
	const token = localStorage.getItem('token');
	const getUsuarioData = async () => {
		const endpoint = '/profile';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setUsuario(data[0]);
		} catch ({ response: { data: message } }) {
			alert('🙁');
			console.log(message);
		}
	};
	useEffect(() => {
		getUsuarioData();
	}, []);
	const getMyproducts = async () => {
		const endpoint = '/my-products';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setProducts(data);
			setMyProducts(data);
		} catch (error) {
			alert(' 🙁');
			console.log(error);
		}
	};

	useEffect(() => {
		getMyproducts();
	}, []);

	// Calculando la cantidad de columnas vacías necesarias para completar la fila
	const emptyColsCount = (4 - (products.length % 4)) % 4;
	const emptyCols = Array.from({ length: emptyColsCount }).map((_, index) => (
		<Col key={`empty_${index}`}></Col>
	));

	return (
		<div className='bottom-footer'>
			<Container className='Gallery-container font3'>
				<Row className='justify-content-center w-100'>
					<Col
						xs={12}
						className='text-center'>
						<h2 className='shadowed-text mt-3 fw-bold'>
							Revisa tus productos publicados en nuestro sitio
						</h2>
					</Col>
				</Row>
				<Row className='g-4'>
					{/* Mapeando los productos del usuario */}
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
