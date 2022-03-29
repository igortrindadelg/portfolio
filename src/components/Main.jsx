import React from 'react'
import 'boxicons'

import '../scss/Main.scss'
import avatar from '../assets/avatar.png'

const Main = () => {
    const socialLinks = {
        github: 'https://github.com/igortrindadelg',
        linkedin: 'https://www.linkedin.com/in/igor-trindade-776ba8222/',
        whatsapp: 'https://api.whatsapp.com/send?phone=5548988279797&text=%20'
    }

    return ( 
        <div className="mainContainer">
            <div className="mainText">
                <h2 className='bigText'>
                    Hi, i'm Igor Trindade. <p>
                    I'm a <span className="bigTextGreen">
                    Front-end dev!
                    </span></p>
                </h2>
                
                <p className='description'>Let's build something incredible together! </p>

                <div className="iconsContainer">
                    <a href={socialLinks.github}
                    target='_blank' 
                    className="iconsButton">
                        <i class='bx bxl-github'
                        title='GitHub' ></i>
                    </a>
                    
                    <a href={socialLinks.linkedin}
                    target='_blank'
                    className="iconsButton">
                        <i class='bx bxl-linkedin-square'
                        title='Linkedin' ></i>
                    </a>

                    <a href={socialLinks.whatsapp}
                    target="_blank"
                    className="iconsButton">
                        <i class='bx bxl-whatsapp'
                        title='WhatsApp' ></i>
                    </a>

                </div>
            </div>

            <div className="mainImage">
                <img src={avatar} alt="my avatar" />
            </div>
        </div>
     )
}
 
export default Main