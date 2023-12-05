import React, { useContext, useState, useEffect } from 'react';
import window from '../Documents/window.png';
import axios from 'axios';



const Meteo = () => {
  const [currentWeather, setCurrentWeather] = useState({})
  //   const [currentWeather, setCurrentWeather] = useState({
  //     "location": {
  //         "name": "Vilnius",
  //         "region": "Vilniaus Apskritis",
  //         "country": "Lithuania",
  //         "lat": 54.73,
  //         "lon": 25.42,
  //         "tz_id": "Europe/Vilnius",
  //         "localtime_epoch": 1701636575,
  //         "localtime": "2023-12-03 22:49"
  //     },
  //     "current": {
  //         "last_updated_epoch": 1701636300,
  //         "last_updated": "2023-12-03 22:45",
  //         "temp_c": -9.0,
  //         "temp_f": 15.8,
  //         "is_day": 0,
  //         "condition": {
  //             "text": "Mist",
  //             "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
  //             "code": 1030
  //         },
  //         "wind_mph": 3.8,
  //         "wind_kph": 6.1,
  //         "wind_degree": 170,
  //         "wind_dir": "S",
  //         "pressure_mb": 1013.0,
  //         "pressure_in": 29.91,
  //         "precip_mm": 0.0,
  //         "precip_in": 0.0,
  //         "humidity": 92,
  //         "cloud": 75,
  //         "feelslike_c": -12.6,
  //         "feelslike_f": 9.3,
  //         "vis_km": 5.0,
  //         "vis_miles": 3.0,
  //         "uv": 1.0,
  //         "gust_mph": 8.5,
  //         "gust_kph": 13.6
  //     }
  // })

  const [place, setPlace] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  // const [place, setPlace] = useState('Naujoji Vilnia')
  // const [latitude, setLatitude] = useState(54.686955704500896)
  // const [longitude, setLongitude] = useState(25.291073654176536)


  useEffect(() => {
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(function (position) {
        // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      }, function (error) {
        // Handle errors, if any
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
          default:
            //do nothing;
            break;
        }
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
    setTimeout(() => {
      getW();
    }, 500);

  }, [])

  const getW = async () => {
    // https://rapidapi.com/weatherapi/api/weatherapi-com
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setCurrentWeather(response.data)
      console.log(currentWeather)
      getPlace(latitude, longitude)
    } catch (error) {
      console.error(error);
    }

  }

  const getPlace = async (lat, long) => {
    console.log('place requested')
    const options = {
      method: 'GET',
      // url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/locations/54.7331+25.4160/nearbyPlaces',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${lat.toFixed(4)}${long >= 0 ? '+' : ''}${long.toFixed(4)}/nearbyPlaces`,
      params: {
        radius: '100',
        limit: '10'
      },
      headers: {
        'X-RapidAPI-Key': '4ea6492e0dmsha422720d6c5b0acp117504jsn61b4bf0cdd45',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log('response', response);
      console.log('response.data.data[0].name', response.data.data[0].name);
      setPlace(response.data.data[0].name);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="window-container">
        <p> {place},  {currentWeather.location?.localtime} </p>
        <p>Outside: {currentWeather.current?.condition.text} </p>
        <div className="window">
          <img src={window} alt="" />
          <img src={currentWeather.current?.condition.icon} alt="" className='window-view' />
        </div>

        <p style={{ marginTop: '-10px' }}> Temperature {currentWeather.current?.temp_c} &deg; </p>
        <p> Feels like {currentWeather.current?.feelslike_c} &deg; </p>
        <p> Wind m/s {(currentWeather?.current?.wind_kph * 0.277777778).toFixed(1)} ( {(currentWeather?.current?.gust_kph * 0.277777778).toFixed(1)}) <div className='arrow' style={{ marginLeft: '5px', color: 'red', transform: `rotate(${currentWeather.current?.wind_degree}deg) scale(2)` }} >&darr;</div> </p>
        {/* <button onClick={() => getW()}> Refresh</button> */}
      </div>



    </div>

  )
}

export default Meteo