import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'

export default function ToDo() {
  const lista = localStorage.getItem('tareas')
  const [tareas, setTareas] = useState(JSON.parse(lista) || [])
  const input = useRef()
  const borrar = useRef()


  const agregar_tarea = (e) => {
    let texto = input.current.value
    if (texto.length != '') {
      setTareas([...tareas, texto])
      input.current.value = ''
      input.current.focus()
      localStorage.setItem('tareas', JSON.stringify([...tareas, texto]))
    }
  }


  const limpiar_tareas = (e) => {
    localStorage.clear()
    setTareas([])
  }


  const eliminar_tarea = (e) => {
    let lista = tareas.filter((tarea, index) => {
      return index != e
    })
    setTareas(lista)
    localStorage.setItem('tareas', JSON.stringify(lista))
  }

  const editar = (e) => {
    
  }


  return (
    <>
      <Navbar />
      <div id='background' className='container-fluid-sm'>
        <div className='text-center titulos'>
          <h1><i className='bx bx-task bx-tada-hover bx-lg'/> Lista de tareas</h1>
          <br />
        </div>

        <div id='tareas' className='container-md'>
          <div className='row mt-3'>
            <div className='col-3'>
              <textarea id='tarea_nueva' placeholder='Nueva tarea...' ref={input} rows={3} className='form-control' />
              <button onClick={agregar_tarea} className='btn btn-secondary w-100 mt-3 operacion'>
                <i className='bx bx-plus' /> Agregar
              </button>
              <button onClick={limpiar_tareas} className='btn btn-secondary w-100 mt-3 numero'>
                <i className='bx bx-trash' /> Eliminar Todo
              </button>
            </div>
            <div className='col-9'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Tarea</th>
                    <th className='w-25'>Editar</th>
                    <th className='w-25'>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {tareas.length == 0 ?
                    <tr>
                      <td className='text-center text-secondary' colSpan='3'>No hay tareas</td>
                    </tr>
                    :
                    tareas.map((tarea, index) =>
                      <tr key={index}>
                        <td>{tarea}</td>

                        <td>
                          <button className='btn btn-primary'>
                            <i className='bx bx-pencil' />
                          </button>
                        </td>

                        <td>
                          <button onClick={e => eliminar_tarea(index)} className='btn btn-warning'>
                            <i className='bx bx-trash' />
                          </button>
                        </td>

                      </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
