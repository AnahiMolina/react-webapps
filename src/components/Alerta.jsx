import React, { useRef } from 'react'

export default React.forwardRef(function Alerta(props, ref) {
  const alertaRef = useRef(null)

  const mostrarAlerta = () => {
    const appendAlert = (message, type) => {
      const alertElement = document.createElement('div');
      alertElement.className = `alert alert-${type} alert-dismissible`;
      alertElement.innerHTML = `
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      alertaRef.current.appendChild(alertElement);
    }

    appendAlert(props.mensaje, props.estilo);
  }

  React.useImperativeHandle(ref, () => ({
    mostrarAlerta
  }))

  return (
    <div ref={alertaRef}></div>
  )
})
