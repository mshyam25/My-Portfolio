import React from 'react'
import { Card } from 'react-bootstrap'

const Work = () => {
  return (
    <div className='work-section' id='work'>
      <div className='container'>
        <p className='section-heading'>Work Experience</p>
      </div>
      <div className='work--box'>
        <div className='work-exp work-1'>
          <p className='role'>Trainee - Developer</p>
          <p className='company'>Tata Consultancy Services</p>
          <p className='time'>03/2018 - 06/2018</p>
          <ul>
            <li>
              <p className='task'>
                Developed UI (Customer and Admin Modules) using Standard Html
                and CSS Practices.
              </p>
            </li>
            <li>
              <p className='task'>
                Implemented a functionality to set the nearest store as the
                default store.
              </p>
            </li>
          </ul>
        </div>
        <div className='work-exp work-2'>
          <p className='role'>Technical Analyst</p>
          <p className='company'>Tata Consultancy Services</p>
          <p className='time'>07/2018 - 03/2021</p>
          <ul>
            <li>
              <p className='task'>
                Diagnosed software issues and applied troubleshooting techniques
                to resolve problems.
              </p>
            </li>
            <li>
              <p className='task'>
                Documented technical workflows and knowledge to educate newly
                hired employees.
              </p>
            </li>
          </ul>
        </div>
        <div className='work-exp work-3'>
          <p className='role'>Junior Developer</p>
          <p className='company'>Tata Consultancy Services</p>
          <p className='time'>04/2021 - Present</p>
          <ul>
            <li>
              <p className='task'>
                UI Development using React.js and Backend development using
                node.js
              </p>
            </li>
            <li>
              <p className='task'>
                Developing new UI components based on Requirements using
                functional components.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work
