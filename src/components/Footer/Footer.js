import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="footer" className={`${styles.footer} container`}>
            <div className={styles.logo}>Little Lemon</div>

            <div className={styles.columns}>
                <fakediv>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </fakediv>

                <fakediv>
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </fakediv>

                <fakediv>
                    <h4>Social Media</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </fakediv>
            </div>
        </footer>
    );
}
