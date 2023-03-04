import styles from "../styles/Hero.module.scss";
import Link from "next/link";
import ImagemCirculo from "./ImagemCirculo";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroCTA}>
        <ImagemCirculo />

        <h1 className={styles.textoHeroCTA}>
          Desenvolvedor Front-End e UI Designer
        </h1>

        <p className={styles.descricaoCTA}>
          Sou apaixonado em transformar ideias em experiências digitais
          incríveis. Entre em contato para saber como posso ajudar a transformar
          sua visão em realidade! &#128071;
        </p>

        <ul className={styles.socialButtonsContainer}>
          <Link className={styles.socialButtons} href="#">
            Linkedin
          </Link>

          <Link className={styles.socialButtons} href="#">
            GitHub
          </Link>

          <Link className={styles.socialButtons} href="#">
            WhattsApp
          </Link>
        </ul>
      </div>
    </section>
  );
}
