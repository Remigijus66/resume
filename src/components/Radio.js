import React, { useContext, useState, useRef } from "react";
import MainContext from "../context/MainContext";
import closeIcon from '../images/close-black-transparent.png'
import moveIcon from '../images/move.png'
import Dragable from 'react-draggable'

function Radio({ }) {
  const nodeRef = useRef(null);
  const [apperance, setApperance] = useState('')
  const { format, setFormat,   setMeteo } = useContext(MainContext)
  const formats = [  'Boring', 'Colorful', 'Illiterating' ]

const handleFormatChange = (val) => {

  setFormat(val)
}

  return (
    <Dragable nodeRef={nodeRef} handle=".radiobox" >

<div id='radiobox' ref={nodeRef} className={`radiobox ${ formats.includes(format)  ? 'invisible' : ''}`}>
  {/* <img className='icon'  src={moveIcon} alt="" /> */}
 {/* <button className='button red-bkgr' onClick={() => setFormat('Boring')}>My Resume</button>  */}
 <button className='button white-bkgr' onTouchEnd={() => setFormat('Boring')} onClick={() => setFormat('Boring')}>My Resume</button> 
 <button className='button blue-bkgr' onTouchEnd={() => setMeteo(true)} onClick={() => setMeteo(true)}>METEO project</button> 
 
 {/* <div className="dash"></div>
<span className="box-header">My Resume</span>
{formats.map((format, i) => {return (<div className="buttonn red-bkgr" key={i} onClick={() => {handleFormatChange(format); console.log(format, 'click', format === 'Raw')}}>{format} </div>)})}  */}
</div>
    </Dragable>
  )
}

export default Radio