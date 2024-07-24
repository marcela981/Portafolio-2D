import React from 'react';
import './styles.css'; // Asegúrate de que la ruta del archivo CSS es correcta

function About() {
  return (
    <div className="modal">
      <div className="left-content">
        <h1>SOBRE MÍ</h1>
        <p>
          Mi nombre es Marcela Mazo, soy estudiante de últimos semestres de ingeniería de sistemas.
          Soy desarrolladora Frontend y Unity de Colombia.
          Tengo experiencia en frameworks como React y una ferviente pasión por los videojuegos.
        </p>
        <div className="link-container">
          <a href="curriculum.pdf" className="curriculum-link" target="_blank">
            Conoce mi Curriculum <span className="arrow">&#8595;</span>
          </a>
        </div>
      </div>
      <div className="right-content">
        <img src="/images/2021-10-03-103123225.jpg" alt="Marcela Mazo" className="profile-image"/>
      </div>
    </div>
  );
}

export default About;
