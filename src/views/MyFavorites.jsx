import { Col, Container, Row } from 'react-bootstrap';
import CardP from '../components/CardP';
import AuthContext from '../Contexts/AuthContext';
import ProductContext from '../Contexts/ProductContext';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';

export default function MyFavorites() {
	const [products, setMyProducts] = useState([]);
	const { setProducts } = useContext(ProductContext);
	const { setUsuario } = useContext(AuthContext);
	const token = localStorage.getItem('token');
	const urlServer = 'http://localhost:3000';

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

	const getMyproducts = async () => {
		const endpoint = '/my-favorites';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setProducts(data);
			setMyProducts(data);
		} catch (error) {
			alert(error);
			console.log(error);
		}
	};
	useEffect(() => {
		getUsuarioData();
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
					<Col xs={12} className='text-center'>
						<h2 className='shadowed-text mt-3 fw-bold'>
							Revisa tus productos favoritos
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
