import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Await, json } from 'react-router-dom';

export default function Clima() {
        const [dato, setDato] = useState('');
        const [temp,setTemp] = useState ('');
        const [desc, setDesc] = useState ('');
        const [tmax,setTmax] = useState ('');
        const [tmin,setTmin] = useState ('')
      
        useEffect(() => {
          fetch('https://weather-api99.p.rapidapi.com/weather?city=teziutlan',
            {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '1ff5db47e1mshd8979973b83c92ap1a7067jsn39c2272184df',
                'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
              }
            })
      
            .then(response => {
              if (!response.ok) {
                throw new Error
                  ('No se pudo obtener los datos de la API');
              } return response.json();})
      
            .then(data => { 
              setDato(data.name);
              setTemp(data.main.feels_like);
              setDesc(data.weather.description);
              setTmax(data.main.temp_max);
              setTmin(data.main.temp_min);
             })
            .catch(error => { console.error('Error:', error); });
        }, []);

    return (
        <>
            <Navbar />
            <div id='backClima' className='container'>
                <div className='text-center'>
                    <h1>Clima</h1>
                    <i className='bx bx-sun bx-flashing bx-lg'></i>
                </div>

                <div id='clima' className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="card">
                                <h1>{/*{dato}*/}h</h1>
                                <p id='grados'>{/*{temp}*/} ºK</p>
                                <h5>Estado{/*{desc}*/}</h5>
                                <p>Temperatura Máxima: {/*{tmax}*/}ºK</p>
                                <p>Temperatura Minima: {/*{tmin}*/} ºK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
