import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Colores() {
  const [color, setColor] = useState('#5d6465')

  const CambiarColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <Navbar />
      <div className='container-fluid p-0'>
        <div style={{ backgroundColor: color }}>
          <div className='text-center titulos'>
            <h1><i className='bx bxs-color-fill bx-flashing-hover bx-lg' /> Colores</h1>
            <h1>{color}</h1>
          </div>
          <div className='colores'>
            <input type='color' value={color} onChange={CambiarColor} />
          </div>
        </div>
      </div> 
    </>
  )
}
