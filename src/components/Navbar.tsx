'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                AutoAgenx
            </Link>
            <div className={styles.navLinks}>
                <Link href="#exhibitions" className={styles.link}>Exhibitions</Link>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#gallery" className={styles.link}>Gallery</Link>
                <Link href="#store" className={styles.link}>Store</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.actions}>
                <a href="mailto:digital@manarx.com" className={styles.emailLink}>digital@manarx.com</a>
                <div className={styles.authLinks}>
                    <Link href="#signin" className={styles.linkBtn}>Sign-in</Link>
                    <Link href="#contact" className={styles.linkBtn}>Get in touch</Link>
                </div>
            </div>
        </nav>
    );
}
