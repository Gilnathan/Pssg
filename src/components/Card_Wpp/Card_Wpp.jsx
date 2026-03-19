// components/Card_Discord/Card_Discord.jsx
'use client';

import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import styles from './Card_Wpp.module.css';
import ButtonGlobal from '../ButtonGlobal/ButtonGlobal';

export default function Card_Wpp() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/Whatsapp_icon.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error('Erro ao carregar animação WhatsApp:', err));
    }, []);

    if (!animationData) return null;
    return(
        <div className={styles.container}>
            
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
                            Nosso Grupo no  <span>WhatsApp!</span>
                        </h2>
                        <h3>Entre agora para receber comunicados instantâneos e ficar por dentro de tudo que acontece no evento.</h3>
                    </div>

                    <ButtonGlobal
                        buttonText="ENTRAR"
                        href="https://chat.whatsapp.com/L8dZfW7ytBF9dfdg8BI0MA"
                    />
                </div>
            </div>
        </div>
    );
}