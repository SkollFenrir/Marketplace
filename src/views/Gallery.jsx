import { Col, Container } from 'react-bootstrap';
import CardP from '../components/CardP';
import ProductContext from '../Contexts/ProductContext';
import React, { useContext } from 'react';



export default function Gallery() {

	const { products } = useContext(ProductContext);

	return (
		<Container className='Gallery-container'>
			{products.map((p, i) => {
				return (
					<Col key={i}>
						<CardP product={p} />
					</Col>
				);
			})}
		</Container>
	);
}
