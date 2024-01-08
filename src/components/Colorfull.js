import React, { useContext, useEffect, useState } from 'react';
// import remi from '../Documents/remi.jpg';
import remi from '../images/remi1.jpg';
import copyIcon from '../images/copy-icon.png';
import curriculumVitae from '../Documents/cv';
import { FaGithub, FaPhone, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import MainContext from '../context/MainContext';
import closeIcon from '../images/close-black-transparent.png'

const Colorful = () => {
  const [indent, setIndent] = useState(0)
  const [timePassed, setTimePassed] = useState(0)
  const { format, setFormat } = useContext(MainContext)

  useEffect(() => {
    setNameColor(false)
    setContactsColor(false)
    setEducationColor(false)
    setExperienceColor(false)
    setSkillsColor(false)
    setLanguagesColor(false)
    setIndent(0)
    setTimePassed(0)
    const nameTimer = setTimeout(() => {
      setNameColor(true)
      clearTimeout(nameTimer)
    }, 1000)
    const contactsTimer = setTimeout(() => {
      setContactsColor(true)
      clearTimeout(contactsTimer)
    }, 2000)
    const skillsTimer = setTimeout(() => {
      setSkillsColor(true)
      clearTimeout(skillsTimer)
    }, 5000)
    const educationTimer = setTimeout(() => {
      setEducationColor(true);
      clearTimeout(educationTimer);
    }, 3500)
    const experienceTimer = setTimeout(() => {
      setExperienceColor(true)
      clearTimeout(experienceTimer)
    }, 2200)
    const languagesTimer = setTimeout(() => {
      setLanguagesColor(true)
      clearTimeout(languagesTimer)
    }, 3000)
  }, [format])

  useEffect(() => {
    if (indent > -501)
      setTimeout(() => {
        setTimePassed(timePassed + 100)
        if (timePassed >= 5001)
          setIndent(indent - 10)
      }, 100)
  }, [timePassed, indent])

  const [nameColor, setNameColor] = useState(false)
  const [contactsColor, setContactsColor] = useState(false)
  const [skillsColor, setSkillsColor] = useState(false)
  const [educationColor, setEducationColor] = useState(false)
  const [experienceColor, setExperienceColor] = useState(false)
  const [languagesColor, setLanguagesColor] = useState(false)

  const capitalise = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
  }
  return (
    <div className='grid'>
        <img src={closeIcon} alt="" className="close-icon" onClick={() => setFormat('')}/>
      <div className={` name hidden ${nameColor ? 'blue' : ''}`} style={{ textIndent: `${nameColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setNameColor(false)} onMouseLeave={() => setNameColor(true)} >
        <h2>{(curriculumVitae.personal.firstName) + ' ' + (curriculumVitae.personal.lastName)}</h2>
        <p>Front-end developer</p>
      </div>
      <div className={` contacts ${contactsColor ? 'green hidden' : ''}`} style={{ textIndent: `${contactsColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setContactsColor(false)} onMouseLeave={() => setContactsColor(true)}>
      <h3>Contacts</h3>
        <div className='dash wide'></div>
        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.tel)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
          <FaPhone className='icon'/>
          <p>{(curriculumVitae.personal.tel)}</p>
          <div className='dash wide'></div>
        </div>

        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.eMail)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
           <BsEnvelopeAt className='icon'/>
          <p>{(curriculumVitae.personal.eMail)}</p>
          <div className='dash wide'></div>
        </div>

        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.gitHub)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
         <FaGithub className='icon' />
          <p>{(curriculumVitae.personal.gitHub)}</p>
          <div className='dash wide'></div>
        </div>

        <div className='relative'>
          <div className="copy-icon" onClick={() => navigator.clipboard.writeText(curriculumVitae.personal.linkedin)} ><img style={{ width: '18px' }} src={copyIcon} alt="" /> </div>
           <FaLinkedin className='icon' />
          <p>{(curriculumVitae.personal.linkedin)}</p>
          <div className='dash wide'></div>
        </div>
      </div>
      <img src={remi} alt="" className='photo' />
      <div className={` skills ${skillsColor ? 'indigo hidden' : ''}`} style={{ textIndent: `${skillsColor ? indent + '%' : '0%'} `, minHeight:'125px' }} onMouseOver={() => setSkillsColor(false)} onMouseLeave={() => setSkillsColor(true)}>
      <h3>Skills</h3>
        <div className='dash'></div>
        <div className='skills-list'>
          {(curriculumVitae.skills.map((skill, i) => <span key={i}>{skill}, </span>))}
        </div>
      </div>
      <div className={` education ${educationColor ? 'yellow hidden' : ''}`} style={{ textIndent: `${educationColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setEducationColor(false)} onMouseLeave={() => setEducationColor(true)}>
        <h3>Education</h3>
        {(curriculumVitae.education.map((x, i) => <div key={i} >
          <div className='dash'></div>
          {Object.keys(x).map((key, index) => <div className='record' key={index} > <cite key={index} className='record-label'>{capitalise(key) + ':'}</cite> <span className='record-value'>{x[key]}</span>   </div>)}
        </div>))}
      </div>

      <div className={` experience ${experienceColor ? 'red hidden' : ''}`} style={{ textIndent: `${experienceColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setExperienceColor(false)} onMouseLeave={() => setExperienceColor(true)} >
      <h3>Work Experience</h3>
        {(curriculumVitae.workExperience.map((x, i) => <div key={i} >
          <div className='dash'></div>

          {Object.keys(x).map((key, index) => <div className='record' key={index} > <cite key={index} className='record-label'>{capitalise(key) + ':'}</cite> <span className='record-value'>{x[key]}</span>   </div>)}

        </div>))}
        </div>
      <div className={` languages ${languagesColor ? 'cyan hidden' : ''}`} style={{ textIndent: `${languagesColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setLanguagesColor(false)} onMouseLeave={() => setLanguagesColor(true)}>
        <h3>Languages</h3>
        <div className='dash'></div>
        {Object.keys(curriculumVitae.languages).map((key, index) => <div className='record' key={index} > <cite key={index} className='record-label'>{capitalise(key) + ':'}</cite> <span className='record-value'>{curriculumVitae.languages[key]}</span>   </div>)}
     
      </div>
    </div >
  )
}

export default Colorful