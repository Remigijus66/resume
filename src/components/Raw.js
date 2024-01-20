import curriculumVitae from '../images/rawCV.png';
import closeIcon from '../images/close-black-transparent.png'
import React, { useContext} from "react";
import MainContext from "../context/MainContext";

const Raw = () => {
  const { setFormat } = useContext(MainContext)
  return (
    <div>
 <img src={closeIcon} alt="" className="close-icon" onclick={setFormat('')} />
      <img src={curriculumVitae} alt="" style={{ width: '75%', margin: '50px 200px' }} />
    </div>
  )
}

export default Raw