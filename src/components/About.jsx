import React from 'react'

import '../scss/About.scss'
import Igor from '../assets/igor.jpeg'
import Contact from './Contact'
import SocialLinks from './SocialLinks'

const About = () => {
    return (
        <div className="containerAbout" id='about'>

            <div className="aboutMeContainer">
  
                <img src={Igor} alt="" className='aboutMeImage'/>

                <div className="aboutMeText">
                    <h2 className='title'>
                        About Me</h2>

                    <p>Hi, I'm Igor Trindade. I am a professional and experienced front-end developer who is dedicated to being more and more up-to-date with the latest technologies. My main tools are JavaScript, React.js, SaSS, Node.js with the focus on creating solutions for your business with the best practices in the market.
                    Get in touch to learn more about what I can do to help your business ;)</p>

                    <div className="socialLinksContainer">
                        <SocialLinks /> 
                    </div>
                </div>

            </div>

            {/* <Contact /> */}
            
        </div>
    )
}
 
export default About