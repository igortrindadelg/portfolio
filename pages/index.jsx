import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SobreMim from '../components/SobreMim'

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.homeContainer}>
        <Navbar />
        <Hero />
      </div>

      <div id='sobreMim'className={styles.sobreMimContainer}>
        <SobreMim />
      </div>

    </div>
  )
}
