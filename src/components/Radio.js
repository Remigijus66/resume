import React, { useContext, useState } from "react";
import MainContext from "../context/MainContext";
import closeIcon from '../images/close-black-transparent.png'

function Radio() {
  const [apperance, setApperance] = useState('')
  const { format, setFormat } = useContext(MainContext)
  const formats = [  'Boring', 'Colorful', 'Illiterating' ]

const handleFormatChange = (val) => {

  setFormat(val)
}

  return (
   <div className={`radiobox ${ formats.includes(format)  ? 'invisible' : ''}`}>
           <span className="box-header">My Resume</span>
{formats.map((format, i) => {return (<div className="radio-button" key={i} onClick={() => {handleFormatChange(format); console.log(format, 'click', format === 'Raw')}}>{format} </div>)})}
 
   {/* <img src={closeIcon} alt="" className="close-icon" /> */}
    </div>
  )
}

export default Radio