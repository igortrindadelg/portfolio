import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>IGOR TRINDADE</p>

            <ul className={styles.menuLista}>
                <li className={styles.menuLinks}>
                    <Link href='#'>Home</Link>
                </li>
                <li className={styles.menuLinks}>
                    <Link href='#'>Sobre Mim</Link>
                </li>
                <li className={styles.menuLinks}>
                    <Link href='#'>Projetos</Link>
                </li>
                <li className={styles.menuLinks}>
                    <Link href='#'>Contato</Link>
                </li>
            </ul>
            
        </nav>
    )
}