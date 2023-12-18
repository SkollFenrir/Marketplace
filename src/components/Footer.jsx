import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#49A078',
    padding: '20px',
    color: 'white',
    lineHeight: '1',
  };

  const contactInfo = {
    marginBottom: '20px',
  };

  const socialIcons = {
    fontSize: '28px',
    marginRight: '10px',
    color: 'white',
  };

  const smallText = {
    fontSize: '0.8rem'
  };

  return (
    <footer style={footerStyle} className="mb-2">
      <Container>
        <Row>
          <Col md={4}>
            <div style={contactInfo}>
              <h5>Contáctanos</h5>
              <p>Dirección: Avenida Siempreviva #123, Springfield</p>
              <p>Email: info@miempresa.com</p>
            </div>
          </Col>
          <Col md={4}>
            <div style={contactInfo}>
              <h5>Horario de Atención</h5>
              <p>Lunes a Viernes: 9 am - 5 pm</p>
              <p>Sábados y Domingos: Cerrado</p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h5>Redes Sociales</h5>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} style={socialIcons} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} style={socialIcons} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} style={socialIcons} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
        <Col md={12} className="text-center">
          <p style={smallText}>
            Sitio desarrollado como proyecto final de la carrera Desarrollador Fullstack, Generación 31, Desafío Latam
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;
