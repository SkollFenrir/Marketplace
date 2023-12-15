import { Button, Form, InputGroup } from 'react-bootstrap';

export default function InputSell() {
	return (
		<>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Título</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='Polera Pumba'
					aria-label='Polera Pumba'
				/>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon2'>Descripción</InputGroup.Text>
				<Form.Control
					// onChange={} todavía no se usará
					placeholder='Color, tamaño...'
					aria-label='Color, tamaño...'
				/>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon3'>Imagen</InputGroup.Text>
				<Form.Control
					// onChange={} todavía no se usará
					placeholder='Url de la imagen'
					aria-label='Url de la imagen'
				/>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon4'>Precio</InputGroup.Text>
				<Form.Control
					// onChange={} todavía no se usará
					placeholder='20000'
					aria-label='20000'
				/>
			</InputGroup>
			<Button className='primary-btn' /* onClick={} */>Publicar producto</Button>
		</>
	);
}
