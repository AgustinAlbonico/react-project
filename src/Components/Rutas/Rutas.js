import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Head";
import Warning from "../Warning";
import Landing from "../../Pages/Landing";
import Micros from "../../Pages/Micros";
import Monitores from "../../Pages/Monitores";
import Productos from "../../Pages/Productos";
import Notebooks from "../../Pages/Notebooks";
import Soporte from "../../Pages/Soporte";
import Comunidad from "../../Pages/Comunidad";

function Rutas() {
  return (
    <Router>
      <Warning />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Micros" element={<Micros />} />
        <Route path="/Monitores" element={<Monitores />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Notebooks" element={<Notebooks />} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/Comunidad" element={<Comunidad />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
