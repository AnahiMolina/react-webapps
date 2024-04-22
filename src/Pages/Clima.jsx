import React, { useEffect, useState } from 'react';
import Contenedor from '../Layouts/Contenedor';

export default function Clima() {
  const [ciudad, setCiudad] = useState('Teziutlán')
  const [temp, setTemp] = useState('0')
  const [tmax, setTmax] = useState('0')
  const [tmin, setTmin] = useState('0')
  const [flike, setFlike] = useState('0')
  const [desc, setDesc] = useState('Sin datos')
  const [icono, setIcono] = useState('bi bi-exclamation-triangle')
  const [mostrarInput, setMostrarInput] = useState(false);

  /* useEffect(() => {
    fetch('https://open-weather13.p.rapidapi.com/city/teziutlan/EN', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos de la API');
        }
        return response.json();
      })
      .then(data => {
        setCiudad(data.name)
        setTemp(`${Math.ceil((data.main.temp - 32) * (5 / 9))} °C`)
        setTmax(`${Math.ceil((data.main.temp_max - 32) * (5 / 9))} °C`)
        setTmin(`${Math.ceil((data.main.temp_min - 32) * (5 / 9))} °C`)
        setFlike(`${Math.ceil((data.main.feels_like - 32) * (5 / 9))} °C`)
        setDesc(data.weather[0].description)

        let icono = '';
        switch (desc) {
          case 'light rain':
            icono = 'bi bi-cloud-drizzle';
            break;
          case 'scattered clouds':
            icono = 'bi bi-cloud-haze2'
            break;
          case 'overcast clouds':
            icono = 'bi bi-clouds';
            break
          case 'broken clouds':
            icono = 'bi bi-cloud-sun'
            break
          case 'clear skyligth rain':
            icono = 'bi bi-cloud-hail'
            break
          case 'clear sky':
            icono = 'bi bi-brightness-alt-high'
            break
          default:
            icono = 'bi bi-cloud-sun';
            break;
        }
        setIcono(icono);
      })
  }, []) */

  return (
    <>
      <Contenedor titulo='Clima' icono='bi bi-cloud-sun' clase='clima'>
        <div className='row'>
          <div className="d-flex justify-content-center">
            <div className='card p-3'>
              <div className="card-body">
                {mostrarInput ? (
                  <form className='form'>
                    <input type='text' value={ciudad} onChange={(event) => setCiudad(event.target.value)} required />
                    <label className='lbl-nombre'>
                      <span className='text-nomb'><i className='bi bi-search' /> Buscar Ciudad...</span>
                    </label>
                  </form>
                ) : (
                  <h2 className="card-title" onClick={() => setMostrarInput(true)}>
                    {ciudad || <><i className='bi bi-search' />Buscar Ciudad...</>}
                  </h2>
                )}
                <hr />
                <div className='row'>
                  <div className='col-sm-6'>
                    <h5>{desc}</h5>
                    <p className='grados'>{temp}</p>
                    <i id='icono' className={icono}></i>
                    <hr />
                    <p>Temperatura Máxima: {tmax}</p>
                  </div>
                  <div className="col-sm-6">
                    <h5>Sensación Térmica:</h5>
                    <p className='grados'>{flike}</p>
                    <i id='icono' className='bi bi-thermometer-sun'></i>
                    <hr />
                    <p>Temperatura Mínima: {tmin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  )
}

