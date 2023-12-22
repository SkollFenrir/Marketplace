import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardP = ({ product }) => {
    const navigate = useNavigate();
    const navigateProduct = (id) => {
        navigate(`/Product/${id}`);
    };
    const { id, url_img, titulo, precio, estado } = product;

    return (
        <Card className='card  c-shadow'>
            <Card.Img variant='top' src={url_img} />
            <Card.Body>
                <Card.Title className='mb-4 font3'>{titulo}</Card.Title>
                <Row className='align-items-center font3'>
                    <Col xs='auto'>
                        <Button className='primary-btn font3' onClick={() => navigateProduct(id)}>Ver detalle</Button>
                    </Col>
                    <Col>
                        <div className='d-flex justify-content-end'>
                            <Card.Text className='fw-bold'> $ {precio.toLocaleString()}</Card.Text>
                        </div>
                    </Col>
                </Row>
                <Card.Text>{estado}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardP;
