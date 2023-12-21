import AuthContext from '../Contexts/AuthContext.js';
import { Container, Navbar as NavbarB, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

export default function Navbar() {
	const { usuario, setUsuario } = useContext(AuthContext);
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
				<NavbarB.Collapse className='justify-content-end '>
					{!usuario ? (
						<>
							<NavLink to={'/register'}
									className=' logo m-1 fs-5'
									variant='outline-light'>
										Registrarse
							</NavLink>
							<NavLink to={'/login'}
									className='m-1 logo fs-5'
									variant='outline-light'>
									Iniciar Sesión
							</NavLink>
						</>
					) : (
						<>
							<Row className='mx-3'>
								<NavLink to={'/profile'}
									className='m-1 primary-btn logo fs-5'>
									Mi Perfil
								</NavLink>
							</Row>
							<NavLink to={'/'}>
								<Button
									className='m-1 danger-btn'
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
