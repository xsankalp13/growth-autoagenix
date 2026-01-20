import React from 'react';
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

                {/* Product Links */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Product</h4>
                    <a href="#" className={styles.link}>About us</a>
                    <a href="#" className={styles.link}>Features</a>
                    <a href="#" className={styles.link}>Get App</a>
                    <a href="#" className={styles.link}>Pricing</a>
                </div>

                {/* Services Links */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Services</h4>
                    <a href="#" className={styles.link}>Contact Us</a>
                    <a href="#" className={styles.link}>Help Center</a>
                    <a href="#" className={styles.link}>How It Works</a>
                    <a href="#" className={styles.link}>Pricing</a>
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
                    <a href="#" className={styles.legalLink}>Terms & Conditions</a>
                    <a href="#" className={styles.legalLink}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
