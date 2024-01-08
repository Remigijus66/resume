import './App.css';
import { useEffect, useState } from "react";
import MainContext from "./context/MainContext";
import Resume from './components/Resume';
import Canvas from './components/Canvas';
import Meteo from './components/Meteo';
import Clouds from './components/Clouds';
import Myself from './components/Myself';
import GradientTransitionComponent from './components/Gradients'




function App() {
 
  const [format, setFormat] = useState('')
  const states = {
    format, setFormat
  }


  return (
    // <div className="App">

    <>
  
  

   
      <MainContext.Provider value={states}>

    

   < GradientTransitionComponent />

        {/* <Clouds/> */}

        <Resume />
       { format === '' &&  <Myself/>}
        {/* { format === '' &&  <Meteo />} */}
     
      </MainContext.Provider>
   
    </>
  );
}

export default App;
