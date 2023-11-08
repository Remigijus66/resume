import React from 'react';
import remi from '../Documents/remi.jpg';
import curriculumVitae from '../constants/cv';
import { FaGithub, FaPhone, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";

const Boring = () => {
  return (
    <div className='grid'>
      <div className='name'>
        <h2>{(curriculumVitae.personal.firstName) + ' ' + (curriculumVitae.personal.lastName)}</h2>
      </div>
      <div className='contacts'>
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
      <div className='skills'>
        <h3>Skills</h3>
        <div className='skills-list'>
          {(curriculumVitae.skills.map((x, i) => <span key={i}>{x}, </span>))}
        </div>
      </div>
      <div className='education'>
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
      <div className='experience'>
        <h3>Work Experience</h3>
        {(curriculumVitae.workExperience.map((x, i) => <div key={i} >
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
          <cite>English:</cite>{(curriculumVitae.languages.english)}
        </div>
        <div className='record'>
          <cite>Russian:</cite>{(curriculumVitae.languages.russian)}
        </div>
      </div>
    </div>
  )
}

export default Boring