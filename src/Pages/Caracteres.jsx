import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Caracteres() {
  const [inputText, setText] = useState('')
  const [word, setWord] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    const words = inputText.trim().split(/\s+/)
    setWord(words.length)
    setChar(inputText.length)
  }, [inputText])

  const cambiante = (e) => {
    setText(e.target.value)
  };

  return (
    <>
      <Navbar />
      <div id='background' className='container-fluid'>
        <div className='text-center titulos'>
          <h1>Contador de Caracteres</h1>
          <br />
        </div>

        <div className='container'>
          <div className='text-center'>
            <textarea id='Palabras' className='form-control' rows="4" value={inputText} onChange={cambiante} />
          </div>
          <div className='text-center'>
            <br />
            <h3>Palabras:{word} Caracteres:{char}</h3>
          </div>
        </div>
      </div>
    </>
  )
}