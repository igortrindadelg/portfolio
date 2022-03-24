import React from 'react'

import '../scss/Main.scss'
import avatar from '../assets/avatar.png'

const Main = () => {
    return ( 
        <div className="mainContainer">
            <div className="mainText">
                <h2 className='dev'>
                    I'm, Igor Trindade
                    <p>Front-end Developer</p>
                </h2>
                
                <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aliquid eligendi sint quos sed possimus reprehenderit incidunt illum expedita maiores. </p>
            </div>

            <div className="mainImage">
                <img src={avatar} alt="" />
            </div>
        </div>
     )
}
 
export default Main