import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import InterestsIcon from '@mui/icons-material/Interests'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import { Button } from '@mui/material'
const Hero = () => {
  return (
    <div className='about-section'>
      <div className='about'>
        <p className='heading-secondary'>
          Hi ! I am Shyam, a Full Stack Web Developer learning the tricks of the
          trade.
        </p>
        <div className='details-box'>
          <SchoolIcon className='icon' />
          <p className='hero-description'>
            I am an Electronics and Communication Engineer graduated in 2017
            from Thiagarajar College of Engineering.
          </p>
        </div>

        <div className='details-box'>
          <p className='tertiary-heading'>
            <WorkIcon className='icon' />
          </p>
          <p className='hero-description'>
            I am working for Tata Consultancy Services for the past 4 years.
          </p>
        </div>

        <div className='details-box'>
          <InterestsIcon className='icon' />

          <p className='hero-description'>
            I am a big football fan and love to read about space.
          </p>
        </div>
        <div className='details-box'>
          <Button variant='contained' color='warning' className='icon'>
            Resume
          </Button>
          <a href='https://linkedin.com/in/shyamm2' target='_blank'>
            <LinkedInIcon className='icon linkedin' />{' '}
          </a>
          <a href='https://github.com/mshyam25' target='_blank'>
            <GitHubIcon className='icon github' />
          </a>

          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
