import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" className={`container ${styles.hero} `}>
            <div>
                <h1 className={styles.title}>Little Lemon</h1>
                <h2 className={styles.subtitle}>Chicago</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className={styles.button}>Reserve A Table</button>
            </div>

            <img
                src="restauranfood.jpg"
                alt="Restaurant food"
                className={styles.image}
            />
        </section>
    );
}
