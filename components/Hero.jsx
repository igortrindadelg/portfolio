import styles from '../styles/Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import heroImagem from '../public/assets/imagem-igor.jpg'
import ImagemCirculo from './ImagemCirculo'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'

export default function Hero() {
    return (
        <section className={styles.heroContainer}>

            <ImagemCirculo />

            <div className={styles.heroCTA}>
                
                <h1 className={styles.textoHeroCTA}>
                    Desenvolvedor Front-End e UI Designer
                </h1>

                <p className={styles.descricaoCTA}>Sou apaixonado em transformar ideias em experiências digitais incríveis. Entre em contato para saber como posso ajudar a transformar sua visão em realidade! &#128071;</p>

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

                <p className={styles.arraste}><HiOutlineChevronDoubleDown /></p>

            </div>

        </section>
    )
}