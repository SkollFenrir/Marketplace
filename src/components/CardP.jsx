import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardP = ({ product }) => {
    const navigate = useNavigate();
    const navigateProduct = (id) => {
        navigate(`/Product/${id}`);
    };
    const { id, url_img, titulo, descripcion, precio, estado } = product;

    return (
        <Card className='card'>
            <Card.Img variant='top' src={url_img} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Body>
                    <Button className='primary-btn' onClick={() => navigateProduct(id)} >Ver detalle</Button>
					<Card.Text>{precio}</Card.Text>
                    <Card.Text>{estado}</Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default CardP;
