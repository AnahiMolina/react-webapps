import React, { useState, useEffect } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function Caracteres() {
  const [inputText, setText] = useState('')
  const [palabra, setPalabra] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    const palabras = inputText.trim().split(/\s+/)
    setPalabra(inputText.trim() === '' ? 0 : palabras.length)
    setChar(inputText.length)
  }, [inputText])

  const cambiante = (e) => {
    setText(e.target.value)
  };

  return (
    <>
      <Contenedor titulo='Contador de Caracteres' icono='bi bi-pen' clase=''>
        <div className='text-center'>
          <textarea id='palabras' className='form-control' rows="8" value={inputText} onChange={cambiante} />
          <br />
          <h3>Palabras: {palabra} | Caracteres: {char}</h3>
        </div>
      </Contenedor>
    </>
  )
}