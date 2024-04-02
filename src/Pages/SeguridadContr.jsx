import React, { useRef } from 'react';
import Alerta from '../components/Alerta';

export default function SeguridadContr() {
  const alertaRef = useRef(null);

  const handleClick = () => {
    alertaRef.current.mostrarAlerta();
  };

  return (
    <div>
      <h1>Hola</h1>
      <button onClick={handleClick} className="btn btn-primary">Copiar</button>
      <Alerta estilo='danger' mensaje='Voila' ref={alertaRef} />
    </div>
  );
}
