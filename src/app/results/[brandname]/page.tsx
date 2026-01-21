'use client';

import { useParams } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import { motion } from 'framer-motion';
import styles from './CaseStudy.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';

export default function CaseStudyPage() {
    const params = useParams();
    const brandId = params.brandname as string;

    const study = caseStudies.find(s => s.id === brandId);

    if (!study) {
        return (
            <div className={styles.container}>
                <h1>Case Study Not Found</h1>
                <Link href="/results">Back to Results</Link>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/results" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Success Stories
                    </Link>
                </motion.div>

                <header className={styles.header}>
                    <motion.span
                        className={styles.niche}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {study.niche}
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {study.brand}: Scaling Success
                    </motion.h1>
                </header>

                <motion.div
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <img src={study.image} alt={study.brand} className={styles.heroImage} />
                </motion.div>

                <section className={styles.resultsStrip}>
                    {study.results.map((result, index) => (
                        <motion.div
                            key={index}
                            className={styles.resultItem}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (index * 0.1) }}
                        >
                            <span className={styles.resultValue}>{result.value}</span>
                            <span className={styles.resultLabel}>{result.label}</span>
                        </motion.div>
                    ))}
                </section>

                <div className={styles.contentGrid}>
                    <motion.div
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>The Challenge</h2>
                        <p>{study.challenge}</p>
                    </motion.div>

                    <motion.div
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2>The Strategy</h2>
                        <p>{study.strategy}</p>
                    </motion.div>

                    <motion.div
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Execution</h2>
                        <p>{study.execution}</p>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Get Results Like {study.brand}</h2>
                    <p>Stop guessing your growth. Let us engineer your affiliate ecosystem for maximum impact.</p>
                    <Link href="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#fff',
                        color: '#000',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        marginTop: '2rem'
                    }}>
                        Book Your Roadmap Call <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </main>
            <Footer />
        </>
    );
}
