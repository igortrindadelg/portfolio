import React from 'react'

import '../scss/About.scss'
import Igor from '../assets/igor.jpeg'
import Contact from './Contact'

const About = () => {
    return (
        <div className="containerAbout">

            <div className="aboutMeContainer">
                <h2 className='title'>
                    About Me</h2>
                    
                <img src={Igor} alt="" className='aboutMeImage'/>


                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempore atque facere esse voluptates, saepe quaerat quae voluptatum, iste accusamus quibusdam, aliquam dolorem error repudiandae in temporibus cupiditate vitae earum.</p>

            </div>

            <Contact />
            
        </div>
    )
}
 
export default About