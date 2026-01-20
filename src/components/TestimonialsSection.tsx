'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './TestimonialsSection.module.css';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Magnetic from './Magnetic';

const testimonials = [
    {
        id: 1,
        quote: "We were looking for a way to scale our influencer presence without burning through a monthly retainer. Growth Autoagenix set up our entire affiliate ecosystem and within the first month, we saw a 40% increase in attributed sales with zero upfront cost.",
        name: "Sarah L",
        designation: "Head of Growth at NuHealth",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        quote: "The automation is what sets them apart. They onboarded over 100 influencers for our latest launch in under two weeks. Managing payouts and tracking used to be a nightmare, but their system makes it completely hands-off for our team.",
        name: "John Lynn",
        designation: "Founder of TechFlow",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        quote: "Growth Autoagenix delivered the most transparent ROI we've ever seen from an agency. Since we only pay on sales, it's a completely risk-free partnership. They've become an essential extension of our marketing department.",
        name: "Emily Chen",
        designation: "Director of Marketing at EcoStyle",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        quote: "Their focus on high-tier influencers is unmatched. We aren't just getting sales; we're building long-term brand equity with partners who actually care about our mission. The automated outreach feels incredibly personal and authentic.",
        name: "Michael Ross",
        designation: "COO of VentureLoop",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 50; // Percentage width for desktop calculation approx
    const gap = 40; // px

    // Determine how many items to show based on screen width would be ideal, 
    // but for simplicity with framer motion, we'll slide by index.

    const handleNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className={styles.section} id="results">
            <div className={styles.header}>
                <h2 className={styles.title}>Results Speak Louder</h2>
                <div className={styles.controls}>
                    <Magnetic>
                        <button
                            className={styles.controlBtn}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous testimonial"
                            data-cursor-stick
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </Magnetic>
                    <Magnetic>
                        <button
                            className={styles.controlBtn}
                            onClick={handleNext}
                            disabled={currentIndex >= testimonials.length - 2} // Disable when at end (showing 2)
                            aria-label="Next testimonial"
                            data-cursor-stick
                        >
                            <ChevronRight size={24} />
                        </button>
                    </Magnetic>
                </div>
            </div>

            <div className={styles.sliderContainer}>
                <motion.div
                    className={styles.track}
                    animate={{
                        x: `-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2))}%)`
                        // Note: A more robust responsive offset calculation would be better, 
                        // but sticking to simple % translation for now. 
                        // Actually, let's use a simpler transform approach.
                    }}
                    style={{
                        transform: `translateX(-${currentIndex * 520}px)` // Rough fixed width slide for MVP, or better:
                    }}
                >
                    {/* 
                       Better approach for responsive slider without complex window listeners in this simplified context:
                       We will just animate the x position based on index * (card width + gap).
                       Assuming card takes 50% minus gap on desktop.
                     */}
                </motion.div>

                {/* Re-implementing simplified slider logic */}
                <SliderContent currentIndex={currentIndex} />
            </div>
        </section>
    );
}

function SliderContent({ currentIndex }: { currentIndex: number }) {
    // Helper component to handle responsive measure if needed, 
    // but let's stick to a clean CSS grid/flex translation.

    return (
        <motion.div
            className={styles.track}
            animate={{
                x: `calc(-${currentIndex} * (min(100%, 50%) + 20px))` // Logic: Slide by 1 card width + half gap approx
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {testimonials.map((item) => (
                <div key={item.id} className={styles.card}>
                    <p className={styles.quote}>“{item.quote}”</p>
                    <div className={styles.author}>
                        <img src={item.image} alt={item.name} className={styles.avatar} />
                        <div className={styles.authorInfo}>
                            <span className={styles.name}>{item.name}</span>
                            <span className={styles.designation}>{item.designation}</span>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}
