import { Container } from "react-bootstrap";
import InputRegister from "../components/InputRegister";

export default function Register(){
    return(
        <Container className="col-10 col-sm-6 col-md-3 m-auto mt-5" >
            <h2 className='logo'>¡Regístrate! </h2>
            <InputRegister/>
        </Container>
    )
}