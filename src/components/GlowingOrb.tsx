'use client';
import React from 'react';
import styles from './GlowingOrb.module.css';

export default function GlowingOrb() {
    return (
        <div className={styles.container}>
            <svg className={styles.magneticWaves} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M400,100 Q250,250 100,200" className={styles.wavePath} />
                <path d="M400,150 Q250,300 100,250" className={styles.wavePath} />
            </svg>
            <div className={styles.orbWrapper}>
                <div className={styles.orbGlow} />
            </div>
            <div className={styles.orbText}>
                MORE<br />SALES
            </div>
        </div>
    );
}
