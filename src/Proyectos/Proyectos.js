import React from 'react';
import './styles.css'; // Asegúrate de que la ruta al CSS es correcta

function Proyectos() {
  return (
    <div>
      <header>
        {/* Aquí podrías poner algún contenido de encabezado si lo necesitas */}
      </header>
      <main>
        <div className="modal">
          <div className="modal-content">
            <h1>PROYECTOS</h1>
            <ul>
              <li>Proyecto 1</li>
              <li>Proyecto 2</li>
              <li>Proyecto 3</li>
              <li>Proyecto 4</li>
              <li>Proyecto 5</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Proyectos;
