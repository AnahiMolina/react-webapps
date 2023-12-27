import React, { useState } from 'react'
import Navbar from '../components/Navbar'
//'e.target.value' valor del input

export default function Colores() {
  const [color, setColor] = useState('#5b00ff')

  const CambiarColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <Navbar />
        <div id='colores' className='container-fluid'>
          <div style={{ backgroundColor: color }}>
            <div className='text-center titulos'>
              <h1><i className='bx bxs-color-fill bx-flashing-hover bx-lg'/> Colores</h1>
              <h1>{color}</h1>
            </div>
            <div className='centro'>
              <input type='color' value={color} onChange={CambiarColor} />
            </div>
          </div>
        </div>
    </>
    /*<div id='colores' className='container-fluid'>
      <div style={{ backgroundColor: color }}>
        <PruebaNavbar />
        <div className='text-center titulos mt-5'>
          <h1>Colores</h1>
          <h1>{color}</h1>
        </div>
        <div className='centro'>
          <input type='color' value={color} onChange={CambiarColor} />
        </div>
      </div>
    </div>*/
  )
}
