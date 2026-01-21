'use client';

import { motion } from 'framer-motion';
import styles from './Results.module.css';
import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, Users, Target, Zap, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies } from '@/data/caseStudies';

const stats = [
    { label: 'Generated Revenue', value: '$12M+', icon: <BarChart3 size={24} /> },
    { label: 'Average ROAS', value: '4.8x', icon: <TrendingUp size={24} /> },
    { label: 'Active Partners', value: '150+', icon: <Users size={24} /> },
    { label: 'Market Reach', value: '25M+', icon: <Target size={24} /> },
];

export default function ResultsPage() {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <div className={styles.backgroundGlow} />
                <section className={styles.hero}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Measurable Growth.<br />Unmatched Precision.
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We don't just "manage" affiliate marketing. We engineer high-performance ecosystems that deliver predictable revenue month over month.
                    </motion.p>
                </section>

                <section className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.statIcon} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                                {stat.icon}
                            </div>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </motion.div>
                    ))}
                </section>

                <section className={styles.caseStudiesSection}>
                    <h2 className={styles.sectionTitle}>Success Stories</h2>
                    <div className={styles.caseStudiesGrid}>
                        {caseStudies.map((study, index) => (
                            <Link href={`/results/${study.id}`} key={study.id} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className={styles.caseStudyCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={study.image}
                                            alt={study.brand}
                                            className={styles.caseStudyImage}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.nicheTag}>{study.niche}</span>
                                        <h3 className={styles.brandName}>{study.brand}</h3>
                                        <p className={styles.cardPreview}>{study.challenge.substring(0, 100)}...</p>
                                        <div className={styles.cardFooter}>
                                            View Case Study <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                <motion.section
                    className={styles.ctaSection}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.ctaTitle}>Ready for these results?</h2>
                    <p className={styles.ctaText}>
                        We only work with a limited number of partners at a time to ensure maximum growth focus. Secure your audit today.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Book Your Free Growth Audit <ArrowRight style={{ marginLeft: '8px', display: 'inline' }} size={20} />
                    </Link>
                </motion.section>
            </main>
            <Footer />
        </>
    );
}
