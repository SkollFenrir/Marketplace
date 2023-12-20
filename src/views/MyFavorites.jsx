import { Col, Container, Row } from 'react-bootstrap';
import CardP from '../components/CardP';
import AuthContext from '../Contexts/AuthContext';
import React, { useContext, useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { useEffect } from 'react';

export default function MyFavorites() {

	const [products, setMyProducts] = useState([]);
	const { usuario } = useContext(AuthContext);
	

	const getMyproducts = async () => {
		const urlServer = 'http://localhost:3000';
		const endpoint = '/my-products';
		const token = localStorage.getItem('token');
    
		try {
			const { data } = await axios.get(urlServer + endpoint,  {
        params: {usuario_id: usuario.id},
				headers: { Authorization: 'Bearer ' + token },
			} );
			setMyProducts(data)
		} catch (error ) {
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
		<>
			<Container className='Gallery-container'>
				<Row>
					<h2>Revisa tus artículos favoritos de nuestro sitio</h2>
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
		</>
	);
}
