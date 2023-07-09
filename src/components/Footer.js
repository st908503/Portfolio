import React from 'react'
import './Footer.css';
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
            <div className="leftSide">
                    <h4>My Goal ⚽️</h4>
                    <p>Pursuing a job opportunity in a competitive environment that will challenge me to push my boundaries and expand my knowledge in the field of frontend development.</p>
                    <div className="social">
                        <FaInstagram size={30}  style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="location">
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>Heerapatti,Azamgarh,UP</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>8319298374 </p>
                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>caspersky700@gmail.com</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer