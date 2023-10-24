import React, { useContext } from 'react'
import { ComponentesContext } from '../Context/ComponentesContext'

export default function Boton() {

  const {setInformacion} = useContext(ComponentesContext)

  return (
    <div>
      <div className="col-12">
        <button onClick={e => setInformacion('')} className='btn btn-secondary w-100'>Click</button>
      </div>
    </div>
  )
}
