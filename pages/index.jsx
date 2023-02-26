import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SobreMim from '../components/SobreMim'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.homeContainer}>
        <Navbar />
        <Hero />
      </div>

      {/* <Projects /> */}


      <div id='sobreMim'className={styles.sobreMimContainer}>
        <SobreMim />
      </div>

    </div>
  )
}
