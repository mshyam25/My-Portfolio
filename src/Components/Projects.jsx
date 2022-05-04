import React from 'react'

const Projects = () => {
  return (
    <>
      <div className='projects-section' id='projects'>
        <h2 className='section-heading'>Full Stack Projects</h2>

        <div className='projects-box'>
          <div className='project-box'>
            <div className='project-img-box'>
              <img
                src='img/pizza.png'
                alt='Pizza Home Screenshot'
                className='project-img'
              />
            </div>
            <div className='project-details-box'>
              <p className='project-title'>Pizza Delivery App</p>
              <div className='project-urls'>
                <a
                  href='https://github.com/mshyam25/pizza-delivery-frontend.git'
                  target='_blank'
                  className='url-link'>
                  Git Frontend
                </a>
                <a
                  href='https://github.com/mshyam25/pizza-delivery-backend.git'
                  target='_blank'
                  className='url-link'>
                  Git Backend
                </a>
                <a
                  href='https://pizzashere.netlify.app'
                  target='_blank'
                  className='url-link'>
                  Deployment Frontend
                </a>
                <a
                  href='https://pizzashere.herokuapp.com'
                  target='_blank'
                  className='url-link'>
                  Deployment Backend
                </a>
              </div>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-img-box'>
              <img
                src='img/tms.png'
                alt='TMS Home Screenshot'
                className='project-img'
              />
            </div>
            <div className='project-details-box'>
              <p className='project-title'>Movie Ticket Booking App</p>
              <div className='project-urls'>
                <a
                  href='https://github.com/mshyam25/Ticket-Booking-FE.git'
                  target='_blank'
                  className='url-link'>
                  Git Frontend
                </a>
                <a
                  href='https://github.com/mshyam25/Ticket-Booking-BE.git'
                  target='_blank'
                  className='url-link'>
                  Git Backend
                </a>
                <a
                  href='https://tkt-booking-appl.netlify.app'
                  target='_blank'
                  className='url-link'>
                  Deployment Frontend
                </a>
                <a
                  href='https://ticket-booking-appli.herokuapp.com'
                  target='_blank'
                  className='url-link'>
                  Deployment Backend
                </a>
              </div>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-img-box'>
              <img
                src='img/markdown.png'
                alt='Markdown App Home Screenshot'
                className='project-img'
              />
            </div>
            <div className='project-details-box'>
              <p className='project-title'>React Markdown App</p>
              <div className='project-urls'>
                <a
                  href='https://github.com/mshyam25/Markdown-FE.git'
                  target='_blank'
                  className='url-link'>
                  Git Frontend
                </a>
                <a
                  href='https://github.com/mshyam25/Markdown-BE.git'
                  target='_blank'
                  className='url-link'>
                  Git Backend
                </a>
                <a
                  href='https://markdown-react-appl.netlify.app'
                  target='_blank'
                  className='url-link'>
                  Deployment Frontend
                </a>
                <a
                  href='https://react-markdown-appl.herokuapp.com'
                  target='_blank'
                  className='url-link'>
                  Deployment Backend
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='projects-section' id='projects'>
        <h2 className='section-heading'>Mini Projects</h2>

        <div className='projects-box grid grid--2--cols grid--center-v'>
          <div className='project-box'>
            <div className='project-img-box'>
              <img
                src='img/calc.png'
                alt='Calculator Screenshot'
                className='project-img'
              />
            </div>
            <div className='project-details-box'>
              <p className='project-title'>Calculator</p>
              <div className='project-urls'>
                <a
                  href='https://github.com/mshyam25/Calculator.git'
                  target='_blank'
                  className='url-link'>
                  Git
                </a>

                <a
                  href='https://cal-c-tech.netlify.app'
                  target='_blank'
                  className='url-link'>
                  Deployment
                </a>
              </div>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-img-box'>
              <img
                src='img/thirukural.png'
                className='project-img'
                alt='Thirukural Generator Home Screen'
              />
            </div>
            <div className='project-details-box'>
              <p className='project-title'>Thirukural Finder</p>
              <div className='project-urls'>
                <a
                  href='https://github.com/mshyam25/Thirukural.git'
                  target='_blank'
                  className='url-link'>
                  Git
                </a>

                <a
                  href='https://thiruk.netlify.app'
                  target='_blank'
                  className='url-link'>
                  Deployment
                </a>
              </div>
            </div>
          </div>
          <div className='project-box'>
            <div className='project-img-box'>
              <img
                src='img/high.png'
                alt='Highlights App Home Screenshot'
                className='project-img'
              />
            </div>
            <div className='project-details-box'>
              <p className='project-title'>Football Highlights Viewer</p>
              <div className='project-urls'>
                <a
                  href='https://github.com/mshyam25/FootballVideos.git'
                  target='_blank'
                  className='url-link'>
                  Git
                </a>

                <a
                  href='https://footballforum.netlify.app'
                  target='_blank'
                  className='url-link'>
                  Deployment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
