import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  Navigate,
} from "react-router-dom";
import Inicio from "../components/Inicio/Inicio";
import Portafolio from "../components/Portafolio/Portafolio";
import Servicios from "../components/Servicios/Servicios";
import Curriculum from "../components/Curriculum/Curriculum";
import Contacto from "../components/Contacto/Contacto";
import Header from "../components/Layaout/Header";
import Footer from "../components/Layaout/Footer";
export default function Rutas() {
  return (
    <BrowserRouter>
      {/*Header y navegacion*/}
      <Header />
      {/*Conetenido central*/}
      <section className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route
            path="/MiPortafolio"
            element={<Navigate to="/MiPortafolio/inicio" />}
          />
          <Route path="/MiPortafolio/inicio" element={<Inicio />} />
          <Route path="/MiPortafolio/portafolio" element={<Portafolio />} />
          <Route path="/MiPortafolio/servicios" element={<Servicios />} />
          <Route path="/MiPortafolio/curriculum" element={<Curriculum />} />
          <Route path="/MiPortafolio/contacto" element={<Contacto />} />
        </Routes>
      </section>

      {/*Footer*/}
      <Footer />
    </BrowserRouter>
  );
}
