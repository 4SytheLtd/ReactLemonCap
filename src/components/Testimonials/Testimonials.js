import styles from "./Testimonials.module.css";

export default function Testimonials() {
    return (
        <section id="testimonials" className={`container ${styles.aName}`}>
            <h2 className={styles.title}>Testimonials</h2>

            <div className={styles.grid}>
                <div className={styles.card}>Rating • Name • Review</div>
                <div className={styles.card}>Rating • Name • Review</div>
                <div className={styles.card}>Rating • Name • Review</div>
                <div className={styles.card}>Rating • Name • Review</div>
            </div>
        </section>
    );
}
