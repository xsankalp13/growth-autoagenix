'use client';
import React from 'react';
import styles from './ServicesSection.module.css';
import { Search, TrendingUp, Globe, Heart, DollarSign, Mail } from 'lucide-react';

const services = [
    {
        icon: <Search size={28} />,
        title: "AI-Driven Influencer Discovery",
        description: "We use proprietary automation to identify and vet the perfect influencers for your brand, ensuring authentic alignment."
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Automated Outreach & Onboarding",
        description: "Our system handles the heavy lifting of contacting and onboarding hundreds of influencers at scale."
    },
    {
        icon: <Globe size={28} />,
        title: "End-to-End Program Management",
        description: "From tracking links to payout automation, we manage every technical aspect of your affiliate ecosystem."
    },
    {
        icon: <Heart size={28} />,
        title: "Global Affiliate Scaling",
        description: "We expand your brand into new markets by building localized affiliate networks that understand regional nuances."
    },
    {
        icon: <DollarSign size={28} />,
        title: "Performance-Based Growth",
        description: "Eliminate wasted ad spend. You only pay for verified sales, ensuring a positive ROI on every marketing dollar."
    },
    {
        icon: <Mail size={28} />,
        title: "Strategic Content Guidance",
        description: "We guide your affiliates to create high-converting content that resonates while maintaining your premium identity."
    }
];

export default function ServicesSection() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Data-Driven Performance. Zero Financial Risk.</h2>
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
