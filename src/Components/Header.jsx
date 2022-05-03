import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <a href='#' className='main-nav-link'>
        SHYAM M
      </a>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <a href='#' className='main-nav-link'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='main-nav-link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#' className='main-nav-link'>
              Work
            </a>
          </li>
          <li>
            <a href='#' className='main-nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
