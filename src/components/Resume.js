import { React, useContext } from 'react';
import MainContext from "../context/MainContext";
import remi from '../images/remi1.jpg';
import copyIcon from '../images/copy-icon.png';
import curriculumVitae from '../Documents/cv';
import { FaGithub, FaPhone, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import closeIcon from '../images/close-black-transparent.png'

const Resume = () => {
  const { setShowResume } = useContext(MainContext)
  const capitalise = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
  }
  return (
    <div className='grid scroll'>
      <img src={closeIcon} alt="" className="close-icon" onClick={() => setShowResume(false)} />
      <div className='name'>
        <h2>{(curriculumVitae.personal.firstName) + ' ' + (curriculumVitae.personal.lastName)}</h2>
        <h4>Front-end developer</h4>
      </div>
      <img src={remi} alt="" className='photo' />
      <div className='contacts'>
        <h3>Contacts</h3>
        <div className='dash wide'></div>
        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.tel)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
          <FaPhone className='icon' />
          <p>{(curriculumVitae.personal.tel)}</p>
          <div className='dash wide'></div>
        </div>
        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.eMail)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
          <BsEnvelopeAt className='icon' />
          <p>{(curriculumVitae.personal.eMail)}</p>
          <div className='dash wide'></div>
        </div>
        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.gitHub)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
          <a href={`${(curriculumVitae.personal.gitHub)}`} target='blank'  >  <FaGithub className='icon' /></a>
          <div className='dash wide'></div>
        </div>
        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.linkedin)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
          <a href={`https://${(curriculumVitae.personal.linkedin)}`} target='blank'  > <FaLinkedin className='icon' /></a>
          <div className='dash wide'></div>
        </div>
      </div>
      <div className='skills'>
        <h3>Skills</h3>
        <div className='dash'></div>
        <div className='skills-list'>
          {(curriculumVitae.skills.map((skill, i) => <span key={i}>{skill}, </span>))}
        </div>
      </div>
      <div className='experience'>
        <h3>Work Experience</h3>
        {(curriculumVitae.workExperience.map((x, i) => <div key={i} >
          <div className='dash'></div>
          {Object.keys(x).map((key, index) => <div className='record' key={index} > <cite key={index} className='record-label'>{capitalise(key) + ':'}</cite> <span className='record-value'>{x[key]}</span>   </div>)}
        </div>))}
      </div>
      <div className='education'>
        <h3>Education</h3>
        {(curriculumVitae.education.map((x, i) => <div key={i} >
          <div className='dash'></div>
          {Object.keys(x).map((key, index) => <div className='record' key={index} > <cite key={index} className='record-label'>{capitalise(key) + ':'}</cite> <span className='record-value'>{x[key]}</span>   </div>)}
        </div>))}
      </div>
      <div className='languages'>
        <h3>Languages</h3>
        <div className='dash'></div>
        {Object.keys(curriculumVitae.languages).map((key, index) => <div className='record' key={index} > <cite key={index} className='record-label'>{capitalise(key) + ':'}</cite> <span className='record-value'>{curriculumVitae.languages[key]}</span>   </div>)}
      </div>
    </div>
  )
}

export default Resume