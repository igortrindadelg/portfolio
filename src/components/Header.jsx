import React from 'react'
import { useState } from 'react'

import '../scss/Header.scss'

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
            <div className="logo">
                <h2>Igor Trindade.dev</h2>
            </div>

            <ul className={active}>
                <li className="navLink"><a href="#">Home</a></li>
                <li className="navLink"><a href="#">About</a></li>
                <li className="navLink"><a href="#">Services</a></li>
                <li className="navLink"><a href="#">Projects</a></li>
                <li className="navLink">
                    <button className="navButton">Contact
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