import React from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
    return (
        <div className={styles.container}>
            <span className={styles.text}>SCROLL DOWN</span>
            <div className={styles.line}></div>
        </div>
    );
}
