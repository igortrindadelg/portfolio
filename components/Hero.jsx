import styles from "../styles/Hero.module.scss";
import Link from "next/link";
import ImagemCirculo from "./ImagemCirculo";
import Image from "next/image";
import heroImagem from "../public/assets/imagem-igor.jpg";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroCTA}>
        {/* <p className={styles.apresentacao}> Olá, sou Igor Trindade 👋 </p> */}

        <h1 className={styles.textoHeroCTA}>
          Olá, sou
          <span className={styles.apresentacao}> Igor Trindade</span>
          <br />
          Desenvolvedor Front-End
        </h1>

        <p className={styles.descricaoCTA}>
          Sou apaixonado em transformar ideias em experiências digitais
          incríveis. <br />
          Entre em contato para saber como posso ajudar a transformar sua visão
          em realidade! &#128071;
        </p>

        <ul className={styles.socialButtonsContainer}>
          <Link className={styles.socialButtons} href="#">
            <BsLinkedin /> Linkedin
          </Link>

          <Link className={styles.socialButtons} href="#">
            <BsGithub /> GitHub
          </Link>

          <Link className={styles.socialButtons} href="#">
            <BsWhatsapp /> WhattsApp
          </Link>
        </ul>
      </div>

      <div className={styles.heroImagemContainer}>
        <Image
          className={styles.heroImagem}
          src={heroImagem}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
}
