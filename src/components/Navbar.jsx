import AuthContext from '../Contexts/AuthContext.js';
import { Container, Navbar as NavbarB, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

export default function Navbar() {
	const { usuario, setUsuario } = useContext(AuthContext);
	const token = localStorage.getItem('token');
	const setActive = ({ isActive }) => (isActive ? 'active' : 'undefined');
	const logOut = () => {
		setUsuario(null);
		localStorage.removeItem('token');
	};
	return (
		<NavbarB
			expand='lg'
			className='bg-body-tertiary navbarB'>
			<Container fluid>
				<NavbarB.Brand className='logo'>
					<NavLink
						className={setActive}
						to={'/'}>
						AVDG-Place
					</NavLink>
				</NavbarB.Brand>
				<NavbarB.Toggle />
				<NavbarB.Collapse className='justify-content-end shadowed-text mx-3'>
					{!token ? (
						<>
							<NavLink
								to={'/register'}
								className=' logo m-2 fs-5'>
								Registrarse
							</NavLink>
							<NavLink
								to={'/login'}
								className='m-2 logo fs-5'>
								Iniciar Sesión
							</NavLink>
						</>
					) : (
						<>
							<Row className='mx-3 shadowed-text'>
								<NavLink
									to={'/profile'}
									className={setActive}>
									Mi Perfil
								</NavLink>
							</Row>
							<NavLink to={'/'}>
								<Button
									className='m-1 danger-btn font2'
									onClick={logOut}>
									Cerrar sesión
								</Button>
							</NavLink>
						</>
					)}
				</NavbarB.Collapse>
			</Container>
		</NavbarB>
	);
}
