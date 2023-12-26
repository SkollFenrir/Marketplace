import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = () => {
	const token = localStorage.getItem('token');
	const navigate = useNavigate();
	const isAuthenticated = !!token;

	useEffect(() => {
		if (!isAuthenticated) {
			toast.error('!Necesitas estar registrado para acceder¡', {
				position: 'top-center',
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			navigate('/login');
		}
	}, [isAuthenticated, navigate]);

	return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoute;
