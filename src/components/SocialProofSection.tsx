
import React from 'react';
import styles from './SocialProofSection.module.css';
import { Rocket, BarChart3, Users } from 'lucide-react';

export default function SocialProofSection() {
    return (
        <section className={styles.section}>
            {/* Top Row: Trusted Brands */}
            <div className={styles.brandsRow}>
                <div className={styles.brandsTitle}>Trusted by Thousand top brands</div>
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
                    Our flexible team has a wide range of skills, which lets us look at projects from a complete point of view that combines creativity <span className={styles.emoji}>🎨</span> and usefulness <span className={styles.emoji}>✨</span>.
                </h2>
            </div>

            {/* Bottom Row: Stats and Features */}
            <div className={styles.statsContainer}>
                <div className={styles.introRow}>
                    <div className={styles.introLeft}>
                        <h3 className={styles.introTitle}>Bring in targeted visitors and increase sales.</h3>
                        <div className={styles.contactContainer}>
                            <button className={styles.contactBtn}>Contact US</button>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>12<sup className={styles.statPlus}>+</sup></span>
                            <span className={styles.statLabel}>Year Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>4.3K<sup className={styles.statPlus}>+</sup></span>
                            <span className={styles.statLabel}>Total Revenue</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>40<sup className={styles.statPlus}>+</sup></span>
                            <span className={styles.statLabel}>Professional Team</span>
                        </div>
                    </div>
                </div>

                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Rocket size={24} /></div>
                        <strong className={styles.cardTitle}>Increase Traffic</strong>
                        <p className={styles.cardDescription}>
                            Our expertise will help you to improve visibility in search engine results.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><BarChart3 size={24} /></div>
                        <strong className={styles.cardTitle}>Improved Rankings</strong>
                        <p className={styles.cardDescription}>
                            We employ ultimate strategic SEO to enhance your website's ranking worldwide.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Users size={24} /></div>
                        <strong className={styles.cardTitle}>Targeted Audience</strong>
                        <p className={styles.cardDescription}>
                            We focus on targeting specific keywords to attract your ideal audience.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
}
