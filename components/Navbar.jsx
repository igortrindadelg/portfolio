import styles from "../styles/Navbar.module.scss";
import altStyles from "../styles/NavbarMobileActive.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import logoBranco from "../public/assets/logoBranco.png";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className={altStyles.navbar}>
      <Image className={altStyles.logo} src={logo} alt="Logo - Igor Trindade" />

      <ul className={altStyles.menuLista}>
        <li className={altStyles.menuLinks}>
          <Link href="#">Home</Link>
        </li>
        <li className={altStyles.menuLinks}>
          <Link href="#sobreMim">Sobre Mim</Link>
        </li>
        <li className={altStyles.menuLinks}>
          <Link href="#">Projetos</Link>
        </li>
        <li className={altStyles.menuLinks}>
          <Link href="#">Contato</Link>
        </li>
      </ul>

      <button aria-label="Abrir menu" className={altStyles.iconMenu}>
        <BiMenu />
      </button>
    </nav>
  );
}
