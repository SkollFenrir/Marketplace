import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
      <div className="bottom-footer">
      <Container className="py-5 m-auto">
        <h1>
          Bienvenido a <span className="fw-bold">AVDG-Place</span>
        </h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eius. <br /> Lorem ipsum dolor sit amet.
        </h5>
      </Container>
      <Footer></Footer>
      </div>
    );
  }
  