'use client';

import React from 'react';
import styles from './about.module.css';
import Link from 'next/link';
import Magnetic from '@/components/Magnetic';

export default function AboutPage() {
    return (
        <main className={styles.section}>
            <div className={styles.container}>
                {/* Hero section */}
                <div className={styles.hero}>
                    <span className={styles.tagline}>The Agency Evolution</span>
                    <h1 className={styles.heading}>
                        Pure Performance. <br />
                        Zero Risk.
                    </h1>
                    <p className={styles.mainDescription}>
                        Growth Autoagenix was founded on a simple principle: Why should brands pay for promises when they can pay for results? We've built an infrastructure where our success is tied directly to yours.
                    </p>
                </div>

                {/* Mission Section */}
                <div className={styles.grid}>
                    <div className={styles.aboutText}>
                        <h2 className={styles.subHeading}>Our Mission</h2>
                        <p className={styles.paragraph}>
                            We exist to democratize high-level influencer and affiliate marketing. For too long, premium influencer management was locked behind $10k/month retainers and hidden fees.
                        </p>
                        <p className={styles.paragraph}>
                            <span className={styles.highlight}>Growth Autoagenix changed that.</span> By leveraging AI-driven outreach and automated management tools, we reduce overhead and pass those savings—and risks—entirely onto ourselves.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder for a premium design element/image */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)', opacity: 0.1 }} />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '2px solid var(--accent-primary)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '2rem', fontWeight: 'bold' }}>GA</div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Risk Free</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>$0</span>
                        <span className={styles.statLabel}>Upfront Fees</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Active Partners</span>
                    </div>
                </div>

                {/* Vision Section */}
                <div className={`${styles.grid} ${styles.reverse}`} style={{ marginTop: '150px' }}>
                    <div className={styles.imageWrapper} style={{ background: 'rgba(0,0,0,0.02)' }} />
                    <div className={styles.aboutText}>
                        <h2 className={styles.subHeading}>The Technology</h2>
                        <p className={styles.paragraph}>
                            Our name "Autoagenix" reflects our core engine. We utilize proprietary AI to identify influencers who don't just have followers, but have <span className={styles.highlight}>conversion power</span>.
                        </p>
                        <p className={styles.paragraph}>
                            From automated outreach at scale to real-time performance tracking, our tech stack ensures that no sale goes unattributed and no opportunity is missed.
                        </p>
                    </div>
                </div>



                {/* CTA Block */}
                <div className={styles.ctaBlock}>
                    <h2 className={styles.ctaHeading}>Ready to scale with zero financial risk?</h2>
                    <Magnetic>
                        <Link href="/contact" className={styles.ctaBtn} data-cursor="-inverse">
                            Book a Discovery Call ↗
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </main>
    );
}
