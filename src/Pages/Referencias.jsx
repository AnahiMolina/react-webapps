import {useState,useEffect,useRef} from 'react'
import Navbar from '../components/Navbar'

export default function Referencias() {
    const referencia = useRef()
    const referencia2 = useRef()
    const clic = useRef()
    
    const AldarClick = (event) =>{
        alert(referencia.current.value)
        alert(referencia2.current.value)
    }
  return (
    <div>
        <Navbar />
        <div className='container mt-5'>
            <p>Contador</p>
            <input ref={referencia} type='number' className='form-control'/>
            <br />
            <input ref={referencia2} type='number' className='form-control'/>
            <br />
            <button className='btn btn-danger' onClick={AldarClick}> Incrementar</button>
            <h1></h1>
        </div>
    </div>
  )
}
