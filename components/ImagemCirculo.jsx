import { useState } from "react";
import styles from "../styles/ImagemCirculo.module.scss";

export default function ImagemCirculo() {
  const texto = `- Entre em contato - Envie sua mensagem aqui`;
  return (
    <div className={styles.textoCircular}>
      <div className={styles.meioTexto}></div>
      <div className={styles.textoContainer}>
        {texto.split("").map((char, i) => (
          <span
            key={i}
            className={styles.textoSpan}
            style={{ transform: `rotate(${i * 8.1}deg)` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
