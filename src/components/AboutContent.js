import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.jpg'
import Me1 from '../images/me1.png'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="leftSection">
                <h1>Who Am I?</h1>
                <img class= "me1" src={Me1} alt="" />
                <p>
                    Hi, I'm Shashank Tripathi and I graduated from GL Bajaj Institute of Technology and Management in 2021 with a degree in Computer Science. My interests are in Front End Development. I love to create beautiful and performant products with delightful user experiences. I have 1.5 years of relevant experience where I worked on designing some beautiful responsive apps using ReactJs. Please contact me for more information.  </p>
               
                   
                    <Link to='/contact'>
                        <button className='btn'>Contact</button>
                    </Link>
               
            </div>

            <div className="rightSection">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} alt="" className='img' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} alt="" className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent