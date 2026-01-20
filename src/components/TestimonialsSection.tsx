'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './TestimonialsSection.module.css';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "As a small business owner, I was initially overwhelmed by the idea of managing our online presence. Partnering with AutoAgenix was a game-changer for us. They developed a tailored strategy that not only increased our website traffic but also significantly boosted our social media engagement.",
        name: "Sarah L",
        designation: "CEO of NuHealth",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        quote: "What I appreciate most is their transparency and dedication to our success. They are always available to answer questions and makes us feel like we have a true partner. We couldn't be happier with the results. I highly recommend them to any business looking to grow.",
        name: "John Lynn",
        designation: "Founder of TechFlow",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        quote: "The ROI we've seen since working with AutoAgenix has been incredible. Their PPC campaigns effectively targeted our ideal customers, lowering our cost per acquisition while increasing sales volume. Their team is professional, data-driven, and results-oriented.",
        name: "Emily Chen",
        designation: "Marketing Director at EcoStyle",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        quote: "From SEO to content marketing, they handled everything seamlessly. Our organic traffic has doubled in just six months, and the quality of leads has improved dramatically. It's rare to find an agency that delivers exactly what they promise.",
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
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>What client says</h2>
                <div className={styles.controls}>
                    <button
                        className={styles.controlBtn}
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className={styles.controlBtn}
                        onClick={handleNext}
                        disabled={currentIndex >= testimonials.length - 2} // Disable when at end (showing 2)
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
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
