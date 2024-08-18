import React from 'react';
import './Coleccion.css'; // Importa el archivo CSS para los estilos

const Coleccion = () => {
    return (
        <div className="coleccion-section">
            <div className="coleccion-content">
                <div className="coleccion-title-container">
                    <h1 className="coleccion-title">Colección</h1>
                    <h2 className="coleccion-subtitle">INVIERNO</h2>
                </div>
                <p className="coleccion-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                    Consequatur vero laboriosam incidunt nam iure numquam,<br />
                    nostrum perspiciatis laborum sit in fugit eligendi ipsa facere<br />
                    voluptatum deleniti possimus voluptatibus sapiente.<br />
                </p>
            </div>
        </div>
    );
};

export default Coleccion;
