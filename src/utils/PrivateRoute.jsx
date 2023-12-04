import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext.js';
import { useContext } from 'react';

const PrivateRoute = () => {
	const { usuario } = useContext(AuthContext);

	return usuario.token ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
