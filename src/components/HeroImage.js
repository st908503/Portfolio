import React from 'react'
import './HeroImage.css'
import IntroImg from '../assets/intro-bg.jpg'
// import { Link } from 'react-router-dom'
import Me from '../images/me.png'
import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'
import CV from '../assets/cv.pdf'

const HeroImage = () => {

  return (
    <div className="hero">
      <div className="mask">
        <img className='into-img' src={IntroImg} alt="" />
      </div>
      <div className="content">
        <div className="left">
          <img className='me' src={Me} alt="" />
        </div>
        <div className="right">
          <div className="rightContent">
            <p>Hello, I'm Shashank Tripathi</p>
            <h1>I'm a ReactJs developer </h1>
            <div className='social'>

              <a href='https://github.com/st908503'>
                <img className='icons' src={Github} alt="" />
              </a>

              <a href='https://www.linkedin.com/in/shashank-tripathi-702b041ba/'>
                <img className='icons' src={LinkedIn} alt="" />
              </a>

              <a href='https://twitter.com/shashankt_98'>
                <img className='icons' src={Twitter} alt="" />
              </a>
              <a href='https://www.instagram.com/shashankt_98/'>
                <img className='icons' src={Instagram} alt="" />
              </a>
            </div>
            <div className="download">
              <a className="btn" href={CV}>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImage