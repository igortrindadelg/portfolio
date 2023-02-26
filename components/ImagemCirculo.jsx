import styles from '../styles/ImagemCirculo.module.scss'

export default function ImagemCirculo() {
    const texto = `Igor Trindade - Desenvolvedor de Front-End -`
    function click() {
        return (window.location.href='#');
    } 

    return (
        <div className={styles.textoCircular}
        onClick={click}>
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
        </div>
    )
}