import React, { useContext, useEffect, useState } from 'react';
import MainContext from "../context/MainContext";
import Pdf from '../Documents/curriculumVitae.pdf';
import lego from '../Documents/lego.jpg';
import remi from '../Documents/remi.jpg';
import curriculumVitae from '../helpers/cv';
import { FaGithub, FaPhone, FaLinkedin } from "react-icons/fa"
import { BsEnvelopeAt } from "react-icons/bs";
import Boring from './Boring';

const Illiterating = () => {

  const [cvCopy, setCvCopy] = useState({});
  const { format, setFormat } = useContext(MainContext)
  const [name, setName] = useState([])
  const [illiteral, setIlliteral] = useState(false)
  const [personalData, setPersonalData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [languagesData, setLanguagesData] = useState([]);

  useEffect(() => {
    setCvCopy(curriculumVitae)
    console.log('original', curriculumVitae)
    console.log('copy', cvCopy)
    setPersonalData(Object.values(Object.values(curriculumVitae)[0]))
    setSkillsData(Object.values(curriculumVitae)[1])
    // setEducationData(Object.values(Object.values(curriculumVitae)[2][0]).concat(Object.values(Object.values(curriculumVitae)[2][1])))
    setEducationData(Object.values(Object.values(curriculumVitae)[2]).reduce((sum, curr) => sum.concat(Object.values(curr)), []))

    setExperienceData(Object.values(Object.values(curriculumVitae)[3]).reduce((sum, curr) => sum.concat(curr), []))

    setLanguagesData(Object.values(Object.values(curriculumVitae)[4]))

    const timer = setTimeout(() => {
      setIlliteral(true);
      clearTimeout(timer);
    }, 1000)
  }, [format])




  const replaceLetter = (string, letter) => {
    const regex = new RegExp(letter, "gi");
    const newString = string.replaceAll(regex, '-')
    return newString
  }


  const handleReplace = (letter) => {
    const nextPersonalData = personalData.map((x) => replaceLetter(x, letter))
    setPersonalData(nextPersonalData)
    const nextSkillsData = skillsData.map((x) => replaceLetter(x, letter))
    setSkillsData(nextSkillsData)
    const nextEducationData = educationData.map((x) => replaceLetter(x, letter))
    setEducationData(nextEducationData)

    // let nextExperienceData = experienceData
    // nextExperienceData.map((record) => {
    //   Object.keys(record).forEach((key) => {
    //     record[key] = replaceLetter(record[key], letter)
    //   })
    // });
    // setExperienceData(nextExperienceData)
    // mutates curriculumVitae object  should be replaced 

    const nextLanguagesData = languagesData.map((x) => replaceLetter(x, letter))
    setLanguagesData(nextLanguagesData)
  }








  return (
    <div>
      {<div div className='grid' >

        <div className='name'>
          <button onClick={() => { handleReplace('a') }}>replace a in  personal data</button>
          <button onClick={() => { handleReplace('b') }}>replace b in  personal data</button>
          <button onClick={() => { handleReplace('e') }}>replace e in  personal data</button>
          <button onClick={() => { handleReplace('s') }}>replace s in  personal data</button>

          <h2>{(personalData[0]) + ' ' + (personalData[1])}</h2>
        </div>
        <div className='contacts'>
          <div className='icon'> <FaPhone /></div>
          <p>{(personalData[2])}</p>
          <div className='dash'></div>
          <div className='icon'> <BsEnvelopeAt /></div>
          <p>{(personalData[3])}</p>
          <div className='dash'></div>
          <div className='icon'><FaGithub /></div>
          <p>{(personalData[4])}</p>
          <div className='dash'></div>
          <div className='icon'> <FaLinkedin /></div>
          <p>{(personalData[5])}</p>
        </div>
        <img src={remi} alt="" className='photo' />
        <div className='skills'>
          <h3>Skills</h3>
          <div className='skills-list'>
            {(skillsData.map((x, i) => <span key={i}>{x}, </span>))}
          </div>
        </div>
        <div className='education'>
          <h3>Education</h3>
          <div className='dash'></div>
          <div className='record'>
            <cite>Institution:</cite>{(educationData[0])}
          </div>
          <div className='record'>
            <cite>Course:</cite>{(educationData[1])}
          </div>
          <div className='record'>
            <cite>Dates:</cite>{(educationData[2])}
          </div>
          <div className='record'>
            <cite>Duration:</cite>{(educationData[3])}
          </div>
          <div className='dash'></div>
          <div className='record'>
            <cite>Institution:</cite>{(educationData[4])}
          </div>
          <div className='record'>
            <cite>Studies:</cite>{(educationData[5])}
          </div>
          <div className='record'>
            <cite>Graduated:</cite>{(educationData[5])}
          </div>
          <div className='record'>
            <cite>Degree:</cite>{(educationData[7])}
          </div>
        </div>
        <div className='experience'>
          <h3>Work Experience</h3>
          {(experienceData.map((x, i) => <div key={i} >
            <div className='dash'></div>
            {<div className='record'><cite>Company:</cite>{(x.company)}</div>}
            {<div className='record'><cite>Dates:</cite>{(x.dates)}</div>}
            {<div className='record'><cite>Position:</cite>{(x.position)}</div>}
            {<div className='record'><cite>Responsibilities:</cite>{(x.responsibilities)} </div>}
          </div>))}</div>
        <div className='languages'>
          <h3>Languages</h3>
          <div className='dash'></div>
          <div className='record'>
            <cite>English:</cite>{(languagesData[0])}
          </div>
          <div className='record'>
            <cite>Russian:</cite>{(languagesData[1])}
          </div>
        </div>
      </div > || <Boring />}
    </div>
  );
};

export default Illiterating;