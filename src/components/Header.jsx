import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'

import '../scss/Header.scss'
import Logo from './Logo.jsx'

const Header = () => {
    const [activeMobile, setActiveMobile] = useState('navLinks')
    const [ toggleIcon, setToggleIcon ] = useState('navToggle')

    const navToggle = () => {
        activeMobile === 'navLinks' 
        ? setActiveMobile('navLinks navActive') 
        : setActiveMobile('navLinks') 

        toggleIcon === 'navToggle'
        ? setToggleIcon('navToggle toggle')
        : setToggleIcon('navToggle')

    }
    
    const closeMenu = () => {
        activeMobile === 'navLinks navActive'
        ? setActiveMobile('navLinks')
        : setActiveMobile('navLinks')
    }

    return (
        <nav className='navbar'>

            <div className="logoContainer">
                <Logo />
            </div>
            
            <ul className={activeMobile}>
                <li className="navLink">
                    <Link 
                    to="home"
                    activeClass="navLinkActive"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    onClick={closeMenu}
                    >Home</Link>
                </li>

                <li className="navLink">
                    <Link 
                    to="about"
                    activeClass="navLinkActive"
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500}
                    onClick={closeMenu}
                    >About</Link>
                </li>

                <li className="navLink">
                    <Link 
                    to="services"
                    activeClass="navLinkActive"
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500}
                    onClick={closeMenu}
                    >Skills</Link>
                </li>

                <li className="navLink">
                    <Link 
                    to="projects"
                    activeClass="navLinkActive"
                    spy={true} 
                    smooth={true} 
                    offset={-20} 
                    duration={500}
                    onClick={closeMenu}
                    >Projects</Link>
                </li>
                
                
                <li className="navLink">
                    <Link 
                    className="navButton"
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    onClick={closeMenu}
                    >
                        <p>Get In Touch <i class='bx bx-envelope'></i></p>
                    </Link>
                </li>
            </ul>

            <div className={toggleIcon} onClick={navToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}
 
export default Header;