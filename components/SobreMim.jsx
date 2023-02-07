import styles from '../styles/SobreMim.module.scss'

export default function SobreMim() {
    return(
        <section className={styles.sobreMimContainer}>

            <div className={styles.quemSouEu}>

                <h2>Quem sou eu?</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur suscipit iusto, dignissimos odit sunt asperiores numquam facere id veniam vero nam quidem dicta, exercitationem dolor at laborum veritatis? Voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis ratione porro dolorem autem, ducimus consequatur unde velit minima! Esse officia perspiciatis libero? Enim accusantium maiores rem, quas consequuntur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit perferendis sapiente eligendi laboriosam ab aperiam amet quis autem, quaerat voluptatibus ea reprehenderit rerum veritatis, officia maxime, explicabo assumenda quibusdam?</p>

            </div>

            {/* <h2>Minhas habilidades:</h2> */}

            <div className={styles.minhasHabilidades}>

                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>
                <div className={styles.skillIcon}></div>

            </div>
            
            
            
        </section>
    )
}