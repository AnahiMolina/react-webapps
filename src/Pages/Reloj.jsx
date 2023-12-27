import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

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
  }, []); 

  return (
    <>
      <Navbar />
      <div id='background' className='container-fluid'>
        <div className='text-center titulos'>
          <h1><i className='bx bx-time-five bx-spin-hover bx-lg'/> Reloj</h1>
        </div>

        <div id='timer' className='container-fluid'>
    
          <div className='row'>
            <div className='col-12'>
              <div id='tiempo'>
                <div className='text-center' id='reloj' />
              </div>
              <div className='text-center'>
                <h1 style={{color:'white'}} id='fecha' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
