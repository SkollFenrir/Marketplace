import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Heart from './Heart';

const CardP = ({ product }) => {
    const navigate = useNavigate();
    const navigateProduct = (id) => {
        navigate(`/Product/${id}`);
    };
    const { id, img, title, desc, price, status } = product;

    return (
        <Card className='card'>
            <Card.Img variant='top' src={img} />
            
            <div className='like-btn'>
                <Heart 
					// onClick={() => setFavoritos(foto.id)}	--> con un clic, se agrega o desagrega a favoritos
					// filled={foto.favorito}					--> el estado maneja si está o no
					></Heart>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Body>
                    <Button className='primary-btn' onClick={() => navigateProduct(id)} >Ver detalle</Button>
					<Card.Text>{price}</Card.Text>
                    <Card.Text>{status}</Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default CardP;
