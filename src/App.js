import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Faq from "./pages/Faq";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <div className="backgroundcolor">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
