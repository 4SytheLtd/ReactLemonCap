import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
export default function Header() {
    return (
        <header className={`container ${styles.header} `}>
            <img src="logo.svg" alt="Little Lemon" className={styles.logo} />

            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/featured">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}
