import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Reloj() {

  function actualizarReloj() {
    const reloj = document.getElementById("reloj");
    reloj.textContent = new Date().toLocaleTimeString();
  }

  setInterval(actualizarReloj, 1000);

  return (
    <div>
      <Navbar />
      <div id='backReloj' className='container'>
        <div className='text-center titulos'>
          <h1>Reloj</h1>
          <i className='bx bx-time-five bx-spin bx-lg'></i>
        </div>

        <div id='timer' className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div id='tiempo'>
                <div className='text-center' id='reloj' />
              </div>
              <div className='text-center'>
                <h1>Fecha</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
