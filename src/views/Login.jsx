import { Container } from "react-bootstrap";
import InputLogin from "../components/InputLogin";

export default function Register(){
    return(
        <Container className="col-10 col-sm-6 col-md-3 m-auto mt-5" >
            <h2 className='logo'>Inicia Sesión </h2>
            <InputLogin/>
        </Container>
    )
}