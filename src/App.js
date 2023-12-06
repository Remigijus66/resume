import './App.css';
import { useState } from "react";
import MainContext from "./context/MainContext";
import Resume from './components/Resume';
import Canvas from './components/Canvas';
import Meteo from './components/Meteo';

function App() {

  const [format, setFormat] = useState('')
  const states = {
    format, setFormat
  }
  return (
    <div className="App">
      
      <MainContext.Provider value={states}>
    
    
   

        <Resume />
        <Meteo/>
        <div className='name-tag'> <h2>Remigijus Bartaška </h2> 
    <h2> Front end developer </h2>
    </div>


    
      </MainContext.Provider>
    </div >
  );
}

export default App;
