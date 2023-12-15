import AuthContext from '../Contexts/AuthContext.js';
import { Container, Navbar as NavbarB, Button } from 'react-bootstrap';
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
							<NavLink to={'/register'}>
								<Button
									className='m-1'
									variant='outline-light'>
									Registrarse
								</Button>
							</NavLink>
							<NavLink to={'/login'}>
								<Button
									className='m-1'
									variant='outline-light'>
									Iniciar Sesión
								</Button>
							</NavLink>
						</>
					) : (
						<>
							<NavLink to={'/profile'}>
								{' '}
								<Button
									className='m-1 primary-btn'>
									Mi Perfil
								</Button>{' '}
							</NavLink>
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
