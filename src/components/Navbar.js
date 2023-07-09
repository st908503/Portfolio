import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import S from '../images/S.png'
import H from '../images/H.png'
import A from '../images/A.png'
import N from '../images/N.png'
import K from '../images/K.png'



const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        if(!click){
            setClick(true )
        }
        else{
            setClick(false )
        }
    }

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <>
            <div className={color ? 'header header-bg' : 'header'}>
                <Link to='/'>
                    <img className='logo' src={S} alt="" /><img className='logo' src={H} alt="" />
                    <img className='logo' src={A} alt="" /><img className='logo' src={S} alt="" />
                    <img className='logo' src={H} alt="" /><img className='logo' src={A} alt="" />
                    <img className='logo' src={N} alt="" /><img className='logo' src={K} alt="" />
                   
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/project'>Project</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes
                        size={20}
                        style={{ color: '#fff' }}
                    />) : (<FaBars
                        size={20}
                        style={{ color: '#fff' }}
                    />)}
                </div>
            </div>
        </>
    )
}

export default Navbar