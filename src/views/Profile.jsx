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
	const token = localStorage.getItem('token');
	const urlServer = 'https://market-back-bapf.onrender.com';

	const getUsuarioData = async () => {
		const endpoint = '/profile';
		try {
			const { data } = await axios.get(urlServer + endpoint, {
				headers: { Authorization: 'Bearer ' + token },
			});
			setUsuarioGlobal(data[0]);
			setUsuarioLocal(data[0]);
		} catch ({ response: { data: message } }) {
			alert('🙁');
			console.log(message);
		}
	};

	useEffect(() => {
		getUsuarioData();
	}, []);

	const navigateMyProduct = () => {
		navigate(`/my-products`);
	};
	const navigateMyFavorites = () => {
		navigate(`/my-favorites`);
	};
	const navigateSell = () => {
		navigate(`/sell`);
	};
	const navigateGallery = () => {
		navigate(`/gallery`);
	};

	return (
		<div className='bottom-footer'>
			<Container className='mt-4 m-auto '>
				<div className='logo mt-5 font1'>
					¡ Qué gusto, <span className='fw-bold font1'>{usuario.nombre} !</span>
				</div>
				<Row className='mt-5  flex-e'>
					<Col>
						<div className='flex-e'>
							<Row className='mt-3 mb-2 m-auto fs-5 font3 '>
								{' '}
								¿Qué quieres hacer?
							</Row>
							<Row className='flex-e'>
								<Button
									className='mt-2 primary-btn w250 font3'
									variant='outline-light'
									onClick={navigateGallery}>
									Tienda
								</Button>
								<Row className='flex-e'>
									<Button
										className='mt-2 primary-btn w250 font3'
										variant='outline-light'
										onClick={navigateMyProduct}>
										Mis Productos
									</Button>
								</Row>
								<Row className='flex-e'>
									<Button
										className='mt-2 primary-btn w250 font3'
										variant='outline-light'
										onClick={navigateMyFavorites}>
										Favoritos
									</Button>
								</Row>
							</Row>
							<Row>
								<Button
									className='mt-2 primary-btn w250 font3'
									variant='outline-light'
									onClick={navigateSell}>
									Publicar
								</Button>
							</Row>
						</div>
					</Col>
					<Col className='mt-3 flex-e'>
						<>
							<h4 className='mb-4 font3 '>Datos personales</h4>

							<Table
								bordered
								className='table font3 '>
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
