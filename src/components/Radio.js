import React, { useContext, useState } from "react";
import MainContext from "../context/MainContext";

function Radio() {
  const [apperance, setApperance] = useState('');
  const [verifyResult, setVerifyResult] = useState('')
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

  }

  return (
    <div className={`radiobox ${format === 'Invalid' ? 'invalid' : ''}`} onChange={onChangeValue}> Format:
      <input style={{ width: '15px' }} type="radio" value="Raw" name="format" checked={apperance === "Raw"} onChange={onChangeValue} /> Raw
      <input style={{ width: '15px' }} type="radio" value="Boring" name="format" checked={apperance === "Boring"} onChange={onChangeValue} /> Boring
      <input style={{ width: '15px' }} type="radio" value="Invalid" name="format" checked={apperance === "Invalid"} onChange={onChangeValue} /> Absolutely Perfect
    </div>

  );
}

export default Radio;