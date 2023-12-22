import { Container } from "react-bootstrap";
import InputSell from "../components/InputSell";
import Footer from "../components/Footer";

export default function Sell(){
    return(
        <div className="bottom-footer ">
        <Container className="flex-e col-10 col-sm-6 col-md-3 m-auto " >
            <h2 className='logo mb-5'>Publica tu producto</h2>
            <InputSell/>
            
        </Container>
        <Footer/>
        </div>
    )
}