import React, { useState, useEffect, useContext } from 'react';
import MainContext from "../../context/MainContext"
import axios from 'axios';
import Maps from './Place';
import CenteredTabs from './Tabs';
import Forecast from './Forecast';

const Meteo = () => {
  const { lat, setLat, long, setLong } = useContext(MainContext)
  const [tabValue, setTabValue] = useState('Today')
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecast, setForecast] = useState({});
  const [place, setPlace] = useState('')

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (pos) => {
      const crd = pos.coords;
      setLat(crd.latitude);
      setLong(crd.longitude)
    }

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])

  useEffect(() => {
    getW(lat, long)
    getForecast(lat, long)
  }, [lat, long])

  const getW = async (latit, longit) => {
    // https://rapidapi.com/weatherapi/api/weatherapi-com
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${latit}, ${longit}` },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      setCurrentWeather(response.data)
      setPlace(response.data.location.name)
    } catch (error) {
      console.error(error);
    }
  }

  const getForecast = async (latid, longit) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: `${latid}, ${longit}`,
        days: 10
      },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      setForecast(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="meteo" >
      <Maps currentLocacion={place} sx={{
        borderRadius: '32px',
        padding: '50px', backgroundColor: 'green'
      }} />
      <div>
        <CenteredTabs value={tabValue} setValue={setTabValue} />
        {tabValue === 'Today' && <div className='today scroll'>
          <p>  {currentWeather.location?.localtime} </p>
          <div className='d-flex al-center j-around'>
            <img src={currentWeather.current?.condition.icon} alt="" />
            <p> {currentWeather.current?.condition.text} </p>
          </div>
          <div className='d-flex al-center j-around fd-column'>
            <p style={{ margin: '0px', fontSize: '50px' }}>  {currentWeather.current?.temp_c} &deg; </p>
            <p style={{ margin: '0px' }}>Feels like {currentWeather.current?.feelslike_c} &deg; </p>
          </div>
          <div className='d-flex al-center j-between' style={{ padding: '30px 5px' }} >
            <div>
              <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '18px' }}> Wind </p>
              <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '14px' }}> {currentWeather.current?.wind_dir} <span className='arrow' style={{ fontSize: '12px', marginLeft: '5px', color: 'red', transform: `rotate(${currentWeather.current?.wind_degree}deg) scale(2)` }} >&darr;</span> </p>
              <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '14px' }}>
                {(currentWeather?.current?.wind_kph * 0.277777778).toFixed(1)}({((currentWeather?.current?.gust_kph * 0.277777778).toFixed(1))}) m/s
              </p>
            </div>
            <div>
              {(currentWeather.current?.precip_mm === 0) && <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '16px' }} >No Precipitation</p>}
              {(currentWeather.current?.precip_mm !== 0) && <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '16px' }} >Precipitation</p>}
              {(currentWeather.current?.precip_mm !== 0) && <p className='d-flex  j-around' style={{ margin: '0px', fontSize: '16px' }} >{currentWeather?.current?.precip_mm} mm</p>}
            </div>
          </div>
        </div>}
        {tabValue === 'Forecast' && <Forecast forecast={(forecast)} />}
      </div>
    </div>
  )
}

export default Meteo