import React from 'react'

import '../scss/Contact.scss'

const Contact = () => {
    return ( 
        <div className="contactContainer" id='contact'>
            
            <div className="formContainer">
                <h2>Get In Touch</h2>

                <form 
                action="https://formsubmit.co/igortrindadelg@gmail.com" 
                method="post">

                    <p>Your name: </p> 
                    <input type="text" name="name" required />

                    <p>Your best e-mail:
                    </p><input type="email" name="email" required />
                    

                    <p>How can I help you? (subject)</p>
                    <input type="text" name="_subject" required />
                

                    <p>Message:</p>
                    <textarea className='message' name='message' required id="" />

                    <input type="hidden" name="_captcha" value="false"></input>

                    <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

                    <p className="buttonContainer"><button className='buttonSubmit' type="submit">
                       <p>Send <i class='bx bxs-send'></i></p></button></p>

                </form>
            </div>
        </div>
     )
}
 
export default Contact