import React from 'react'

import '../scss/About.scss'
import Igor from '../assets/igor.jpeg'

const About = () => {
    return (
        <div className="aboutMeContainer">
                <img src={Igor} alt="" className='aboutMeImage'/>

                <h2 className='title'>
                    About Me</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempore atque facere esse voluptates, saepe quaerat quae voluptatum, iste accusamus quibusdam, aliquam dolorem error repudiandae in temporibus cupiditate vitae earum.</p>

            </div>
    )
}
 
export default About