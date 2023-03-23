import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import logoBranco from "../public/assets/logoBranco.png";
import { BiMenu, BiX } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuActive() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logo}
        // src={logoBranco}
        // alt="Logo - Igor Trindade"
      >
        <span className={styles.circuloLogo}>{`< it />`} </span>
        {/* <p>IGOR TRINDADE</p> */}
      </div>

      <ul
        className={`${styles.menuLista} ${
          menuActive ? styles["menuListaActive"] : styles["menuListaExit"]
        }`}
      >
        <li className={styles.menuLinks}>
          <Link href="#">Home</Link>
        </li>
        <li className={styles.menuLinks}>
          <Link href="#sobreMim">Sobre Mim</Link>
        </li>
        <li className={styles.menuLinks}>
          <Link href="#">Projetos</Link>
        </li>
        <li className={styles.menuLinks}>
          <Link href="#">Contato</Link>
        </li>
      </ul>

      {menuActive ? (
        <button
          aria-label="Fechar menu"
          className={styles.iconFechar}
          onClick={handleMenuActive}
        >
          <BiX />
        </button>
      ) : (
        <button
          aria-label="Abrir menu"
          className={styles.iconMenu}
          onClick={handleMenuActive}
        >
          <BiMenu />
        </button>
      )}
    </nav>
  );
}
