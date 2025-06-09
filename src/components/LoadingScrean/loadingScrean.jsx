'use client';

import { useState, useEffect } from 'react';
import styles from './loadingScrean.module.css';
import Lottie from "lottie-react";
import loadingScreanAnimation from '../../../public/loadingScrean.json';

export default function LoadingScrean() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if the loading screen has been shown in this session
        const hasBeenShown = sessionStorage.getItem('loadingScreenShown');

        if (hasBeenShown) {
            setIsVisible(false); // If it has been shown, hide it immediately
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('loadingScreenShown', 'true'); // Mark as shown after it disappears
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.lottieIcon}>
                <Lottie
                    animationData={loadingScreanAnimation}
                    loop={false}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
}