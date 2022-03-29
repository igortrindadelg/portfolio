import React from 'react'
import { useState } from 'react'

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
                <li className="navLink"><a href="#">Home</a></li>
                <li className="navLink"><a href="#">About</a></li>
                <li className="navLink"><a href="#">Services</a></li>
                <li className="navLink"><a href="#">Projects</a></li>
                <li className="navLink">
                    <button className="navButton">
                    Contact <i class='bx bx-envelope'></i>
                    </button>
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