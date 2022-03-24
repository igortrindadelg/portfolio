import React from 'react'

import '../scss/Main.scss'
import igor from '../assets/igor.jpeg'

const Main = () => {
    return ( 
        <div className="mainContainer">
            <div className="mainText">
                <h2>Front-end
                    <p>Dev</p>
                </h2>
            </div>

            <div className="mainImage">
                <img src={igor} alt="" />
            </div>
        </div>
     )
}
 
export default Main