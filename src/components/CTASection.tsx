'use client';

import React from 'react';
import styles from './CTASection.module.css';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className={styles.section}>
            {/* Background elements */}
            <div className={styles.background}>
                <div className={styles.noise}></div>
                <div className={styles.gridLines}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    <h2 className={styles.heading}>
                        Ready to scale your <br />
                        brand with zero <br />
                        financial risk?
                    </h2>

                    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="email"
                                placeholder="Enter your business email..."
                                className={styles.input}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Book a Call
                        </button>
                    </form>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/cta-person.png"
                        alt="Contact Person"
                        fill
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
