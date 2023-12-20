import './App.css';
import AuthContext from './Contexts/AuthContext';
import ProductContext from './Contexts/ProductContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
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
import MyFavorites from './views/MyFavorites';

function App() {
	const [usuario, setUsuario] = useState({});
	const [products, setProducts] = useState([]);

	return (
		<div className='App'>
			<AuthContext.Provider value={{ usuario, setUsuario }}>
				<ProductContext.Provider value={{ products, setProducts }}>
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
								path='/my-favorites'
								element={<MyFavorites />}
							/>
							<Route
								path='/product/:id'
								element={<Product />}
							/>
							<Route
								path='/profile'
								element={<Profile />}
							/>
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
