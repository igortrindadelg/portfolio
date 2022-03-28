import React from 'react'

import '../scss/Services.scss'

const Services = () => {
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
        {
            id: '07',
            name: 'Node.js',
            image: 'bx bxl-nodejs'
        }
    ]

    return ( 
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
                <h2 className='skillsTitle'>My Skills:</h2>

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
        </div>
     )
}
 
export default Services 