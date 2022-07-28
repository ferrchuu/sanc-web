import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Boton from "../components/Boton";
import Faqdrop from "../components/Faqdrop";
import "./Faq.css";
import Devider from "../components/Devider";

function Faq() {
  return (
    <div className="textcenter">
      <Boton />
      <Container>
        <Row>
          <h1 className="accent1">Preguntas Frequentes</h1>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h4>
            Nos especializamos en la solución de todos tus problemas amorosos
            mediante trabajos energéticos totalmente puros y beneficiosos en
            muchos aspectos de la vida.
          </h4>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          {"\u00a0\u00a0"}
          <Faqdrop />
        </Row>
        {"\u00a0\u00a0"}
        <Row>
          <h4>
            Todos los hombres buenos y justos tienen que sufrir más, pero deben
            soportar los sufrimientos porque mediante ellos son probados … SAN
            CRIPRIANO
          </h4>
        </Row>
        <Devider />
      </Container>
    </div>
  );
}

export default Faq;
