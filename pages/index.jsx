import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
    </div>
  )
}
