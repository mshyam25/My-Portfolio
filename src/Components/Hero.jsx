import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import InterestsIcon from '@mui/icons-material/Interests'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const Hero = () => {
  return (
    <div className='about-section' id='hero'>
      <div className='about'>
        <p className='heading-secondary'>
          Hi ! I am Shyam, a Full Stack Web Developer learning the tricks of the
          trade.
        </p>
        <div className='details-box'>
          <SchoolIcon className='icon' />
          <p className='hero-description'>
            I have a Bachelor's degree in Electronics and Communication
            Engineering degree from Thiagarajar College of Engineering.
          </p>
        </div>

        <div className='details-box'>
          <p className='tertiary-heading'>
            <WorkIcon className='icon' />
          </p>
          <p className='hero-description'>
            I am currently employed by Tata Consultancy Services.
          </p>
        </div>

        <div className='details-box'>
          <InterestsIcon className='icon' />

          <p className='hero-description'>
            I developed interest in web development awstuck by the different UI
            experiences.This made me choose Web development as my career path
            and i am very keen to learn new technologies.
          </p>
        </div>
        <div className='contact-box'>
          <a
            class='main-nav-link nav-cta'
            href='https://drive.google.com/file/d/1Zj5ba_BvaJZ_EzWCH4ntIGQvQnJlQN3O/view?usp=sharing'
            target='_blank'>
            Resume
          </a>
          <a href='https://linkedin.com/in/shyamm2' target='_blank'>
            <LinkedInIcon className='icon linkedin' />{' '}
          </a>
          <a href='https://github.com/mshyam25' target='_blank'>
            <GitHubIcon className='icon github' />
          </a>
        </div>

        <div className='contact-box'>
          <div className='phone'>
            <LocalPhoneIcon className='icon' />

            <p className='contact-text'>8220977534</p>
          </div>
          <div className='email'>
            {' '}
            <MailIcon className='icon' />
            <p className='contact-text'>shyammanikandan.22@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
