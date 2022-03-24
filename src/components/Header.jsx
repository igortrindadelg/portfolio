import React from 'react'
import '../scss/Header.scss'

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <h2>Igor Trindade.dev</h2>
            </div>

            <ul className="navLinks">
                <li className="navLink"><a href="#">Home</a></li>
                <li className="navLink"><a href="#">About</a></li>
                <li className="navLink"><a href="#">Services</a></li>
                <li className="navLink"><a href="#">Projects</a></li>
                <li className="navLink">
                    <button className="navButton">Contact</button>
                </li>
            </ul>
        </nav>
    );
}
 
export default Header;