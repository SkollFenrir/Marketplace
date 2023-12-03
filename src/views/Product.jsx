import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../Contexts/ProductContext';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const currentProduct = products.find((p) => p.id === Number(id));

  return (
    <Card className="w-50 mx-auto mt-4">
      <Row>
        <Col md={5} className="d-flex align-items-center">
          <div className="square-image-container">
          <img
            className="img-fluid rounded"
            src={currentProduct.img}
            alt={currentProduct.title}
            />
          </div>
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title className="fw-bolder first-let-cap">{currentProduct.title}</Card.Title>

            <Card.Text>{currentProduct.desc}</Card.Text>
            
            <div className="d-flex justify-content-between">
              <div className="fw-bold fs-4">Precio: ${currentProduct.price.toLocaleString()}</div>
              <Button variant="success">
                Añadir 🛒
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Product;

