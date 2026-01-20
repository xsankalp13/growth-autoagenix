'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './FloatingCharacter.module.css';

export default function FloatingCharacter() {
    const containerRef = useRef(null);

    return (
        <div className={styles.container} ref={containerRef}>
            <motion.div
                className={styles.characterWrapper}
                animate={{
                    y: [-15, 15, -15],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/character.png"
                        alt="Flying Character"
                        width={800}
                        height={1000}
                        priority
                        className={styles.characterImage}
                    />
                </div>
            </motion.div>
        </div>
    );
}
