import './App.css';
import { useEffect, useState } from "react";
import MainContext from "./context/MainContext";
import Resume from './components/Resume';
import Canvas from './components/Canvas';
import Meteo from './components/Meteo/Meteo';
// import ComboBox from './components/Meteo/TestMUI';
// import GoogleMaps from './components/Meteo/Place';
import Clouds from './components/Clouds';
import Myself from './components/Myself';
import GradientTransitionComponent from './components/Gradients'
import GoogleMaps from './components/Meteo/Place';




function App() {
 
  const [format, setFormat] = useState('')
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(null);
  const [lat, setLat] =useState('')
const [long, setLong] =useState('')
  const states = {
    format, setFormat, 
    inputValue, setInputValue, 
    value, setValue, 
    lat, setLat,
    long, setLong
  }


  return (
    // <div className="App">

    <>
  
  

   
      <MainContext.Provider value={states}>

    

   < GradientTransitionComponent />

        {/* <Clouds/> */}

        <Resume />
       {/* { format === '' &&  <Myself/>} */}
        { format === '' &&  <Meteo />}
        {/* { format === '' &&  <GoogleMaps />} */}
        {/* <ComboBox/> */}
      </MainContext.Provider>
   
    </>
  );
}

export default App;
