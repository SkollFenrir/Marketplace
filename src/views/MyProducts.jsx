import { Col, Container, Row } from 'react-bootstrap';
import CardP from '../components/CardP';
import ProductContext from '../Contexts/ProductContext';
import React, { useContext } from 'react';
import Footer from '../components/Footer';

export default function MyProducts() {
  const { products } = useContext(ProductContext);

  const userId = 1; // Aquí se debería usar el AuthContext para variar según el usuario
  const myProducts = products.filter(product => product.user_id === userId);

  // Calculando la cantidad de columnas vacías necesarias para completar la fila
  const emptyColsCount = (4 - (myProducts.length % 4)) % 4;
  const emptyCols = Array.from({ length: emptyColsCount }).map((_, index) => (
    <Col key={`empty_${index}`}></Col>
  ));

  return (
    <>
      <Container className='Gallery-container'>
        <Row>
          <h2>Revisa tus productos publicados en nuestro sitio</h2>
        </Row>
        <Row className='g-4'>
          {/* Mapeando los productos del usuario */}
          {myProducts.map((p, i) => (
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
