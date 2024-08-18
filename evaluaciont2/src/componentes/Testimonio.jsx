import React, { useState } from "react";
import "./Testimonio.css";

const testimonios = [
  {
    imagen: "images/t3.jpg",
    texto: "el mueble es precioso y no he tenido ningún problema, incluso me mandaron muestras de color en dos ocasiones sin coste alguno, para que estuviera segura de el color, sin saber si realmente me lo quedaría, para mi son profesionales y serios y tienen una gran variedad de muebles, con diferentes estilos y precios.",
    titulo: "Testimonio de nuestros Clientes",
    nombre: "Cesar Altamirano"
    
  },
  {
    imagen: "images/t2.jpg",
    texto: "Llevábamos mucho tiempo buscando un mueble que se adaptara a unas medidas muy concretas y un estilo entre rústico y clásico, Mudeba por un precio bastante razonable nos hizo el mueble a medida y muy personalizado. ",
    titulo: "Testimonio de nuestros Clientes",
    nombre: "Maria Salazar"
    
  },
  {
    imagen: "images/t1.webp",
    texto: "El pasado verano compramos los muebles para todo el cuarto , encontramos lo que no habíamos visto en otros comercios.  El trato fue formidable y los plazos de entrega incluso inferiores a lo que nos habían anunciado.  La calidad de los muebles es excelente y el acabado de muy buena calidad.  Además nos sirvieron los muebles con algunas variantes que solicitamos que no aparecían en el catálogo.",
    titulo: "Testimonio de nuestros Clientes",
    nombre: "Juan Perez"
  },
  
];

const Testimonio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { imagen, texto, titulo, nombre, } = testimonios[currentIndex];

  return (
    <div className="testimonio-container">
      <button className="testimonio-arrow prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="testimonio-content">
        <img src={imagen} alt={titulo} className="testimonio-imagen" />
        <div className="testimonio-text">
          <h2>{titulo}</h2>
          <p>{texto}</p>
          <h3>{nombre}</h3>
        </div>
      </div>
      <button className="testimonio-arrow next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Testimonio;
