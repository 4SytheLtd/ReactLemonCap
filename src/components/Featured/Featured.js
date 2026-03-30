import styles from "./Featured.module.css";

export default function Featured() {
    return (
        <section id="featured" className={`container ${styles.specials}`}>
            <div className={styles.headerRow}>
                <h2>This Week's Specials!</h2>
                <button className={styles.menuButton}>Online Menu</button>
            </div>

            <div className={styles.grid}>
                {/* Card 1 */}
                <div className={styles.card}>
                    <img src="greek salad.jpg" alt="" className={styles.cardImage} />
                    <div className={styles.cardHeader}>
                        <h3>Greek Salad</h3>
                        <span>$12.99</span>
                    </div>
                    <p className={styles.cardText}>
                        The famous greek salad of crispy lettuce...
                    </p>
                    <button className={styles.delivery}>Order a delivery</button>
                </div>

                {/* Card 2 */}
                <div className={styles.card}>
                    <img src="bruchetta.svg" alt="" className={styles.cardImage} />
                    <div className={styles.cardHeader}>
                        <h3>Bruschetta</h3>
                        <span>$5.99</span>
                    </div>
                    <p className={styles.cardText}>
                        Our Bruschetta is made from grilled bread...
                    </p>
                    <button className={styles.delivery}>Order a delivery</button>
                </div>

                {/* Card 3 */}
                <div className={styles.card}>
                    <img src="lemon dessert.jpg" alt="" className={styles.cardImage} />
                    <div className={styles.cardHeader}>
                        <h3>Lemon Dessert</h3>
                        <span>$5.00</span>
                    </div>
                    <p className={styles.cardText}>
                        This comes straight from grandma’s recipe book...
                    </p>
                    <button className={styles.delivery}>Order a delivery</button>
                </div>
            </div>
        </section>
    );
}
