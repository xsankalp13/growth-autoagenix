'use client';

import React from 'react';
import styles from './growth.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Magnetic from '@/components/Magnetic';

export default function HowItWorksPage() {
    return (
        <main className={styles.section}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '0',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, var(--accent-primary-glow) 0%, transparent 60%)',
                filter: 'blur(80px)',
                zIndex: 0,
                opacity: 0.4,
                pointerEvents: 'none'
            }} />

            <div className={styles.hero}>
                <h1 className={styles.heading}>The Engine Behind <br /> Your Growth</h1>
                <p className={styles.subHeading}>
                    We've replaced the traditional agency bloat with a streamlined, AI-enhanced workflow that delivers precision, speed, and <strong>zero financial risk</strong>.
                </p>
            </div>

            <div className={styles.stepsContainer}>

                {/* Step 1 */}
                <div className={styles.stepRow}>
                    <div className={styles.stepContent}>
                        <div className={styles.stepNumber}>01</div>
                        <h2 className={styles.stepTitle}>AI-Powered Discovery</h2>
                        <p className={styles.stepDescription}>
                            Forget manual searching. Our proprietary algorithms scan millions of profiles to identify influencers who match your exact brand values, audience demographics, and engagement metrics. We don't just find followers; we find buyers.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/ai-discovery.png"
                            alt="AI identifying high-value influencers"
                            width={800}
                            height={500}
                            className={styles.stepImage}
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className={`${styles.stepRow} ${styles.stepRowReverse}`}>
                    <div className={styles.stepContent}>
                        <div className={styles.stepNumber}>02</div>
                        <h2 className={styles.stepTitle}>Automated Activation</h2>
                        <p className={styles.stepDescription}>
                            Scaling requires volume. Our auto-outreach systems initiate personalized conversations with hundreds of qualified partners simultaneously. We handle the negotiations, onboarding, and tracking links automatically, so your campaign goes live in days, not months.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/auto-outreach.png"
                            alt="Automated network connections"
                            width={800}
                            height={500}
                            className={styles.stepImage}
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div className={styles.stepRow}>
                    <div className={styles.stepContent}>
                        <div className={styles.stepNumber}>03</div>
                        <h2 className={styles.stepTitle}>Performance Scaling</h2>
                        <p className={styles.stepDescription}>
                            Data is our north star. We track every click, code, and conversion in real-time. Our dashboard gives you 100% transparency, and because we only charge on performance, our incentive is purely to maximize your revenue.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/performance-growth.png"
                            alt="Growth chart showing upward trend"
                            width={800}
                            height={500}
                            className={styles.stepImage}
                        />
                    </div>
                </div>

            </div>



            <div className={styles.ctaSection}>
                <h2 className={styles.ctaHeading}>Ready to start your engine?</h2>
                <Magnetic>
                    <Link href="/contact" className={styles.ctaBtn} data-cursor="-inverse">
                        Book a Strategy Call ↗
                    </Link>
                </Magnetic>
            </div>
        </main>
    );
}
