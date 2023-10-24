import { useContext } from 'react'
import { ComponentesContext } from '../Context/ComponentesContext'

export default function ComponenteB() {

    const {Informacion, setInformacion } = useContext(ComponentesContext)

    const agregar =()=>{
        setInformacion("Infromacion del componente B")
    }

    return (
        <div>
            <h1>Componente B</h1>
            <p>{Informacion}</p>
            <button onClick={agregar} className='btn btn-successs'>Agregar informacion</button>
        </div>
    )
}
