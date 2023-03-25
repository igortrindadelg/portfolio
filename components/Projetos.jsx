import styles from "../styles/Projetos.module.scss";

export default function Projetos() {
  return (
    <section className={styles.projetosContainer}>
      <h2>Projetos Recentes ⭐</h2>

      <ul className={styles.projetosLista}>
        <li className={styles.projeto}></li>
        <li className={styles.projeto}></li>
        <li className={styles.projeto}></li>
      </ul>
    </section>
  );
}
