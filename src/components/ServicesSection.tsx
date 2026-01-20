'use client';
import React from 'react';
import styles from './ServicesSection.module.css';
import { Search, TrendingUp, Globe, Heart, DollarSign, Mail } from 'lucide-react';

const services = [
    {
        icon: <Search size={28} />,
        title: "Search Engine Optimization (SEO)",
        description: "We employ ultimate strategic SEO to enhance your website's ranking world wide."
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Conversion Rate Optimization (CRO)",
        description: "We employ ultimate strategic SEO to enhance your website's ranking world wide."
    },
    {
        icon: <Globe size={28} />,
        title: "Online Reputation Management (ORM)",
        description: "We employ ultimate strategic SEO to enhance your website's ranking world wide."
    },
    {
        icon: <Heart size={28} />,
        title: "Social Media Marketing",
        description: "We employ ultimate strategic SEO to enhance your website's ranking world wide."
    },
    {
        icon: <DollarSign size={28} />,
        title: "Pay Per Click (PPC)",
        description: "We employ ultimate strategic SEO to enhance your website's ranking world wide."
    },
    {
        icon: <Mail size={28} />,
        title: "Email Marketing Automation",
        description: "We employ ultimate strategic SEO to enhance your website's ranking world wide."
    }
];

export default function ServicesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>We provide our customer the finest service available</h2>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {service.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
