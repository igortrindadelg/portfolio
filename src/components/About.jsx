import React from 'react'

import '../scss/About.scss'
import Igor from '../assets/igor.jpeg'

const About = () => {
    const skills = [
        {
            id: '01',
            name: 'HTML 5',
            image: 'bx bxl-html5'
        },
        {
            id: '02',
            name: 'CSS 3',
            image: 'bx bxl-css3'
        },
        {
            id: '03',
            name: 'JavaScript ES6+',
            image: 'bx bxl-javascript'
        },
        {
            id: '04',
            name: 'React.js',
            image: 'bx bxl-react'
        },
        {
            id: '05',
            name: 'SaSS',
            image: 'bx bxl-sass'
        },
        {
            id: '06',
            name: 'Git',
            image: 'bx bxl-git'
        },
    ]

    return ( 
        <>
        {/* <h2 className='skillsTitle'>Skills</h2> */}
        <div className='aboutContainer'>

            <div className="services">
                <h2 className='servicesTitle'>Services</h2>
                <ul className='servicesList'>
                    <li>Website</li>
                    <li>Landing Page</li>
                    <li>Single Page App</li>
                    <li>NFT Landing Page</li>
                    <li>PSD to React</li>
                </ul>
            </div>

            <div className="skillsContainer">
                <h2 className='skillsTitle'>Skills</h2>

                <div className="listContainer">

                {
                    skills.map(
                        (skill) => {
                            return (
                                <div className="skillContainer">
                                    <i
                                    class={skill.image}
                                    title={skill.name}
                                    ></i>
                                </div>
                            )
                        }
                    )
                }

                </div>
            </div>            
            
            <div className="aboutMeContainer">
                <img src={Igor} alt="" className='aboutMeImage'/>

                <h2 className='title'>
                    About Me</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempore atque facere esse voluptates, saepe quaerat quae voluptatum, iste accusamus quibusdam, aliquam dolorem error repudiandae in temporibus cupiditate vitae earum.</p>

            </div>
        </div>
    </>
     )
}
 
export default About 