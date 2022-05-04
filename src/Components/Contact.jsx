import React from 'react'
import { Button } from 'react-bootstrap'
import MailIcon from '@mui/icons-material/Mail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
const Contact = () => {
  return (
    <div className='contact-section'>
      <p class='footer-text'>
        Copyright &copy; 2022 by TMS,Inc. All rights reserved. Contact :
      </p>
      <div className='details-box'>
        <MailIcon className='footer-icon mail' />
        <p className='footer-text'>shyammanikandan.22@gmail.com</p>
      </div>
      <div className='details-box'>
        <LocalPhoneIcon />

        <p className='footer-text'>8220977534</p>
      </div>
    </div>
  )
}

export default Contact
