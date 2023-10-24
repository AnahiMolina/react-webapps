import { useContext } from 'react'
import { ComponentesContext } from '../Context/ComponentesContext'

export default function ComponenteA() {

    const {Informacion, setInformacion } = useContext(ComponentesContext)

    const agregar =()=>{
        setInformacion("Esto viene del componente A")
    }

    return (
        <div>
            <h1>Componente A</h1>
            <p>{Informacion}</p>
            <button onClick={agregar} className='btn btn-successs'>Agregar informacion</button>
        </div>
    )
}
