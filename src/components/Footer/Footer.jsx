import React from 'react'
import './footer.css'
import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='footer'>
        <section className='footer-section'>
          <div className='footer-icons'>
              <a className='footer_icon' href='https://github.com/SamaelMarjan' target='_blank' rel="noreferrer">github <AiFillGithub /></a>
              <a className='footer_icon' href='https://twitter.com/samaelmarjan1' target='_blank' rel="noreferrer">twitter <AiOutlineTwitter /></a>
              <a className='footer_icon' href='https://www.linkedin.com/in/samael-marjan-5a58ba21a/' target='_blank' rel="noreferrer">linkedin <RiLinkedinFill /></a>
          </div>
          <div className='footer-name'>
            <p>made by samael marjan</p>
          </div>
        </section>
    </div>
  )
}

export default Footer