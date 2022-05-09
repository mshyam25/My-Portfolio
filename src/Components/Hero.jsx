import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import InterestsIcon from '@mui/icons-material/Interests'

const Hero = () => {
  return (
    <div className='container' id='hero'>
      <div className='intro-section'>
        <div className='profile-img-box'>
          <img
            src='img/display-pic/web.jpg'
            alt='Profile-img'
            className='display-img'
          />
        </div>
        <div className='intro-text-box'>
          <p className='heading-primary'>Hi ! I am Shyam.</p>
          <p className='intro-secondary'>
            A Full Stack Web Developer learning the tricks of the trade.
          </p>
          <div className='contact-box'>
            <a
              class='main-nav-link nav-cta'
              href='https://drive.google.com/file/d/1Zj5ba_BvaJZ_EzWCH4ntIGQvQnJlQN3O/view?usp=sharing'
              target='_blank'>
              Resume
            </a>
            <a class='main-nav-link contact' href='#contact'>
              Contact me
            </a>
          </div>
        </div>
      </div>
      <div id='about' className='about-section'>
        <h2 className='section-heading'>About Me</h2>
        <div className='details-box'>
          <SchoolIcon className='icon' />

          <p className='about-me-text'>
            I Have a Bachelor's degree in Electronics and Communication
            Engineering from Thiagarajar College of Engineering.
          </p>
        </div>
        <div className='details-box'>
          <p className='tertiary-heading'>
            <WorkIcon className='icon' />
          </p>
          <p className='about-me-text'>
            A Software Engineer working for Tata Consultancy Services, awestruck
            by the different UI experiences, I gradually developed interest in
            Web Development.
          </p>
        </div>
        <div className='details-box'>
          <InterestsIcon className='icon' />

          <p className='about-me-text'>
            I have done a few Full stack Projects and mini projects. Apart from
            work, I like to spend time reading about space and very passionate
            about Football.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
