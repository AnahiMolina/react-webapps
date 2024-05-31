import React, { useRef, useState } from 'react'
import Contenedor from '../Layouts/Contenedor'

export default function ToDo() {
  const lista = localStorage.getItem('tareas')
  const [tareas, setTareas] = useState(JSON.parse(lista) || [])
  const input = useRef()
  const [editingIndex, setEditingIndex] = useState(null)
  const [editingText, setEditingText] = useState('')

  const agregar_tarea = () => {
    let texto = input.current.value
    if (texto.length !== '') {
      setTareas([...tareas, texto])
      input.current.value = ''
      input.current.focus()
      localStorage.setItem('tareas', JSON.stringify([...tareas, texto]))
    }
  }

  const limpiar_tareas = () => {
    localStorage.clear()
    setTareas([])
  }

  const eliminar_tarea = (index) => {
    let lista = tareas.filter((tarea, i) => i !== index)
    setTareas(lista)
    localStorage.setItem('tareas', JSON.stringify(lista))
  }

  const editar_tarea = (index) => {
    setEditingIndex(index)
    setEditingText(tareas[index])
  }

  const guardar_edicion = () => {
    let lista = tareas.map(
      (tarea, index) => index === editingIndex ? editingText : tarea
    )
    setTareas(lista)
    localStorage.setItem('tareas', JSON.stringify(lista))
    setEditingIndex(null)
    setEditingText('')
  }

  return (
    <>
      <Contenedor titulo='Lista de tareas' icono='bi bi-check2-circle' clase='tareas'>
        <div className='row'>
          
          <div className='col-sm-4'>
            <textarea id='tarea_nueva' placeholder='Nueva tarea...' ref={input} rows={5} className='form-control' />

            <div className="row">
              <div className="col-md-6">
                <button onClick={agregar_tarea} className='btn btn-tecla w-100 mt-3'>
                  <i className='bi bi-plus' /> Agregar Tarea
                </button>
              </div>
              <div className="col-md-6">
                <button onClick={limpiar_tareas} className='btn btn-tecla w-100 mt-3 mb-3'>
                  <i className='bi bi-trash3' /> Eliminar Todo
                </button>
              </div>
            </div>
          </div>

          <div className='col-sm-8'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Tarea</th>
                  <th className='w-25'>Editar</th>
                  <th className='w-25'>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {tareas.length === 0 ?
                  <tr>
                    <td className='text-center text-secondary' colSpan='3'>No hay tareas</td>
                  </tr>
                  :
                  tareas.map((tarea, index) =>
                    <tr key={index}>
                      <td>
                        {editingIndex === index ?
                          <input 
                            type='text' 
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            className='form-control'
                          />
                          :
                          tarea
                        }
                      </td>
                      <td>
                        {editingIndex === index ?
                          <button onClick={guardar_edicion} className='btn btn-success'>
                            <i className='bi bi-check' />
                          </button>
                          :
                          <button onClick={() => editar_tarea(index)} className='btn btn-primary'>
                            <i className='bi bi-pencil' />
                          </button>
                        }
                      </td>
                      <td>
                        <button onClick={() => eliminar_tarea(index)} className='btn btn-danger'>
                          <i className='bi bi-trash3' />
                        </button>
                      </td>
                    </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </Contenedor>
    </>
  )
}
