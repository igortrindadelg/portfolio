import React from 'react'

import '../scss/SocialLinks.scss'

const SocialLinks = () => {
    const socialLinks = {
        github: 'https://github.com/igortrindadelg',
        linkedin: 'https://www.linkedin.com/in/igor-trindade-776ba8222/',
        whatsapp: 'https://api.whatsapp.com/send?phone=5548988279797&text=%20'
    }

    return ( 
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
     )
}

export default SocialLinks