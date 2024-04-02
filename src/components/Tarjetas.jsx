import React from 'react'
import { Link } from 'react-router-dom'

export default function Tarjetas(props) {
  return (
    <>
      <div className="card">
        <Link to={props.link}>
          <div className="card-body">
            <div className='center text-center'>
              {props.nombre}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
