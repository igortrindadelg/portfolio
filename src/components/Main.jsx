import React from 'react'
import 'boxicons'

import '../scss/Main.scss'
import avatar from '../assets/avatar.png'

const Main = () => {
    return ( 
        <div className="mainContainer">
            <div className="mainText">
                <h2 className='bigText'>
                    Hi, i'm Igor Trindade. <p>
                    I'm a <span className="bigTextGreen">
                    Front-end dev
                    </span></p>
                </h2>
                
                <p className='description'>Let's build something incredible together! </p>

                <div className="iconsContainer">
                    <button className="iconsButton">
                        <box-icon name='github' type='logo' color='#000' ></box-icon>
                    </button>
                    
                    <button className="iconsButton">
                        <box-icon name='linkedin-square' type='logo' color='#000' ></box-icon> 
                    </button>

                    <button className="iconsButton">
                        <box-icon type='logo' name='whatsapp' ></box-icon>
                    </button>

                </div>
            </div>

            <div className="mainImage">
                <img src={avatar} alt="my avatar" />
            </div>
        </div>
     )
}
 
export default Main