import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css'; // Ajusta la ruta si es necesario

function Home() {
  return (
    <div>
      <header>
        <h1>Marcela Mazo</h1>
        <h2>Game and frontend Developer</h2>
      </header>
      <main>
        <h1>
          ¡Hola! Soy Marce y te
          <br />presento mi portafolio
        </h1>
        <p>
          Soy desarrolladora <br /> Front-end y Unity
        </p>
        <div className="buttons">
          <Link to="/proyectos">Conoce mis proyectos</Link>
          <Link to="/about">Más sobre mí</Link>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Home;
