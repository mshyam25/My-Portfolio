import React from 'react'
import { Card } from 'react-bootstrap'

const Work = () => {
  return (
    <div className='work-section'>
      <div className='container'>
        <h2 className='heading-secondary'>Work and Education</h2>
      </div>
      <div className='work-education-box grid grid--3--cols'>
        <div className='work-exp'>
          <p className='heading-tertiary'>Trainee - Developer</p>
          <p className='company'>Tata Consultancy Services</p>
          <p className='time'>03/2018 - 06/2018</p>
          <p className='work-description'>UI Development using Html and CSS</p>
        </div>
        <div className='work-exp'>
          <p className='heading-tertiary'>Technical Analyst</p>
          <p className='company'>Tata Consultancy Services</p>
          <p className='time'>07/2018 - 03/2021</p>
          <p className='work-description'>
            Technical Support to Customers of multiple subscription management
            platform.
          </p>
        </div>
        <div className='work-exp'>
          <p className='heading-tertiary'>Developer</p>
          <p className='company'>Tata Consultancy Services</p>
          <p className='time'>04/2021 - Present</p>
          <p className='work-description'>
            UI Development using React.js - Backend Development using Node.js -
            State management using Redux
          </p>
        </div>
      </div>
      <div className='education'>
        <p className='heading-tertiary'>Bachelor of Engineering</p>
        <p className='company'>Thiagarajar College of Engineering</p>
        <p className='time'>06/2013 - 06/2017,</p>
        <p className='work-description'>
          Electronics and Communication Engineering
        </p>
      </div>
    </div>
  )
}

export default Work
