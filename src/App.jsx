import './App.css';
import AuthContext from './Contexts/AuthContext';
import ProductContext from './Contexts/ProductContext';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Profile from './views/Profile';
import Gallery from './views/Gallery';
import Product from './views/Product';
import NotFound from './views/NotFound';
import MyProducts from './views/MyProducts';
import Sell from './views/Sell';
import MyFavorites from './views/MyFavorites';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';

function App() {
	const [usuario, setUsuario] = useState();
	const [products, setProducts] = useState([]);

	return (
		<div className='App'>
			<ToastContainer />
			<AuthContext.Provider value={{ usuario, setUsuario }}>
				<ProductContext.Provider value={{ products, setProducts }}>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/register'
							element={<Register />}
						/>
						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/sell'
							element={<PrivateRoute />}>
							<Route
								path='/sell'
								element={<Sell />}
							/>
						</Route>
						<Route
							path='/gallery'
							element={<PrivateRoute />}>
							<Route
								path='/gallery'
								element={<Gallery />}
							/>
						</Route>
						<Route
							path='/my-products'
							element={<PrivateRoute />}>
							<Route
								path='/my-products'
								element={<MyProducts />}
							/>
						</Route>
						<Route
							path='/my-favorites'
							element={<PrivateRoute />}>
							<Route
								path='/my-favorites'
								element={<MyFavorites />}
							/>
						</Route>
						<Route
							path='/product/:id'
							element={<PrivateRoute />}>
							<Route
								path='/product/:id'
								element={<Product />}
							/>
						</Route>
						<Route
							path='/profile'
							element={<PrivateRoute />}>
							<Route
								path='/profile'
								element={<Profile />}
							/>
						</Route>
						<Route
							path='/*'
							element={<NotFound />}
						/>
					</Routes>
				</ProductContext.Provider>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
