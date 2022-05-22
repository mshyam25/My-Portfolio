import React from 'react'

const Work = () => {
  return (
    <div className='container' id='work'>
      <div>
        <p className='section-heading'>Work Experience</p>
      </div>
      <div className='work--box'>
        <div className='work-exp work-1'>
          <div className='time-line'>
            <p className='time'>11/2021 - Present</p>
            <p className='company'>Tata Consultancy Services</p>
          </div>
          <div className='roles'>
            <p className='role'>Developer</p>
            <ul>
              <li>
                <p className='task'>
                  Developing new UI components based on Requirements using
                  functional components.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='work-exp'>
          <div className='time-line'>
            <p className='time'>06/2020 - 10/2021</p>
            <p className='company'>Tata Consultancy Services</p>
          </div>
          <div className='roles'>
            <p className='role'>Technical Analyst</p>
            <ul>
              <li>
                <p className='task'>
                  Served as primary point of contact for support relating to
                  owned solutions and products.
                </p>
              </li>
              <li>
                <p className='task'>
                  Followed up with clients to verify optimal customer
                  satisfaction following support engagement and problem
                  resolution.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='work-exp'>
          <div className='time-line'>
            <p className='time'>07/2018 - 05/2020</p>
            <p className='company'>Tata Consultancy Services</p>
          </div>
          <div className='roles'>
            <p className='role'>Production Support Engineer</p>
            <ul>
              <li>
                <p className='task'>
                  Worked with software development team on reported errors and
                  bugs on newly released software and assisted in deployment of
                  release fixes.
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
        </div>
        <div className='work-exp'>
          <div className='time-line'>
            <p className='time'>03/2018 - 06/2018</p>
            <p className='company'>Tata Consultancy Services</p>
          </div>
          <div className='roles'>
            <p className='role'>Graduate Engineering Trainee</p>
            <ul>
              <li>
                <p className='task'>
                  Planned website development, converting mockups into usable
                  web presence with HTML, JavaScript, AJAX and JSON coding.
                </p>
              </li>
              <li>
                <p className='task'>
                  Multi-tasked across multiple functions and roles to meet
                  deadlines and organizational expectations.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
