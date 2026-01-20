'use client';
import React from 'react';
import FloatingCharacter from './FloatingCharacter';
import GlowingOrb from './GlowingOrb';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundBlur} />
            <svg className={styles.backgroundCurves} viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
                <path d="M720,0 C720,400 300,900 0,900" className={styles.curve} />
                <path d="M720,0 C720,400 1140,900 1440,900" className={styles.curve} />
                <circle cx="720" cy="450" r="300" className={styles.curveCircle} />
            </svg>
            <div className={styles.grid}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Affiliate<br />Marketing<br />Agency
                    </h1>
                    <p className={styles.subtitle}>
                        Digital marketing considers how each individual tool can convert prospects. A brand's digital marketing strategy may use multiple platforms or focus all of its <strong>efforts on 1 platform.</strong>
                    </p>
                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryButton}>
                            <span className={styles.arrowIcon}>↗</span>
                            Get in touch
                        </button>
                        <a href="#" className={styles.linkButton}>Learn more</a>
                    </div>
                </div>
                <div className={styles.visuals}>
                    <FloatingCharacter />
                    <GlowingOrb />
                </div>
            </div>
        </section>
    );
}
