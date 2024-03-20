import React from 'react';
import Day from './Day';

const Forecast = ({forecast}) => {
return ( 
    < div  >
      <div className='wheather-line' style={{marginTop: '5px', fontSize: '10px'}}>
            <span className="first">Time</span>
            <span className="third"> Temp &deg; C</span>
            <span className="fourth">Precip. mm</span>
            <span className="fifth">Wind(gust) m/s</span>
        </div>
        <div className='scroll' style={{height: '365px'}}>
   { forecast.forecast?.forecastday.map((d, i)=>{ return <Day key={i} day={d}/>})}
        </div>
     </div>)
} 

export default Forecast