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

                    <p>Hi, I'm Igor Trindade :) Besides being a front-end dev, I'm a 26 year old cinephile who lives in Florianópolis - Brazil, with my boyfriend and our cute pug. Currently I'm focused on always improving my skills as a front-end developer and I would love to help you with your project.</p>

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