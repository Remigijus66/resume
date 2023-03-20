import React, { useContext, useState } from "react";
import MainContext from "../context/MainContext";

function Radio() {
  const [apperance, setApperance] = useState('');
  const { format, setFormat } = useContext(MainContext)



  function onChangeValue(event) {
    setApperance(event.target.value);
    if (event.target.value === 'Raw') {
      setFormat('Raw')
    }
    if (event.target.value === 'Boring') {
      setFormat('Boring')
    }
    if (event.target.value === 'Invalid') {
      setFormat('Invalid')
    }
    if (event.target.value === 'Colorful') {
      setFormat('Colorful')
    }
    if (event.target.value === 'Illiterating') {
      setFormat('Illiterating')
    }

  }

  return (
    <div className={`radiobox ${format === 'Invalid' ? 'invalid' : ''}`} onChange={onChangeValue}>
      <strong>Select format</strong>
      <div className="radio-button">
        <input type="radio" value="Raw" name="format" checked={apperance === "Raw"} onChange={onChangeValue} /> <p>Raw</p>
      </div>
      <div className="radio-button">
        <input type="radio" value="Boring" name="format" checked={apperance === "Boring"} onChange={onChangeValue} />
        <p> Boring </p>
      </div>
      <div className="radio-button">
        <input type="radio" value="Colorful" name="format" checked={apperance === "Colorful"} onChange={onChangeValue} /> <p>Colorful </p>
      </div>
      <div className="radio-button">
        <input type="radio" value="Illiterating" name="format" checked={apperance === "Illiterating"} onChange={onChangeValue} /> <p>Illiterating</p>
      </div>
      <div className="radio-button">
        <input type="radio" value="Invalid" name="format" checked={apperance === "Invalid"} onChange={onChangeValue} /> <p>Absolutely Perfect</p>
      </div>
    </div>

  );
}

export default Radio;