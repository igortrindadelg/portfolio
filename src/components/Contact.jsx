import React from 'react'

import '../scss/Contact.scss'

const Contact = () => {
    return ( 
        <div className="contactContainer">
            <h2>Contact</h2>

            <p>Your name: </p> 
            <input type="text" name="name" id="" />

            <p>Your best e-mail:
            </p><input type="email" name="email" id="" />
            

            <p>How Can I Help You?</p>
            <input type="text" name="subject" id="" />
           

            <p>Message:</p>
            <textarea className='message' id="" />
        </div>
     )
}
 
export default Contact