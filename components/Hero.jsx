import styles from '../styles/Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import heroImagem from '../public/assets/imagem-igor.jpg'

export default function Hero() {
    return (
        <section className={styles.heroContainer}>

            <div className={styles.heroCTA}>
                <p>Olá, sou Igor Trindade!
                </p>

                <h1 className="heroCTA">
                    DESENVOLVEDOR FRONT-END
                </h1>

                <ul className={styles.socialButtons}>
                    <Link href='#'>Linkedin</Link>
                    <Link href='#'>GitHub</Link>
                    <Link href='#'>WatsApp</Link>
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