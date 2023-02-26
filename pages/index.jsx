import styles from '../styles/Home.module.scss'
import altStyles from '../styles/HomeDark.module.scss'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SobreMim from '../components/SobreMim'
import TextoDeslizante from '../components/TextoDeslizante'
import Projetos from '../components/Projetos'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  //   localStorage.getItem('isDarkMode' === true || false)
  // )

  function HandleToggle() {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('isDarkMode', !isDarkMode)
  } 

  return (
    <div className={styles.containerPrincipal}>
      <div className={isDarkMode ? altStyles.homeContainer: styles.homeContainer}>
        <Navbar />
        <Hero />

        <button
        onClick={HandleToggle}>Mudar cor</button>

      </div>

      <TextoDeslizante />

      <div id='sobreMim'
      className={isDarkMode ? altStyles.homeContainer: styles.homeContainer}>
        <Projetos />
        <SobreMim />
      </div>

    </div>
  )
}
