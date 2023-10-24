import React from 'react'
import Navbar from '../components/Navbar'

export default function Storage() {
    const agregar = (e)=>{
        localStorage.setItem('nombre','Alma')
        localStorage.setItem('apellido','Molina')
    }

    const consultar = (e)=>{
        let  nombre = localStorage.getItem('nombre')
        let  apellido = localStorage.getItem('apellido')
        alert(nombre + ' ' + apellido)
    }


    const eliminar = (e)=>{
        localStorage.removeItem('apellido')
    }

    const limpiar =(e)=>{
        localStorage.clear()
    }

    const actualizar =(e)=>{
        localStorage.setItem('nombre','Ana')
    }

  return (
    <div>
        <Navbar />
        <div className='container-fluid'>
            <button onClick={agregar} className='btn btn-warning mt-3'>Agregar informacion</button>
            <button onClick={consultar} className='btn btn-warning mt-3'>Consultar informacion</button>
            <button onClick={eliminar} className='btn btn-warning mt-3'>Eliminar informacion</button>
            <button onClick={limpiar} className='btn btn-warning mt-3'>Limpiar informacion</button>
            <button onClick={actualizar} className='btn btn-warning mt-3'>Actualizar informacion</button>
        </div>
    </div>
  )
}
