import React from 'react'

import './home.css'
import {ImHtmlFive} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiTailwindcss} from 'react-icons/si'
import {SiPhp, SiJavascript, SiJava, SiPython, SiDjango, SiMysql, SiXampp} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {GiCyberEye} from 'react-icons/gi'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-main'>
        <div className='home-about'>
          <h1 className='home-about_name'>
            Hi, I'm <strong>Samael Marjan</strong>
          </h1>
          <p className='home-about_work'>front-end dev</p>
          <p className='home-about_description'>
            I'm a software developer who creates open-source projects. I like accordions, board games, and stand-up comedy.
            This is my digital garden. If you have any trouble understanding these tutorials or getting them running, please feel to reach out to me!
          </p>
        </div>
        <img className='image' src='images/me.png' alt='samael marjan' />
      </div>
      <div className='home_know'>
        <h1>Understand</h1>
        <div className='home_know-topics'>
          <p className='home_know-center'> <ImHtmlFive className='home_logo' /> html</p>
          <p className='home_know-center'> <IoLogoCss3 className='home_logo' /> css</p>
          <p className='home_know-center'> <BsFillBootstrapFill className='home_logo' /> bootstrap</p>
          <p className='home_know-center'> <SiTailwindcss className='home_logo' /> tailwind</p>
          <p className='home_know-center'> <SiPhp className='home_logo' /> php</p>
          <p className='home_know-center'> <SiJavascript className='home_logo' /> javascript</p>
          <p className='home_know-center'> <FaReact className='home_logo' /> react</p>
          <p className='home_know-center'> <SiJava className='home_logo' /> java</p>
          <p className='home_know-center'> <SiPython className='home_logo' /> python</p>
          <p className='home_know-center'> <SiDjango className='home_logo' /> django</p>
          <p className='home_know-center'> <SiMysql className='home_logo' /></p>
          <p className='home_know-center'> <SiXampp className='home_logo' /></p>
          <p className='home_know-center'> <GiCyberEye className='home_logo' /></p>
        </div>
      </div>
    </section>
  )
}

export default Home