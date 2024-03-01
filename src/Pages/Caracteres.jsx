import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Caracteres() {
  const [inputText, setText] = useState('')
  const [palabra, setPalabra] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    //separa en una array la cadena por espacios en blanco (split)
    const palabras = inputText.trim().split(/\s+/)
    //elimina espacios en blanco, compara el valor y tipo.
    setPalabra(inputText.trim() === '' ? 0 : palabras.length)
    setChar(inputText.length)
  }, [inputText])

  const cambiante = (e) => {
    setText(e.target.value)
  };

  return (
    <>
      <div id='background'>
        <Navbar />
        <div className='container-fluid'>
          <div className='text-center titulos'>
            <h1><i className='bx bx-file-find bx-flashing-hover bx-lg' /> Contador de Caracteres</h1>
            <br />
          </div>

          <div className='container'>
            <div className='text-center'>
              <textarea id='palabras' className='form-control' rows="8" value={inputText} onChange={cambiante} />
            </div>
            <div className='text-center'>
              <br />
              <h3 style={{ color: 'white' }}>Palabras: {palabra} | Caracteres: {char}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}