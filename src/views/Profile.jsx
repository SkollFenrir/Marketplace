import { useContext, useEffect, useState } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

export default function Profile() {
	const [usuario, setUsuarioLocal] = useState({});
	const { setUsuario: setUsuarioGlobal } = useContext(AuthContext);
	const navigate = useNavigate();

	const getUsuarioData = async () => {
		const urlServer = 'http://localhost:3000';
		const endpoint = '/profile';
		const token = localStorage.getItem('token');

		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setUsuarioGlobal(data[0]);
			setUsuarioLocal(data[0]);
		} catch ({ response: { data: message } }) {
			alert(message + ' 🙁');
			console.log(message);
		}
	};

	useEffect(() => {
		getUsuarioData();
	}, []);

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
		<div
			style={{ display: 'flex', flexDirection: 'column', minHeight: '92vh' }}> 
			<Container className='mt-4 m-auto'>
				<h1 className='logo mt-5'>
					Bienvenido, <span className='fw-bold'>{usuario.nombre} !</span>
				</h1>
				<Row className='mt-5'>
					<Col>
						<div className='justify-content-center align-items-center'>
							<Row className='mt-3 mb-2 m-auto fs-5'> ¿Qué quieres hacer?</Row>
							<Row>
								<Button
									className='mt-2 primary-btn w250'
									variant='outline-light'
									onClick={navigateGallery}>
									Ir a la Tienda
								</Button>
								<Row>
									<Button
										className='mt-2 primary-btn w250'
										variant='outline-light'
										onClick={navigateMyProduct}>
										Ver tus productos
									</Button>
								</Row>
							</Row>
							<Row>
								<Button
									className='mt-2 primary-btn w250'
									variant='outline-light'
									style={{}}
									onClick={navigateSell}>
									Vender / Publicar
								</Button>
							</Row>
						</div>
					</Col>
					<Col className='mt-3'>
						<>
							<h4 className='mb-4'>Datos personales</h4>

							<Table
								bordered
								className='table'>
								<tbody>
									<tr>
										<td className='fw-bold text-start'>Nombre completo:</td>
										<td className='text-start'>{`${usuario.nombre} ${usuario.apellido}`}</td>
									</tr>
									<tr>
										<td className='fw-bold text-start'>Correo electrónico:</td>
										<td className='text-start'>{usuario.correo}</td>
									</tr>
									<tr>
										<td className='fw-bold text-start'>Género:</td>
										<td className='text-start'>{`${usuario.genero}`}</td>
									</tr>
								</tbody>
							</Table>
						</>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
}
