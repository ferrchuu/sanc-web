import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Boton from "../components/Boton";
import Servifoto from "../components/Servifoto";

import Devider from "../components/Devider";

function Servicios() {
  return (
    <div className="textcenter">
      <Boton />
      <Container fluid>
        <Row>
          <h1 className="accent2">Centro Esoterico</h1>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h1 className="accent1">SAN CIPRIANO</h1>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h4>
            Fieles devotos de Cipriano de Cartago, estamos capacitados para
            solucionar tus problemas. Nos especializados en amarres de amor,
            retorno de parejas y unión en planos espirituales.
          </h4>
          {"\u00a0\u00a0"}
        </Row>
        <Devider />
        <Row>
          <h4>
            Estos son algunos testimonios de nuestros clientes amigos. Estamos
            seguros que tu seras uno de ellos, confiamos en que así sea. Como
            también esperamos contar con su recomendación luego de que tenga su
            bella experiencia con nosotros.
          </h4>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <Servifoto />
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h1>Profesionales a su servicio ..</h1>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h5>
            Lic. Francisco Gonzales Fundador y mentor del centro esotérico ‘SAN
            CIPRIANO’ / terapeuta holístico y experto en protección de artes
            oscuras
          </h5>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h5>
            Lic Gabriela Del Campo Licenciada en Esoterismo, especialista en
            amarres y retorno de parejas, con mas de 15 anos de trayectoria .
            Dirige, actualmente, el foro latinoamericano de esoterismo.
          </h5>
          {"\u00a0\u00a0"}
        </Row>
        <Row>
          <h5>
            Lic Patricia Molinari Con base en las artes milenarias, es la
            persona indicada para centrarte cuando parece que todo esta perdido.
            Profesional dedicada a las uniones espirituales, en constante
            instrucción sobre nuevos procedimientos.
          </h5>
          {"\u00a0\u00a0"}
        </Row>
      </Container>
    </div>
  );
}

export default Servicios;
