import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Heart from './Heart';

const CardP = ({ product, filled }) => {
	const navigate = useNavigate();
	const navigateProduct = (id) => {
		navigate(`/Product/${id}`);
	};
	const { id, url_img, titulo, descripcion, precio, estado } = product;

	return (
		<Card className='card'>
			<Card.Img
				variant='top'
				src={url_img}
			/>

			<div className='like-btn'>
				<Heart
					// onClick={() => setFavoritos(foto.id)}	--> con un clic, se agrega o desagrega a favoritos
					// filled={foto.favorito}					--> el estado maneja si está o no
				></Heart>
			</div>
			<Card.Body>
				<Card.Title>{titulo}</Card.Title>
				<Card.Text>{descripcion}</Card.Text>
				<Card.Body>
					<Button
						className='primary-btn'
						onClick={() => navigateProduct(id)}>
						Ver detalle
					</Button>
					<Card.Text>{precio}</Card.Text>
					<Card.Text>{estado}</Card.Text>
				</Card.Body>
			</Card.Body>
		</Card>
	);
};

export default CardP;
