import { Container } from "react-bootstrap";
import InputLogin from "../components/InputLogin";
import Footer from "../components/Footer";

export default function Register(){
    return(
        <div className="bottom-footer">
        <Container className="flex-e col-10 col-sm-6 col-md-3 m-auto" >
            <h2 className='logo'>Inicia Sesión </h2>
            <InputLogin/>
        </Container>
        <Footer></Footer>
        </div>
    )
}