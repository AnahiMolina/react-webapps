import React, { useEffect, useState } from 'react';
import Contenedor from '../Layouts/Contenedor';

export default function Clima() {
  const [ciudad, setCiudad] = useState('México')
  const [ciudadBusqueda, setCiudadBusqueda] = useState('México')
  const [temp, setTemp] = useState('0')
  const [tmax, setTmax] = useState('0')
  const [tmin, setTmin] = useState('0')
  const [flike, setFlike] = useState('0')
  const [humedad, setHumedad] = useState('0')
  const [descApi, setDescApi] = useState('Sin datos')
  const [desc, setDesc] = useState('')
  const [icono, setIcono] = useState('bi bi-exclamation-triangle')
  const [mostrarInput, setMostrarInput] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  //useEffect(() => {obtenerClima(ciudadBusqueda)}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ciudadBusqueda.trim()) {
      obtenerClima(ciudadBusqueda)
    }
  };

  const obtenerClima = (ciudadParam) => {
    setCargando(true)
    setError('')

    const ciudadFormateada = ciudadParam.toLowerCase().trim().replace(/\s+/g, '-')

    fetch(`${import.meta.env.VITE_WEATHER_API_URL}/${ciudadFormateada}/EN`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ciudad no encontrada o error en la API');
        }
        return response.json();
      })
      .then(data => {
        setCiudad(data.name)
        setTemp(Math.round((data.main.temp - 32) / 1.8))
        setTmax(Math.round((data.main.temp_max - 32) / 1.8))
        setTmin(Math.round((data.main.temp_min - 32) / 1.8))
        setFlike(Math.round((data.main.feels_like - 32) / 1.8))
        setHumedad(data.main.humidity)

        const descripcionApi = data.weather[0].description;
        setDescApi(descripcionApi)
        let iconoSeleccionado = ''
        let descripcion = ''

        switch (descripcionApi) {
          case 'light rain':
            iconoSeleccionado = 'bi bi-cloud-drizzle'
            descripcion = 'Lluvia Ligera'
            break;
          case 'scattered clouds':
            iconoSeleccionado = 'bi bi-cloud-haze2'
            descripcion = 'Nubes Dispersas'
            break;
          case 'overcast clouds':
            iconoSeleccionado = 'bi bi-clouds'
            descripcion = 'Cielo Nublado'
            break;
          case 'broken clouds':
            iconoSeleccionado = 'bi bi-cloud-sun'
            descripcion = 'Nubes Dispersas'
            break;
          case 'clear sky':
            iconoSeleccionado = 'bi bi-brightness-alt-high'
            descripcion = 'Cielo Despejado'
            break;
          case 'few clouds':
            iconoSeleccionado = 'bi bi-cloud-sun'
            descripcion = 'Pocas Nubes'
            break;
          case 'moderate rain':
            iconoSeleccionado = 'bi bi-cloud-rain'
            descripcion = 'Lluvia Moderada'
            break;
          case 'heavy rain':
            iconoSeleccionado = 'bi bi-cloud-rain-heavy'
            descripcion = 'Lluvia Intensa'
            break;
          default:
            iconoSeleccionado = 'bi bi-cloud-sun';
            descripcion = descripcionApi;
            break;
        }

        setIcono(iconoSeleccionado);
        setDesc(descripcion);
        setCargando(false);
        setMostrarInput(false);
      })
      .catch(err => {
        console.error('Error al obtener el clima:', err);
        setError('No se pudo obtener el clima. Verifica el nombre de la ciudad.');
        setCargando(false);
      });
  };

  return (
    <>
      <Contenedor titulo='Clima' icono='bi bi-cloud-sun' clase='clima'>
        <div className='row'>
          <div className="d-flex justify-content-center">
            <div className='card p-3'>
              <div className="card-body">
                {mostrarInput ? (
                  <form className='form' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      value={ciudadBusqueda}
                      onChange={(event) => setCiudadBusqueda(event.target.value)}
                      placeholder="Buscar ciudad..."
                      disabled={cargando}
                      required
                    />
                    <label className='lbl-nombre'>
                      <span className='text-nomb'>
                        <i className='bi bi-search' /> Buscar Ciudad...
                      </span>
                    </label>
                    <button type="submit" className="btn btn-primary mt-2" disabled={cargando}>
                      {cargando ? 'Buscando...' : 'Buscar'}
                    </button>
                  </form>
                ) : (
                  <h1 className="card-title" onClick={() => setMostrarInput(true)} style={{ cursor: 'pointer' }}>
                    {ciudad || <><i className='bi bi-search' /> Buscar Ciudad...</>}
                  </h1>
                )}

                {error && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error}
                  </div>
                )}

                <hr />

                {cargando ? (
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Cargando...</span>
                    </div>
                  </div>
                ) : (
                  <div className='row'>
                    <div className='col-sm-7'>
                      <h3>{desc}</h3>
                      <i id='icono' className={icono}></i>
                    </div>
                    <div className="col-sm-5">
                      <h3 className='grados'>{temp}°C</h3>
                    </div>
                    <hr />
                    <div className="col-6">
                      <p>Temperatura Máxima: {tmax}°C</p>
                      <p>Temperatura Mínima: {tmin}°C</p>
                    </div>
                    <div className="col-6">
                      <p>Sensación Térmica: {flike}°C</p>
                      <p>Humedad: {humedad}%</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  )
}