import React from 'react'
import { Link } from 'react-router-dom'

export default function Tarjetas(props) {
  return (
    <>
      <div className="card p-1 m-3">
        <Link to={props.link}>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              &nbsp;&nbsp;{props.nombre}
            </div>
            <hr />
            <div className="d-flex justify-content-center">
              <h1>
                <i className={props.icono} />
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
