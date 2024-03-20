import './App.css';
import { useState } from "react";
import MainContext from "./context/MainContext";
import Radio from './components/Radio';
import Myself from './components/Myself';
import GradientTransitionComponent from './components/Gradients'

function App() {
  const [meteo, setMeteo] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [showResume, setShowResume] = useState(false)
  const [value, setValue] = useState(null);
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const states = {
    inputValue, setInputValue,
    value, setValue,
    lat, setLat,
    long, setLong,
    meteo, setMeteo,
    showResume, setShowResume
  }

  return (
    <>
      <MainContext.Provider value={states}>
        < GradientTransitionComponent />
        <Radio />
        <Myself />
      </MainContext.Provider>
    </>
  );
}

export default App;
