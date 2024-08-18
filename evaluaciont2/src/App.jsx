import React from "react";
import Menu from "./componentes/Menu";
import Slider from "./componentes/Slider";
import Coleccion from "./componentes/Coleccion";
import ImagenCard from "./componentes/Imagen.Card";
import Testimonio from "./componentes/Testimonio";
import Footer from "./componentes/Footer"; // Asegúrate de que el Footer esté importado
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <h1 className="App-title">MueblesFAST</h1>
          <Menu />
        </div>
      </header>
      <Slider />
      <Coleccion />
      <div className="imagen-cards-container">
        <ImagenCard 
          imagen="/images/2.jpg"
          imagenHover="/images/2.2.webp"
          titulo="TAPIZADOS"
          texto="son una excelente opción de decoración para tu sala de estar."
        />
        <ImagenCard 
          imagen="images/1.1.webp"
          imagenHover="images/1.webp"
          titulo="SILLON"
          texto="un asiento cómodo para  que cuenta con respaldo y posabrazos."
        />
        <ImagenCard 
          imagen="images/3.jpg"
          imagenHover="images/3.3.webp"
          titulo="MODULARES"
          texto="se colocan de manera flexible y adaptándose a cualquier espacio."
        />
      </div>
      <Testimonio /> 
      <Footer /> 
    </div>
  );
}

export default App;
