import { Col, Container } from 'react-bootstrap';
import CardP from '../components/CardP';
import { useEffect, useState } from 'react';

export default function Gallery() {
	const [products, setProducts] = useState([]);
	const getData = async () => {
		let res = await fetch('../public/products.json');
		let data = await res.json();
		setProducts([...data]);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<Container className='Gallery-container'>
			{products.map((p, i) => {
				return (
					<Col key={i}>
						<CardP product={p} />
					</Col>
				);
			})}
		</Container>
	);
}
