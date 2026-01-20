'use client';

import React, { useEffect } from 'react';
import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import 'mouse-follower/dist/mouse-follower.min.css';

export default function CubertoCursor() {
    useEffect(() => {
        if (typeof window !== 'undefined' && document.body) {
            // Delay initialization to ensure DOM is fully ready
            const timer = setTimeout(() => {
                MouseFollower.registerGSAP(gsap);
                const cursor = new MouseFollower({
                    speed: 0.5,
                    skewing: 1,
                    skewingText: 2,
                    container: document.body,
                    className: 'mf-cursor'
                });

                // Cleanup function inside the timeout
                return () => cursor.destroy();
            }, 100);

            return () => clearTimeout(timer);
        }
    }, []);

    return null;
}
