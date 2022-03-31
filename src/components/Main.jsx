import React from 'react'
import 'boxicons'

import '../scss/Main.scss'
import avatar from '../assets/avatar.png'
import SocialLinks from './SocialLinks'

const Main = () => {

    return ( 
        <div className="mainContainer" id='home'>
            <div className="mainText">
                <h2 className='bigText'>
                    Hi, i'm Igor Trindade. <p>
                    I'm a <span className="bigTextGreen">
                    Front-end dev!
                    </span></p>
                </h2>
                
                <p className='description'>Let's build something incredible together! </p>

                <SocialLinks />

            </div>

            <div className="mainImage">
                <img src={avatar} alt="my avatar" />
            </div>
        </div>
     )
}
 
export default Main