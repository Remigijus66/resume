import React, { useContext, useState, useRef } from "react";
import MainContext from "../context/MainContext";
import closeIcon from '../images/close-black-transparent.png'
import moveIcon from '../images/move.png'
import Dragable from 'react-draggable'

function Radio() {
  const nodeRef = useRef(null);
  const [apperance, setApperance] = useState('')
  const { format, setFormat } = useContext(MainContext)
  const formats = [  'Boring', 'Colorful', 'Illiterating' ]

const handleFormatChange = (val) => {

  setFormat(val)
}

  return (
    <Dragable nodeRef={nodeRef} handle=".radiobox" >

<div ref={nodeRef} className={`radiobox ${ formats.includes(format)  ? 'invisible' : ''}`}>
  {/* <img className='icon'  src={moveIcon} alt="" /> */}
 <btn className='button blue-bkgr' onClick={() => setFormat('Boring')}>My Resume</btn> 
 <btn className='button red-bkgr' onClick={() => setFormat('Boring')}>My Resume</btn> 
 <btn className='button white-bkgr' onClick={() => setFormat('Boring')}>My Resume</btn> 
 
 {/* <div className="dash"></div>
<span className="box-header">My Resume</span>
{formats.map((format, i) => {return (<div className="buttonn red-bkgr" key={i} onClick={() => {handleFormatChange(format); console.log(format, 'click', format === 'Raw')}}>{format} </div>)})}  */}
</div>
    </Dragable>
  )
}

export default Radio