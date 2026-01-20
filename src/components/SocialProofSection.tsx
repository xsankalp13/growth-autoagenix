
import React from 'react';
import styles from './SocialProofSection.module.css';
import { Rocket, BarChart3, Users } from 'lucide-react';

export default function SocialProofSection() {
    return (
        <section className={styles.section}>
            {/* Top Row: Trusted Brands */}
            <div className={styles.brandsRow}>
                <div className={styles.brandsTitle}>Trusted by established brands scaling with influence</div>
                <div className={styles.brandsList}>
                    <div className={styles.brand}><span>❖</span> slack</div>
                    <div className={styles.brand}><span>🎥</span> zoom</div>
                    <div className={styles.brand}><span>🏠</span> airbnb</div>
                    <div className={styles.brand}><span>🎧</span> Spotify</div>
                    <div className={styles.brand}><span>🍃</span> envato</div>
                </div>
            </div>

            {/* Middle Row: About Text */}
            <div className={styles.aboutSection}>
                <h2 className={styles.mainText}>
                    Our automated systems and expert management provide a 360-degree approach to affiliate marketing, combining AI-driven precision <span className={styles.emoji}>🤖</span> with performance-led growth <span className={styles.emoji}>📈</span>.
                </h2>
            </div>

            {/* Bottom Row: Stats and Features */}
            <div className={styles.statsContainer}>
                <div className={styles.introRow}>
                    <div className={styles.introLeft}>
                        <h3 className={styles.introTitle}>Bring in targeted organic traffic and increase sales.</h3>
                        <div className={styles.contactContainer}>
                            <button className={styles.contactBtn}>Book a Call</button>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100<sup className={styles.statPlus}>%</sup></span>
                            <span className={styles.statLabel}>Risk-Free</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>$0<sup className={styles.statPlus}></sup></span>
                            <span className={styles.statLabel}>Upfront Fees</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500<sup className={styles.statPlus}>+</sup></span>
                            <span className={styles.statLabel}>Partners Joined</span>
                        </div>
                    </div>
                </div>

                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Rocket size={24} /></div>
                        <strong className={styles.cardTitle}>Automated Outreach</strong>
                        <p className={styles.cardDescription}>
                            Our AI agents handle hundreds of personalized influencer conversations simultaneously.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><BarChart3 size={24} /></div>
                        <strong className={styles.cardTitle}>Performance Only</strong>
                        <p className={styles.cardDescription}>
                            You only pay for verified sales. No complex retainers, just pure revenue growth.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Users size={24} /></div>
                        <strong className={styles.cardTitle}>Niche Influence</strong>
                        <p className={styles.cardDescription}>
                            We filter for quality, ensuring your brand is represented by authority figures in your niche.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
}
