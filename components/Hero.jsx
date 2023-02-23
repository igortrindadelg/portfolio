import styles from '../styles/Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import heroImagem from '../public/assets/imagem-igor.jpg'

export default function Hero() {
    const texto = `Igor Trindade - Desenvolvedor Front-End -`

    return (
        <section className={styles.heroContainer}>

            <div className={styles.heroCTA}>
                <p className={styles.heroApresentacao}>Olá, sou Igor Trindade! &#9996;&#65039;
                </p>

                <h1 className={styles.textoHeroCTA}>
                    Desenvolvedor Front-End de Florianópolis/SC
                </h1>

                <p className={styles.descricaoCTA}>Sou apaixonado em transformar ideias em experiências digitais incríveis. Entre em contato para saber mais sobre como posso ajudar a transformar sua visão em realidade! &#128071;</p>

                <ul className={styles.socialButtonsContainer}>
                    <Link
                    className={styles.socialButtons}
                    href='#'>Linkedin</Link>

                    <Link
                    className={styles.socialButtons}
                    href='#'>GitHub</Link>

                    <Link
                    className={styles.socialButtons}
                    href='#'>WhattsApp</Link>
                </ul>

            </div>
{/* 
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
            </div> */}

            <div className={styles.heroImagemContainer}>
                    
                    <Image
                    className={styles.heroImagem}
                    src={heroImagem}
                    alt="Picture of the author"
                    />

            </div>

        </section>
    )
}