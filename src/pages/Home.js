import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Boton from "../components/Boton";
import Header from "../components/Header";
import Cuadros from "../components/Cuadros";
import Banner from "../components/Banner";
import Devider from "../components/Devider";

function Home() {
  return (
    <div>
      <Boton />
      <Container fluid>
        <Devider />
        <Header />
        {"\u00a0\u00a0"}
        <Devider />
        {"\u00a0\u00a0"}
        <Cuadros />
        {"\u00a0\u00a0"}
        <Banner />
        {"\u00a0\u00a0"}
      </Container>
    </div>
  );
}

export default Home;
