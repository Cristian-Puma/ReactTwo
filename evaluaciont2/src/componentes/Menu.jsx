import React from 'react';
import '../App.css';

const Menu = () => {
  return (
    <nav className="App-menu">
      <ul>
        <li><a href="#home">Quienes Somos</a></li>
        <li><a href="#about">Tienda</a></li>
        <li><a href="#contact">Servicios</a></li>
        <li><a href="#ofert">Ofertas</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
