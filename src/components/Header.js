import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import couplelove from "../images/couple-love.jpg";
import romant from "../images/romant.jpg";
import candle1 from "../images/candle1.jpg";
import couples2 from "../images/couples2.jpg";
import wine from "../images/wine.jpg";
import "../components/Header.css";

function Header() {
  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  src={couplelove}
                  alt="couplelove"
                  className=" img-rescale"
                />
                <Carousel.Caption>
                  <h3 className="headertext">
                    EL AMOR ES UN LENGUAJE UNIVERSAL
                  </h3>
                  <p className="subtext">
                    Vemos a las personas según su plano energético, no
                    diferenciamos de razas, religión, géneros... solo amor del
                    uno al otro.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={wine} alt="wine" className=" img-rescale" />

                <Carousel.Caption>
                  <h3 className="headertext">TRATO PERSONALIZADO</h3>
                  <p className="subtext">
                    Le damos a cada cliente la atención que requiere para hacer
                    del paso por nuestro centro, la mejor experiencia y la más
                    superadora.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={romant} alt="romant" className=" img-rescale" />

                <Carousel.Caption>
                  <h3 className="headertext">TRAYECTORIA</h3>
                  <p className="subtext">
                    Miles de clientes satisfechos a lo largo de estos 17 años,
                    apoyando y acompañando a cada uno de ellos en su camino.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={candle1} alt="candle1" className=" img-rescale" />

                <Carousel.Caption>
                  <h3 className="headertext">SEGUIMIENTO FULL TIME</h3>
                  <p className="subtext">
                    Nuestros profesionales tienen un seguimiento constante sobre
                    el caso, estando en constante comunicación y dispuesto a
                    solucionar cualquier duda o inquietud las 24hs del día.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={couples2} alt="couples2" className=" img-rescale" />

                <Carousel.Caption>
                  <h3 className="headertext">TERAPIAS HOLISTICAS </h3>
                  <p className="subtext">
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
