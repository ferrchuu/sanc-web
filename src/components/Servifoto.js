import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import imagen12 from "../images/imagen12.jpeg";
import imagen13 from "../images/imagen13.jpeg";
import imagen23 from "../images/imagen23.jpeg";
import "../components/Servifoto.css";

function Servifoto() {
  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  src={imagen12}
                  alt="imagen12"
                  className=" servicio-rescale"
                />
                <Carousel.Caption>
                  <p>
                    Solucionamos rupturas amorosas, alejamientos de la pareja y
                    cambios de actitud repentinos en las relaciones.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={imagen23}
                  alt="imagen23"
                  className=" servicio-rescale"
                />

                <Carousel.Caption>
                  <p>
                    Quitamos el sufrimiento, restableciendo los lazos amorosos o
                    eliminando los pensamientos negativos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={imagen13}
                  alt="imagen13"
                  className=" servicio-rescale"
                />

                <Carousel.Caption>
                  <p className="colorblack">
                    Alejamos a terceros que se interpongan en tu relación.
                    Recuperamos la pasión, el amor y la felicidad en la pareja.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="rightcontainer"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Servifoto;
