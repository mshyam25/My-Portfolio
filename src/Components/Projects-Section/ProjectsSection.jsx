import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'

const ProjectsSection = () => {
  const tooltipStyle = { fontSize: '1.8rem' }
  return (
    <>
      <div className='container' id='projects'>
        <h2 className='section-heading'>Full Stack Projects</h2>

        <div className='projects-container'>
          <div className='project project-1'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/pizza_800x400.png'
                alt='Pizza Home Screenshot'
                className='project-img'
              />
              <p className='project-title'>Pizza Delivery App</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/pizza-delivery-frontend.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/mshyam25/pizza-delivery-backend.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://pizzashere.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://pizzashere.herokuapp.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Heroku Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/heroku-icon.svg'
                        className='project-link-icon'
                        alt='Heroku icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-2'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/tms_800x400.png'
                alt='TMS Home Screenshot'
                className='project-img'
              />
              <p className='project-title'>Ticket Booking App</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Ticket-Booking-FE.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/mshyam25/Ticket-Booking-BE.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://tkt-booking-appl.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://ticket-booking-appli.herokuapp.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Heroku Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/heroku-icon.svg'
                        className='project-link-icon'
                        alt='Heroku icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-3'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/merchandise.png'
                alt='Merchandise App Home Screenshot'
                className='project-img'
              />
              <p className='project-title'>Club Merchandise App</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Merchandise-FE.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/mshyam25/merchandise-BE.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://utd-merchandise.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://utd-merchandise-app.herokuapp.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Heroku Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/heroku-icon.svg'
                        className='project-link-icon'
                        alt='Heroku icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-4'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/markdown_800x400.png'
                alt='Markdown App Home Screenshot'
                className='project-img'
              />
              <p className='project-title'>React Markdown App</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Markdown-FE.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={<h1 style={tooltipStyle}>Source Code Frontend</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>
                <a
                  href='https://github.com/mshyam25/Markdown-BE.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Source Code Backend
                      </h1>
                    }>
                    <IconButton>
                      <GitHubIcon className='project-link-icon backend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://markdown-react-appl.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://react-markdown-appl.herokuapp.com'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Heroku Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/heroku-icon.svg'
                        className='project-link-icon'
                        alt='Heroku icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container' id='projects'>
        <h2 className='section-heading'>Mini Projects</h2>

        <div className='projects-container'>
          <div className='project project-4'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/calc_800x400.png'
                className='project-img'
                alt='Calculator Home Screen'
              />
              <p className='project-title'>Calculator</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Calculator.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip title={<h1 style={tooltipStyle}>Source Code</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://cal-c-tech.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-5'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/thirukural_800x400.png'
                className='project-img'
                alt='Thirukural Generator Home Screen'
              />
              <p className='project-title'>Thirukural Finder</p>
            </div>

            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/Thirukural.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip title={<h1 style={tooltipStyle}>Source Code</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://thiruk.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className='project project-6'>
            <div className='project-img-box flex-center-all'>
              <img
                src='img/high_800x400.png'
                alt='Highlights App Home Screenshot'
                className='project-img'
              />
              <p className='project-title'>Football Highlights Viewer</p>
            </div>
            <div className='project-details-box flex-center-all'>
              <p className='project-title'>Links</p>
              <div className='project-links'>
                <a
                  href='https://github.com/mshyam25/FootballVideos.git'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip title={<h1 style={tooltipStyle}>Source Code</h1>}>
                    <IconButton>
                      <GitHubIcon className='project-link-icon frontend-git-icon' />
                    </IconButton>
                  </Tooltip>
                </a>

                <a
                  href='https://footballforum.netlify.app'
                  target='_blank'
                  rel='noreferrer'>
                  <Tooltip
                    title={
                      <h1 style={{ fontSize: '1.8rem' }}>
                        Netlify Deployment Link
                      </h1>
                    }>
                    <IconButton>
                      <img
                        src='img/projects/netlify-icon.svg'
                        className='project-link-icon'
                        alt='Netlify icon'
                      />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsSection
