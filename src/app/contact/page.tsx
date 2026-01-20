'use client';

import React from 'react';
import styles from './contact.module.css';
import Magnetic from '@/components/Magnetic';

export default function ContactPage() {
    return (
        <main className={styles.section}>
            <div className={styles.backgroundBlur} />

            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    <h1 className={styles.heading}>
                        Let's Talk <br />
                        About Your <br />
                        Growth.
                    </h1>
                    <p className={styles.description}>
                        Whether you're ready to scale or just have a few questions about our performance model, we're here to help.
                    </p>

                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email us</span>
                            <a href="mailto:hello@growthautoagenix.com" className={styles.infoValue}>
                                hello@growthautoagenix.com
                            </a>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Socials</span>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
                                <a href="#" className={styles.infoValue} style={{ fontSize: '1.1rem' }}>LinkedIn</a>
                                <a href="#" className={styles.infoValue} style={{ fontSize: '1.1rem' }}>X (Twitter)</a>
                                <a href="#" className={styles.infoValue} style={{ fontSize: '1.1rem' }}>Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input type="text" placeholder="John Doe" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Work Email</label>
                        <input type="email" placeholder="john@brand.com" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Brand Website</label>
                        <input type="url" placeholder="https://yourbrand.com" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>How can we help?</label>
                        <textarea placeholder="Tell us about your brand and what you're looking to achieve..." className={styles.textarea} required></textarea>
                    </div>

                    <Magnetic>
                        <button type="submit" className={styles.submitBtn} data-cursor="-inverse">
                            Book a Discovery Call
                            <span className={styles.arrowIcon}>↗</span>
                        </button>
                    </Magnetic>
                </form>
            </div>
        </main>
    );
}
