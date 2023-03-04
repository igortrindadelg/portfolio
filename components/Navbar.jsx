import styles from "../styles/Navbar.module.scss";
import altStyles from "../styles/NavbarMobileActive.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import logoBranco from "../public/assets/logoBranco.png";
import { BiMenu } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuActive() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className={menuActive ? altStyles.navbar : styles.navbar}>
      <Image className={altStyles.logo} src={logo} alt="Logo - Igor Trindade" />

      <ul className={menuActive ? altStyles.menuLista : styles.menuLista}>
        <li className={menuActive ? altStyles.menuLinks : styles.menuLista}>
          <Link href="#">Home</Link>
        </li>
        <li className={menuActive ? altStyles.menuLinks : styles.menuLinks}>
          <Link href="#sobreMim">Sobre Mim</Link>
        </li>
        <li className={menuActive ? altStyles.menuLinks : styles.menuLinks}>
          <Link href="#">Projetos</Link>
        </li>
        <li className={menuActive ? altStyles.menuLinks : styles.menuLinks}>
          <Link href="#">Contato</Link>
        </li>
      </ul>

      <button
        aria-label="Abrir menu"
        className={menuActive ? altStyles.iconMenu : styles.iconMenu}
        onClick={handleMenuActive}
      >
        <BiMenu />
      </button>
    </nav>
  );
}
