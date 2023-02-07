import styles from '../styles/Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import heroImagem from '../public/assets/imagem-igor.jpg'

export default function Hero() {
    return (
        <section className={styles.heroContainer}>

            <div className={styles.heroCTA}>
                <p className={styles.heroApresentacao}>Olá, sou Igor Trindade! &#9996;&#65039;
                </p>

                <h1 className="heroCTA">
                    DESENVOLVEDOR FRONT-END
                </h1>

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