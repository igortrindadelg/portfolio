import styles from '../styles/SobreMim.module.scss'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiAdobephotoshop } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'

export default function SobreMim() {
    const texto = `Quem sou Eu? - Quem sou Eu? - Quem sou Eu? -`

    return(
        <section className={styles.sobreMimContainer}>

            <div className={styles.quemSouEu}>

                <div className={styles.textoCircular}>
                    <div className={styles.meioTexto}></div>
                    <div className={styles.textoContainer}>
                            {texto.split("").map(
                                (char, i) => (
                                    <span
                                    key={i} 
                                    className={styles.textoSpan}
                                    style={{transform: `rotate(${i * 8.1}deg)`}}>{char}</span>)
                            )}    
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur suscipit iusto, dignissimos odit sunt asperiores numquam facere id veniam vero nam quidem dicta, exercitationem dolor at laborum veritatis? Voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis ratione porro dolorem autem, ducimus consequatur unde velit minima! Esse officia perspiciatis libero? Enim accusantium maiores rem, quas consequuntur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit perferendis sapiente eligendi laboriosam ab aperiam amet quis autem, quaerat voluptatibus ea reprehenderit rerum veritatis, officia maxime, explicabo assumenda quibusdam?

                <div className={styles.minhasHabilidades}>

                    <h3 className={styles.skillIcon}><FaHtml5 /> </h3> 
                    <h3 className={styles.skillIcon}><FaCss3Alt /> </h3>
                    <h3 className={styles.skillIcon}><SiJavascript /> </h3>  
                    <h3 className={styles.skillIcon}><FaReact /> </h3>
                    <h3 className={styles.skillIcon}><SiNextdotjs /> </h3>
                    <h3 className={styles.skillIcon}><FaNodeJs /> </h3>  
                    <h3 className={styles.skillIcon}><FaGitAlt /> </h3>  
                    <h3 className={styles.skillIcon}><FaGithub/> </h3>  
                    <h3 className={styles.skillIcon}><FiFigma /> </h3>  
                    <h3 className={styles.skillIcon}><SiAdobephotoshop /> </h3>  

                </div>
                </p>

            </div>

            {/* <h2>Minhas habilidades:</h2> */}

            {/* <div className={styles.minhasHabilidades}>

                <h3 className={styles.skillIcon}><FaHtml5 /> </h3> 
                <h3 className={styles.skillIcon}><FaCss3Alt /> </h3>
                <h3 className={styles.skillIcon}><SiJavascript /> </h3>  
                <h3 className={styles.skillIcon}><FaReact /> </h3>
                <h3 className={styles.skillIcon}><SiNextdotjs /> </h3>
                <h3 className={styles.skillIcon}><FaNodeJs /> </h3>  
                <h3 className={styles.skillIcon}><FaGitAlt /> </h3>  
                <h3 className={styles.skillIcon}><FaGithub/> </h3>  
                <h3 className={styles.skillIcon}><FiFigma /> </h3>  
                <h3 className={styles.skillIcon}><SiAdobephotoshop /> </h3>  

                
            </div> */}
            
            
            
        </section>
    )
}