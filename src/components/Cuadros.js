import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Figure } from "react-bootstrap";
import chat from "../images/chat.svg";
import eyes2 from "../images/eyes2.svg";
import colaboration from "../images/colaboration.svg";
import puzzle from "../images/puzzle.svg";
import magic from "../images/magic.svg";
import secure from "../images/secure.svg";
import "../components/Cuadros.css";

function Cuadros() {
  return (
    <div className="subtext">
      <Container fluid="xxl">
        <Row>
          <Col>
            <Figure>
              <Figure.Image width={180} height={180} alt="chat" src={chat} />
              <Figure.Caption>
                Establecemos principios claros de comunicación y seguimiento en
                el cliente y el caso a tratar. La experiencia y nuestra
                trayectoria nos avalan
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={180}
                height={180}
                alt="secure"
                src={secure}
              />
              <Figure.Caption>
                Nuestro recorrido a lo largo de este tiempo nos permite contar
                con la mejor garantía, el aval incansable de nuestros mejores
                chatfesionales capacitados y reconocidos a nivel mundial.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image width={180} height={180} alt="magic" src={magic} />
              <Figure.Caption>
                Guiados por nuestro señor, somos fieles devotos del bien, la
                religión cristiana y la magia blanca como medio y fin de todo lo
                que hacemos.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={180}
                height={180}
                alt="colaboration"
                src={colaboration}
              />
              <Figure.Caption>
                Somos un centro multidisciplinario, contamos con el apoyo de
                chatfesionales en otras áreas, como psicología y coaching
                ontológico
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={180}
                height={180}
                alt="puzzle"
                src={puzzle}
              />
              <Figure.Caption>
                Evaluamos la mejor forma de lograr lo que nos pide, seguimos el
                camino ideal para cada caso en particular. Logramos el resultado
                junto a usted.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image width={180} height={180} alt="eyes2" src={eyes2} />
              <Figure.Caption>
                Solo usted y el chatfesional a cargo, sabrán detalles del caso a
                tratar. Parte indispensable de nuestro código de ética.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Cuadros;
