import React, { useEffect, useState } from 'react';
import Contenedor from '../Layouts/Contenedor';

export default function Clima() {
  const [ciudad, setCiudad] = useState('Teziutlán')
  const [temp, setTemp] = useState('20')
  const [tmax, setTmax] = useState('25')
  const [tmin, setTmin] = useState('17')
  const [flike, setFlike] = useState('23')
  const [desc, setDesc] = useState('Soleado')
  const [icono, setIcono] = useState('x')
  const [mostrarInput, setMostrarInput] = useState(false);

  useEffect(() => {
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
            icono = 'bx bx-cloud-light-rain';
            break;
          case 'scattered clouds':
            icono = 'bx bxl-soundcloud'
            break;
          case 'overcast clouds':
            icono = 'bx bxs-cloud';
            break
          case 'broken clouds':
            icono = 'fa-solid fa-cloud-sun'
            break
          case 'clear skyligth rain':
            icono = 'fa-solid fa-sun'
            break
          case 'clear sky':
            icono = 'fa-regular fa-sun'
            break
          default:
            icono = 'bx bx-question-mark';
            break;
        }
        setIcono(icono);
      })
  }, [])


  return (
    <>
      <Contenedor titulo='Clima' icono='bx bx-sun bx-flashing-hover bx-lg' clase='clima'>
        <div className='row'>
          <div className="d-flex justify-content-center">
            <div className='card p-3'>
              <div className="card-body">
                {mostrarInput ? (
                  <form className='form'>
                    <input type='text' value={ciudad} onChange={(event) => setCiudad(event.target.value)} required />
                    <label className='lbl-nombre'>
                      <span className='text-nomb'><i className='bx bx-search-alt' /> Buscar Ciudad...</span>
                    </label>
                  </form>
                ) : (
                  <h2 className="card-title" onClick={() => setMostrarInput(true)}>
                    {ciudad || <><i className='bx bx-search-alt' />Buscar Ciudad...</>}
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
                    <i id='icono' className='bx bx-wind'></i>
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

