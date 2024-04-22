import Navbar from '../components/Navbar'

export default function Contenedor(props) {
  return (
    <div className='background'>
      <Navbar />
      <div className='container-md contenedor' id={props.clase}>
        <div className='text-center titulos'>
          <h1>
            <i className={props.icono} /> {props.titulo}
          </h1>
        </div>
        {props.children}
      </div>
    </div>
  )
}
