import './App.css';
import AuthContext from './Contexts/AuthContext';
import ProductContext from './Contexts/ProductContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './views/Home';
import RegisterForm from './views/Register';
import Login from './views/Login';
import Profile from './views/Profile';
import Gallery from './views/Gallery';
import Product from './views/Product';
import NotFound from './views/NotFound';
import MyProducts from './views/MyProducts';
import Sell from './views/Sell';
import PrivateRoute from './utils/PrivateRoute';
import { getProducts } from './axios/axios';

function App() {
	const [usuario, setUsuario] = useState();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(setProducts)
	}, []);

	return (
		<div className='App'>
			<AuthContext.Provider value={{ usuario, setUsuario }}>
				<ProductContext.Provider value={{ products }}>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route
								path='/'
								element={<Home />}
							/>
							<Route
								path='/register'
								element={<RegisterForm />}
							/>
							<Route
								path='/login'
								element={<Login />}
							/>
							<Route
								path='/sell'
								element={<Sell />}
							/>
							<Route
								path='/gallery'
								element={<Gallery />}
							/>
							<Route
								path='/my-products'
								element={<MyProducts />}
							/>
							<Route
								path='/product/:id'
								element={<Product />}
							/>
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
					</BrowserRouter>
				</ProductContext.Provider>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
