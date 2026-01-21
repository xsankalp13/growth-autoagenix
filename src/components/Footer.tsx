import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                {/* Brand Column */}
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        Growth Autoagenix
                    </div>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="#" className={styles.socialIcon} aria-label="X (Twitter)"><Twitter size={18} /></a>
                        <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Youtube size={18} /></a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Navigation</h4>
                    <Link href="/about" className={styles.link}>About us</Link>
                    <Link href="/brand-growth" className={styles.link}>How It Works</Link>
                    <Link href="/results" className={styles.link}>Results</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>

                {/* Newsletter */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Newsletter</h4>
                    <p className={styles.newsletterText}>Subscribe to our newsletter</p>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Enter your email..." className={styles.input} />
                        <button className={styles.sendBtn} aria-label="Subscribe">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomSection}>
                <div className={styles.copyright}>
                    All rights reserved @growthautoagenix.com
                </div>
                <div className={styles.legalLinks}>
                    <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
                    <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
