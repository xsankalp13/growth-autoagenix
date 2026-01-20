'use client';
import Link from 'next/link';
import Magnetic from './Magnetic'; // Import Magnetic
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Growth Autoagenix
            </Link>
            <div className={styles.navLinks}>
                <Link href="#services" className={styles.link}>Services</Link>
                <Link href="#how-it-works" className={styles.link}>How It Works</Link>
                <Link href="#results" className={styles.link}>Results</Link>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.actions}>
                <a href="mailto:hello@growthautoagenix.com" className={styles.emailLink}>hello@growthautoagenix.com</a>
                <div className={styles.authLinks}>
                    <Magnetic>
                        <Link href="#contact" className={styles.linkBtn} data-cursor-stick data-cursor="-inverse">Book a Call</Link>
                    </Magnetic>
                </div>
            </div>
        </nav>
    );
}
