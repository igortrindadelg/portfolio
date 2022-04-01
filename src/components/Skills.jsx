import React from 'react'

import '../scss/Skills.scss'

const Skills = () => {
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
        },
        {
            id: '08',
            name: 'Bootstrap',
            image: 'bx bxl-bootstrap'
        }
    ]

    return ( 
        <div className='servicesContainer' id='services'>

            <div className="titleContainer">
                    <h2 className='skillsTitle'>My Skills:
                    <p>What I can do for you?</p></h2>
            </div>

            <div className="skillsContainer">
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
 
export default Skills 