import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardP = ({ product }) => {
	/* const navigate = useNavigate();
	const navigateProduct = (id) => {  
		navigate(`/Product/${id}`); 
	}; */     //Pendiente de uso 
	const { id, img, title, desc, price, status } = product;
	return (
		<Card className='card'
			/* onClick={() => navigateProduct(id)} */ //Pendiente de uso
			style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src={img}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>
				<Card.Body>
					<Card.Text>{price}</Card.Text>
					<Card.Text>{status}</Card.Text>
				</Card.Body>
			</Card.Body>
		</Card>
	);
};

export default CardP;
