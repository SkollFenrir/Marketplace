import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../Contexts/ProductContext';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const currentProduct = products.find((p) => p.id === Number(id));

  return (
    <div>
    <Card className="w-50 mx-auto mt-4 mb-5">
      <Row >
        <Col md={5} className="d-flex align-items-center">
          <div className="square-image-container">
          <img
            className="img-fluid rounded"
            src={currentProduct.url_img}
            alt={currentProduct.titulo}
            />
          </div>
        </Col>
        <Col md={7} >
          <Card.Body md={7} className='card-body'>
            <Card.Title className="fw-bolder first-let-cap">{currentProduct.titulo}</Card.Title>

            <Card.Text>{currentProduct.descripcion}</Card.Text>
            
            <div className="d-flex justify-content-between">
              <div className="fw-bold fs-4">Precio: ${currentProduct.precio.toLocaleString()}</div>
              <Button className="danger-btn">Eliminar producto ❌</Button>
              <Button className='primary-btn' onClick={() => addToFavorites(id)} >Añadir a Favoritos ❤</Button>
              <Button className='primary-btn' onClick={() => removeFromFavorites(id)} >Eliminar de Favoritos ❌</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    
    <Footer></Footer>
    </div>
  );
};

export default Product;

