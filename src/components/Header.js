import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import imagen1 from "../images/imagen1.jpeg";
import imagen2 from "../images/imagen2.jpeg";
import imagen3 from "../images/imagen3.jpeg";
import imagen4 from "../images/imagen4.jpeg";
import imagen5 from "../images/imagen5.jpeg";

function Header() {
  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <Carousel fade>
              <Carousel.Item>
                <img src={imagen1} className="d-block w-100" alt="imagen1" />
                <Carousel.Caption>
                  <h3>EL AMOR ES UN LENGUAJE UNIVERSAL</h3>
                  <p>
                    Vemos a las personas según su plano energético, no
                    diferenciamos de razas, religión, géneros... solo amor del
                    uno al otro.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imagen2} className="d-block w-100" alt="imagen2" />

                <Carousel.Caption>
                  <h3>TRATO PERSONALIZADO</h3>
                  <p>
                    Le damos a cada cliente la atención que requiere para hacer
                    del paso por nuestro centro, la mejor experiencia y la más
                    superadora.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imagen3} className="d-block w-100" alt="imagen3" />

                <Carousel.Caption>
                  <h3>TRAYECTORIA</h3>
                  <p>
                    Miles de clientes satisfechos a lo largo de estos 17 años,
                    apoyando y acompañando a cada uno de ellos en su camino.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imagen4} className="d-block w-100" alt="imagen4" />

                <Carousel.Caption>
                  <h3>SEGUIMIENTO FULL TIME</h3>
                  <p>
                    Nuestros profesionales tienen un seguimiento constante sobre
                    el caso, estando en constante comunicación y dispuesto a
                    solucionar cualquier duda o inquietud las 24hs del día.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imagen5} className="d-block w-100" alt="imagen5" />

                <Carousel.Caption>
                  <h3>TERAPIAS HOLISTICAS </h3>
                  <p>
                    DESEMPANAMOS UNA LABOR FUNDAMENTAL CON ESTAS EN EL
                    EQUILIBRIO MENTAL Y CORPORAL. FAVORECE LA SANACION Y EL
                    BIENESTAR INTEGRAL DEL ORGANISMO
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

export default Header;
