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

{/* <Canvas/> */}
        <Resume />
        <Meteo/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </MainContext.Provider>
    </div >
  );
}

export default App;
