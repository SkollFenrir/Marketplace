import { useContext, useState, useEffect } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
	const navigateMyProduct = () => {  
		navigate(`/my-products`); 
	};
  const navigateSell = () => {  
		navigate(`/sell`); 
	};
  const navigateGallery = () => {  
		navigate(`/gallery`); 
	};

	return (
		<Container className='mt-4'>
			<h1 className='logo'>
				Bienvenido <span className='fw-bold'>Juan Pérez</span>
			</h1>
			<Row className='mt-5' >
				<Col >
					<div className="justify-content-center align-items-center">
						<Row >
            <div className='mt-5'>
								<Button
									variant='primary'
									size='md'
                  onClick={navigateGallery}>
									Tienda
								</Button>
							</div>
							<div className='mt-5'>
								<Button
									variant='primary'
									size='md'
                  onClick={navigateMyProduct}>
									Mis productos
								</Button>
							</div>
						</Row>
						<Row>
							<div className='mt-5 '>
								<Button
									variant='primary'
									size='md'
                  onClick={navigateSell}>
									  Vender   
								</Button>
							</div>
						</Row>
					</div>
				</Col>
				<Col>
					< >
						<h3 className='logo'>Datos personales</h3>
            <ListGroup className='mt-3'>
              <ListGroupItem variant="secondary">Nombre Apellido</ListGroupItem>
              <ListGroupItem variant="primary">Correo</ListGroupItem>
              <ListGroupItem variant="success">Género</ListGroupItem>
            </ListGroup>
					</>
				</Col>
			</Row>
		</Container>
	);
}
