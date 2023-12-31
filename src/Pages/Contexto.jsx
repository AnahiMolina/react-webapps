import React from 'react'
import Navbar from '../components/Navbar'
import ComponenteA from '../components/ComponenteA'
import ComponenteB from '../components/ComponenteB'
import { ComponentesProvider } from '../Context/ComponentesContext'
import Boton from '../components/Boton'
import Prueba from '../components/Prueba'


export default function Contexto() {
    return (
        <div>
            <Prueba />
            <div className='container mt-5'>
                <ComponentesProvider >
                    <div className="row">
                        <Boton />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <ComponenteA />
                        </div>
                        <div className='col-6'>
                            <ComponenteB />
                        </div>
                    </div>
                </ComponentesProvider>
            </div>
        </div >
    )
}

