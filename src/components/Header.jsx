import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'

import '../scss/Header.scss'
import Logo from './Logo.jsx'

const Header = () => {
    const [active, setActive] = useState('navLinks')
    const [ toggleIcon, setToggleIcon ] = useState('navToggle')

    const navToggle = () => {
        active === 'navLinks' 
        ? setActive('navLinks navActive') 
        : setActive('navLinks') 

        toggleIcon === 'navToggle'
        ? setToggleIcon('navToggle toggle')
        : setToggleIcon('navToggle')
    }

    return (
        <nav className='navbar'>

            <div className="logoContainer">
                <Logo />
            </div>
            
            <ul className={active}>
                <li className="navLink">
                    <Link to="home">Home</Link>
                </li>

                <li className="navLink">
                    <Link to="about">About</Link>
                </li>

                <li className="navLink">
                    <Link to="services">Services</Link>
                </li>

                <li className="navLink">
                    <Link to="projects">Projects</Link>
                </li>
                
                <li className="navLink">
                    <Link to='contact' className="navButton">
                        <p> Contact <i class='bx bx-envelope'></i></p>
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