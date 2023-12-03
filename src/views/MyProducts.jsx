import { Col, Container } from 'react-bootstrap';
import CardP from '../components/CardP';
import ProductContext from '../Contexts/ProductContext';
import React, { useContext } from 'react';



export default function MyProducts() {

	const { products } = useContext(ProductContext);

    const userId = 1 // acá hay que usar el AuthContext, para que vaya variando según usuario
    const myProducts = products.filter((product) => product.user_id === userId);

	return (
		<Container className='Gallery-container'>
			{myProducts.map((p, i) => {
				return (
					<Col key={i}>
						<CardP product={p} />
					</Col>
				);
			})}
		</Container>
	);
}
