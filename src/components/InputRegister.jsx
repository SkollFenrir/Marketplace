import { Button, Form, InputGroup } from 'react-bootstrap';

export default function InputRegister() {


    return (
      < >
          
      <InputGroup className='mb-3 mt-5'>
				<InputGroup.Text id='basic-addon1'>Nombre</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='Juan'
					aria-label='name'
					aria-aria-describedby='nombre del usuario'
				/>
      </InputGroup>
          
      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Apellido</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='Pérez'
					aria-label='last-name'
					aria-aria-describedby='apellido del usuario'
				/>
      </InputGroup>
          
      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Correo</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='juan.perez@gmail.com'
					aria-label='email'
          aria-aria-describedby='correo electrónico del usuario'
				/>
      </InputGroup>  
        
      <InputGroup className='mb-3'>
				<InputGroup.Text id='basic-addon1'>Contraseña</InputGroup.Text>
				<Form.Control
					//onChange={} todavía no se usará
					placeholder='***************'
					aria-label='password'
          aria-aria-describedby='contraseña del usuario'
          type="password"
				/>
      </InputGroup>
  
      <Form.Select aria-label="Default select example">
        <option>Selecciona tu género</option>
        <option value="femenine">Femenino</option>
        <option value="masculine">Masculino</option>
        <option value="other">Otro</option>
      </Form.Select>

        <Button variant="primary" className='mt-3' /* onClick={} */>
          Enviar formulario
        </Button>
      </>
    );
  }
  