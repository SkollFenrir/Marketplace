import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
      <div className="bottom-footer">
      <Container className="py-5 m-auto font3">
        <h1>
          Bienvenido a <span className="fw-bold font1">AVDG-Place</span>
        </h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eius. <br /> Lorem ipsum dolor sit amet.
        </h5>
      </Container>
      <Footer></Footer>
      </div>
    );
  }
  