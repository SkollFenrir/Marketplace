import AuthContext from "../Contexts/AuthContext.js"; 
import { Container, Navbar as NavbarB, Button } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useContext } from "react";

export default function Navbar() {
  const { usuario, setUsuario } = useContext(AuthContext);
	const setActive = ({ isActive }) => (isActive ? 'active' : 'undefined');
	return (
		<NavbarB
			expand='lg'
			className='bg-body-tertiary'>
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
							<NavLink to={'/'}>
								<Button variant='outline-secondary'>Inicio</Button>
							</NavLink>
							<NavLink to={'/register'}>
								<Button variant='outline-primary'>Registrarse</Button>
							</NavLink>
							<NavLink to={'/login'}>
								<Button variant='outline-light'>Iniciar Sesión</Button>
							</NavLink>
						</>
					) : (
						<>
							<NavLink to={'/profile'}>Perfil</NavLink>
							<NavLink to={'/'}>
								<Button variant='outline-danger'>Cerrar sesión</Button>
							</NavLink>
						</>
					)}
				</NavbarB.Collapse>
			</Container>
		</NavbarB>
	);
}
