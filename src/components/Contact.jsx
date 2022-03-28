import React from 'react'

import '../scss/Contact.scss'

const Contact = () => {
    return ( 
        <div className="contactContainer">
            <h2>Contact</h2>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your best e-mail'/>
            <input type="text" name="" id="" placeholder='How can I help you?' />
            <input type="text" name="" id="" placeholder='Message here...' />
        </div>
     )
}
 
export default Contact