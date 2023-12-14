import { Col, Container, Row } from 'react-bootstrap';
import CardP from '../components/CardP';
import ProductContext from '../Contexts/ProductContext';
import React, { useContext } from 'react';
import Footer from '../components/Footer';

export default function Gallery() {
  const { products } = useContext(ProductContext);

  // Calculando la cantidad de columnas vacías necesarias para completar la fila
  const emptyColsCount = (4 - (products.length % 4)) % 4;
  const emptyCols = Array.from({ length: emptyColsCount }).map((_, index) => (
    <Col key={index}></Col>
  ));

  return (
    <>
      <Container className='Gallery-container'>
        <Row>
          <h2>Revisa los productos publicados en nuestro sitio</h2>
        </Row>
        <Row className='g-4'>
          {/* Mapeando productos */}
          {products.map((p, i) => (
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
