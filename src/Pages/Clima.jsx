import React, { useEffect, useState } from 'react';
import Contenedor from '../Layouts/Contenedor';

export default function Clima() {
  const [ciudad, setCiudad] = useState('Teziutlán')
  const [temp, setTemp] = useState('0')
  const [tmax, setTmax] = useState('0')
  const [tmin, setTmin] = useState('0')
  const [flike, setFlike] = useState('0')
  const [descApi, setDescApi] = useState('Sin datos')
  const [desc, setDesc] = useState('')
  const [icono, setIcono] = useState('bi bi-exclamation-triangle')
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
        setTemp(Math.round((data.main.temp - 32) / 1.8))
        setTmax(Math.round((data.main.temp_max - 32) / 1.8))
        setTmin(Math.round((data.main.temp_min - 32) / 1.8))
        setFlike(Math.round((data.main.feels_like - 32) / 1.8))
        setDescApi(data.weather[0].description)

        let icono = '';
        switch (descApi) {
          case 'light rain':
            icono = 'bi bi-cloud-drizzle'
            setDesc('Lluvia Ligera')
            break;
          case 'scattered clouds':
            icono = 'bi bi-cloud-haze2'
            setDesc('Nubes Dispersas')
            break;
          case 'overcast clouds':
            icono = 'bi bi-clouds'
            setDesc('Cielo Nublado')
            break
          case 'broken clouds':
            icono = 'bi bi-cloud-sun'
            setDesc('Nubes Dispersas')
            break
          case 'clear skyligth rain':
            icono = 'bi bi-cloud-hail'
            setDesc('Cielo Despejado / lluvia ligera')
            break
          case 'clear sky':
            icono = 'bi bi-brightness-alt-high'
            setDesc('Cielo Despejado')
            break
          default:
            icono = 'bi bi-cloud-sun';
            setDesc(descApi)
            break;
        }
        setIcono(icono);
      })
  }, [])

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
                  <h1 className="card-title" onClick={() => setMostrarInput(true)}>
                    {ciudad || <><i className='bi bi-search' />Buscar Ciudad...</>}
                  </h1>
                )}
                <hr />
                <div className='row'>
                  <div className='col-sm-7'>
                    <h3>{desc}</h3>
                    <i id='icono' className={icono}></i>
                  </div>
                  <div className="col-sm-5">
                    <h3 className='grados'>{temp}°C</h3>
                    {/*  <p>Temperatura Mínima: {tmin}</p> */}
                  </div>
                  <div className="col-12">
                    <hr />
                    <p>Temperatura Máxima: {tmax}°C</p>
                    <p>Sensación Térmica: {flike}°C</p>
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

