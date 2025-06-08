'use client';

import { useState, useEffect } from 'react'; // Importe useState e useEffect
import styles from './loadingScrean.module.css';
import Lottie from "lottie-react";
import loadingScreanAnimation from '../../../public/loadingScrean.json';


export default function LoadingScrean() {
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade do componente

    useEffect(() => {
        const timer = setTimeout(() => { // Define um temporizador
            setIsVisible(false); // Após 5 segundos, define isVisible como false
        }, 4000); // 5000 milissegundos = 5 segundos

        return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado
    }, []); // O array vazio garante que o useEffect seja executado apenas uma vez, na montagem do componente

    if (!isVisible) { // Se isVisible for false, o componente não renderiza nada
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