import React from "react";
import "./Imagencard.css";

const ImagenCard = ({ imagen, imagenHover, titulo, texto }) => {
  return (
    <div className="imagen-card">
      <h2 className="imagen-card-title">{titulo}</h2>
      <p className="imagen-card-text">{texto}</p>
      <img
        src={imagen}
        alt={titulo}
        className="imagen-card-img"
        onMouseOver={(e) => (e.currentTarget.src = imagenHover)}
        onMouseOut={(e) => (e.currentTarget.src = imagen)}
      />
    </div>
  );
};

export default ImagenCard;
