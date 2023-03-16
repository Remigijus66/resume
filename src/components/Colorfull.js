import React, { useContext, useEffect, useState } from 'react';
// import MainContext from "../context/MainContext";
import Pdf from '../Documents/curriculumVitae.pdf';
import lego from '../Documents/lego.jpg';
import remi from '../Documents/remi.jpg';
import curriculumVitae from '../helpers/cv';
import { FaGithub, FaPhone, FaLinkedin } from "react-icons/fa"
import { BsEnvelopeAt } from "react-icons/bs";
import MainContext from '../context/MainContext';



const Colorful = () => {
  const [indent, setIndent] = useState(0)
  const [timePassed, setTimePassed] = useState(0)

  const { format } = useContext(MainContext)
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
      setNameColor(true);
      clearTimeout(nameTimer);
    }, 1000)
    const contactsTimer = setTimeout(() => {
      setContactsColor(true);
      clearTimeout(contactsTimer);
    }, 2000)
    const skillsTimer = setTimeout(() => {
      setSkillsColor(true);
      clearTimeout(skillsTimer);
    }, 5000)
    const educationTimer = setTimeout(() => {
      setEducationColor(true);
      clearTimeout(educationTimer);
    }, 3500)
    const experienceTimer = setTimeout(() => {
      setExperienceColor(true);
      clearTimeout(experienceTimer);
    }, 2200)
    const languagesTimer = setTimeout(() => {
      setLanguagesColor(true);
      clearTimeout(languagesTimer);
    }, 3000)
  }, [format])

  useEffect(() => {
    if (indent > -501)
      setTimeout(() => {
        setTimePassed(timePassed + 100)
        if (timePassed >= 5001)
          setIndent(indent - 10)
      }, 100)
  }, [timePassed])

  const [nameColor, setNameColor] = useState(false)
  const [contactsColor, setContactsColor] = useState(false)
  const [skillsColor, setSkillsColor] = useState(false)
  const [educationColor, setEducationColor] = useState(false)
  const [experienceColor, setExperienceColor] = useState(false)
  const [languagesColor, setLanguagesColor] = useState(false)


  return (
    <div className='grid'>
      {/* <div className={` name hidden ${nameColor ? 'blue' : ''}`} style={{ textIndent: `${nameColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setNameColor(false)} onMouseLeave={() => setNameColor(true)} > */}
      <div className={` name hidden ${nameColor ? 'blue' : ''}`} style={{ textIndent: `${nameColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setNameColor(false)} onMouseLeave={() => setNameColor(true)} >
        <h2>{(curriculumVitae.personal.firstName) + ' ' + (curriculumVitae.personal.lastName)}</h2>
      </div>
      <div className={` contacts ${contactsColor ? 'green hidden' : ''}`} style={{ textIndent: `${contactsColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setContactsColor(false)} onMouseLeave={() => setContactsColor(true)}>
        <div className='icon'> <FaPhone /></div>
        <p>{(curriculumVitae.personal.tel)}</p>
        <div className='dash'></div>
        <div className='icon'> <BsEnvelopeAt /></div>
        <p>{(curriculumVitae.personal.eMail)}</p>
        <div className='dash'></div>
        <div className='icon'><FaGithub /></div>
        <p>{(curriculumVitae.personal.gitHub)}</p>
        <div className='dash'></div>
        <div className='icon'> <FaLinkedin /></div>
        <p>{(curriculumVitae.personal.linkedin)}</p>
      </div>
      <img src={remi} alt="" className='photo' />
      <div className={` skills ${skillsColor ? 'indigo hidden' : ''}`} style={{ textIndent: `${skillsColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setSkillsColor(false)} onMouseLeave={() => setSkillsColor(true)}>
        <h3>Skills</h3>
        <div className='skills-list'>
          {(curriculumVitae.skills.map((x, i) => <span key={i}>{x}, </span>))}
        </div>
      </div>
      <div className={` education ${educationColor ? 'yellow hidden' : ''}`} style={{ textIndent: `${educationColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setEducationColor(false)} onMouseLeave={() => setEducationColor(true)}>
        <h3>Education</h3>
        <div className='dash'></div>
        <div className='record'>
          <cite>Institution:</cite>{(curriculumVitae.education[0].institution)}
        </div>
        <div className='record'>
          <cite>Course:</cite>{(curriculumVitae.education[0].course)}
        </div>
        <div className='record'>
          <cite>Dates:</cite>{(curriculumVitae.education[0].dates)}
        </div>
        <div className='record'>
          <cite>Duration:</cite>{(curriculumVitae.education[0].duration)}
        </div>
        <div className='dash'></div>
        <div className='record'>
          <cite>Institution:</cite>{(curriculumVitae.education[1].institution)}
        </div>
        <div className='record'>
          <cite>Studies:</cite>{(curriculumVitae.education[1].studies)}
        </div>
        <div className='record'>
          <cite>Graduated:</cite>{(curriculumVitae.education[1].graduated)}
        </div>
        <div className='record'>
          <cite>Degree:</cite>{(curriculumVitae.education[1].degree)}
        </div>
      </div>
      <div className={` experience ${experienceColor ? 'red hidden' : ''}`} style={{ textIndent: `${experienceColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setExperienceColor(false)} onMouseLeave={() => setExperienceColor(true)} >

        <h3>Work Experience</h3>
        {(curriculumVitae.workExperience.map((x, i) => <div key={i} >
          <div className='dash'></div>
          {<div className='record'><cite>Company:</cite>{(x.company)}</div>}
          {<div className='record'><cite>Dates:</cite>{(x.dates)}</div>}
          {<div className='record'><cite>Position:</cite>{(x.position)}</div>}
          {<div className='record'><cite>Responsibilities:</cite>{(x.responsibilities)} </div>}
        </div>))}</div>

      <div className={` languages ${languagesColor ? 'cyan hidden' : ''}`} style={{ textIndent: `${languagesColor ? indent + '%' : '0%'} ` }} onMouseOver={() => setLanguagesColor(false)} onMouseLeave={() => setLanguagesColor(true)}>

        <h3>Languages</h3>
        <div className='dash'></div>
        <div className='record'>
          <cite>English:</cite>{(curriculumVitae.languages.english)}
        </div>
        <div className='record'>
          <cite>Russian:</cite>{(curriculumVitae.languages.russian)}
        </div>
      </div>
    </div >
  );
};

export default Colorful;