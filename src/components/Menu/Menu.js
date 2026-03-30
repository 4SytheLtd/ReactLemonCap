import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <section id="reservations" className={`${styles.about} container`}>
            <div>
                <h2 className={styles.title}>Reservations</h2>
                <h3 className={styles.subtitle}>Chicago</h3>
                <p className={styles.text}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </div>

            <div className={styles.images}>
                <img src="MAa.jpg" alt="Chef" />
                <img src="MAb.jpg" alt="Chef" />
            </div>
        </section>
    );
}

