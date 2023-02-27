import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { BiMenu } from 'react-icons/bi'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Image className={styles.logo} src={logo}
            alt="Logo - Igor Trindade"/>

            <ul className={styles.menuLista}>
                <li className={styles.menuLinks}>
                    <Link href='#'>Home</Link>
                </li>
                <li className={styles.menuLinks}>
                    <Link href='#sobreMim'>Sobre Mim</Link>
                </li>
                <li className={styles.menuLinks}>
                    <Link href='#'>Projetos</Link>
                </li>
                <li className={styles.menuLinks}>
                    <Link href='#'>Contato</Link>
                </li>
            </ul>

            <button aria-label="Abrir menu" className={styles.iconMenu}>
                <BiMenu />
            </button>
        </nav>
    )
}