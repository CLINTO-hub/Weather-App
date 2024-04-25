import React from 'react'
import './Wheater.css'

import search_icon from '../Assests/search.png'
import clear_icon from '../Assests/clear.png'
import cloud_icon from '../Assests/cloud.png'
import humidity_icon from '../Assests/humidity.png'
import wind_icon from '../Assests/wind.png'

const Wheater = () => {

  
  return (
    <div className='container'>
      <div className="top-bar">
        <input type='text' className='cityInput' placeholder='Search'/>
        <div className='search-icon'>
          <img src={search_icon} alt=''/>
        </div>
      </div>

      <div className='weather-image'>
        <img src={cloud_icon} alt=''/>
      </div>
      <div className='weather-temp'>24°C</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt=''className='icon'/>
          <div className="data">
            <div className="humidity-percent">60%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt='' className='icon'/>
          <div className='data'>
            <div className='humidity-percent'>18 km/h</div>
            <div className='text'>Wind speed</div>
          </div>
        </div>

      </div>

    </div>


  
  )
}

export default Wheater