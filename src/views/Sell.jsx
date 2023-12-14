import { Container } from "react-bootstrap";
import InputSell from "../components/InputSell";

export default function Sell(){
    return(
        <Container className="col-10 col-sm-6 col-md-3 m-auto mt-5" >
            <h2 className='logo mb-5'>Publica tu producto</h2>
            <InputSell/>
        </Container>
    )
}