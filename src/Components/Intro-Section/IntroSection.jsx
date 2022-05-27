import React from 'react'
const IntroSection = () => {
  return (
    <>
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
            <p>
              <span className='intro-text'>Hello I am </span>{' '}
              <span className='intro-primary-text'>Shyam </span>
            </p>
            <p className='intro-secondary'>
              A Full Stack Web Developer learning the tricks of the trade.
            </p>
            <div className='contact-box'>
              <a
                class='main-nav-link nav-cta'
                href='https://drive.google.com/file/d/1Xi1kUFWhRnyvOUbwSD21A26kHaSWVfup/view?usp=sharing'
                target='_blank'
                rel='noreferrer'>
                Resume
              </a>
              <a class='main-nav-link contact' href='#contact' rel='noreferrer'>
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroSection
