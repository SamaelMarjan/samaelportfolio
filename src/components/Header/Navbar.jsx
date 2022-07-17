import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'
import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {FiDownload} from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <h1>samael</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>about</Link>
          </li>
          <li>
            <Link to='/projects'>portfolio</Link>
          </li>
        </ul>
        <div className='nav-icons'>
            <a href='https://github.com/SamaelMarjan' target='_blank' rel="noreferrer"><AiFillGithub /></a>
            <a href='https://twitter.com/samaelmarjan1' target='_blank' rel="noreferrer"><AiOutlineTwitter /></a>
            <a href='https://www.linkedin.com/in/samael-marjan-5a58ba21a/' target='_blank' rel="noreferrer"><RiLinkedinFill /></a>
        </div>
        <div className='download_cv'>
          <a className='cv-down' href='https://drive.google.com/file/d/12u5-cWWUDg0Rs7dTJGNijf9vAsbsx0BU/view?usp=sharing' target='_blank' rel="noreferrer">
            download cv
            <FiDownload />
          </a>
        </div>
        <div className='darkmode'>
          Light+Dark
        </div>
      </div>
    </nav>
  )
}

export default Navbar