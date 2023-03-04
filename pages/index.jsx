import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SobreMim from "../components/SobreMim";
import TextoDeslizante from "../components/TextoDeslizante";
import Projetos from "../components/Projetos";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.homeContainer}>
        <Navbar />
        <Hero />

        <div className={styles.arrasteContainer}>
          <p className={styles.arraste}>
            <HiOutlineChevronDoubleDown />
          </p>
        </div>
      </div>

      <TextoDeslizante />

      <div id="sobreMim" className={styles.homeContainer}>
        <Projetos />
        <SobreMim />
      </div>
    </div>
  );
}
