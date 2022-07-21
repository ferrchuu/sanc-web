import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Boton from "./components/Boton";
import Header from "./components/Header";

function App() {
  return (
    <div className="backgroundcolor">
      <Boton />
      <Container fluid>
        <NavBar />
        <Header />
        <Boton></Boton>
      </Container>
    </div>
  );
}

export default App;
