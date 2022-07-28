import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import devi1 from "../images/devi1.png";
import { Container } from "react-bootstrap";
import "../components/Devider.css";

function Devider() {
  return (
    <div>
      <Container fluid="xxl">
        <img src={devi1} className="center" alt="devi1" />
      </Container>
    </div>
  );
}

export default Devider;
