// components/Card_Discord/Card_Discord.jsx
'use client';

import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import styles from './discordCard.module.css';
import ButtonGlobal from '../ButtonGlobal/ButtonGlobal';

export default function Card_Discord() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/Discord_icon.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error('Erro ao carregar animação Discord:', err));
    }, []);

    if (!animationData) return null;
    return(
        <div className={styles.container}>
            {/* O card não é mais um link */}
            <div className={styles.card}>
                <div className={styles.containerInfomaçoes}>
                    <div className={styles.lottieIcon}> 
                        <Lottie
                            animationData={animationData}
                            loop={true}
                            autoplay={true}
                            style={{ width: '100%', height: '100%' }} 
                        />
                    </div>
                    <div className={styles.containerTitulo}> 
                        <h2 className={styles.titulo}>
                            Entre no Nosso <span>Discord!</span>
                        </h2>
                        <h3>Bate-papos, debates, jogos e tudo sobre animes e nosso evento num só lugar.</h3>
                    </div>

                    <ButtonGlobal
                        buttonText="ENTRAR"
                        href="https://discord.gg/Tyj7aMGS"
                    />
                </div>
            </div>
        </div>
    );
}