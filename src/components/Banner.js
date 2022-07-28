import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import callus from "../images/callus.jpg";
import "../components/Banner.css";

function Banner() {
  return (
    <div>
      <Container fluid="xxl">
        <Card className=" text-dark">
          <Card.Img src={callus} alt="callus" />
          <Card.Body>
            <Card.Title className="overimg">
              NO DUDES EN HACER TU CONSULTA
            </Card.Title>
            <Card.Text className="overimg">
              NUESTROS PROFESIONALES PODRAN AYUDARTE
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Banner;
