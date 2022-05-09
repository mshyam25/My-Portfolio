import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <div className='footer-contact-box'>
        <p className='contact-text'>Contact : </p>
        <div className='footer-contacts'>
          <div className='phone'>
            <LocalPhoneIcon className='footer-icon' />

            <a href='tel:8220977534' className='phone-text'>
              8220977534
            </a>
          </div>
          <div className='email'>
            {' '}
            <MailIcon className='footer-icon' />
            <a
              href='mailto: shyammanikandan.22@gmail.com'
              className='phone-text'>
              shyammanikandan.22@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className='footer-contact-box'>
        <p className='contact-text'>Check out my Profiles here : </p>
        <div className='profiles'>
          <a href='https://linkedin.com/in/shyamm2' target='_blank'>
            <LinkedInIcon className='icon linkedin' />{' '}
          </a>
          <a href='https://github.com/mshyam25' target='_blank'>
            <GitHubIcon className='icon github' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
