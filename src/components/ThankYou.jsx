import React, { Fragment } from 'react'
import '../scss/ThankYou.scss'


const ThankYou = () => {
    return (
       <div className="thanksContainer">
                
                <div className="textContainer">
                    <i class='bx bx-mail-send'></i>
                    <h2>Thank You!</h2>
                    <p>Your message was sent.</p>
                    <p>You will soon receive an answer.</p>
                </div>
                
                <div className="buttonContainer">
                    <a 
                        className="backButton"
                        href='/' 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                        >
                            Return
                    </a>
                </div>

        </div>
    );
  }
  
export default ThankYou
