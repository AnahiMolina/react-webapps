import React, { useEffect } from 'react';
import Contenedor from '../Layouts/Contenedor';

export default function Reloj() {
  useEffect(() => {

    function actualizarReloj() {
      const reloj = document.getElementById("reloj");
      const fecha = document.getElementById("fecha");

      const now = new Date();
      reloj.textContent = now.toLocaleTimeString();
      fecha.textContent = now.toLocaleDateString();
    }

    const intervalId = setInterval(actualizarReloj, 1000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      <Contenedor titulo='Reloj' icono='bx bx-time-five bx-spin-hover bx-lg' clase='timer'>
        <div className='row'>
          <div className='col-12'>
            <div id='tiempo'>
              <div className='text-center' id='reloj' />
            </div>
            <div className='text-center'>
              <h1 id='fecha' />
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  );
}
