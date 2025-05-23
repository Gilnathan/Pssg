// components/Card_Discord/Card_Discord.jsx
'use client';

import Lottie from 'lottie-react';
import styles from './discordCard.module.css';

// Se seu componente está em src/components/Card_Discord/Card_Discord.jsx
// e o JSON está em public/Discord_icon.json
import DiscordIconAnimation from '../../../public/Discord_icon.json'; 

export default function Card_Discord() {
    return(
        <div className={styles.container} >
            <div className={styles.card}>
                <div className={styles.lottieIcon}> 
                    <Lottie
                        animationData={DiscordIconAnimation}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }} 
                    />
                </div>
                
                        <h2 className={styles.title}>
                             
                        </h2>

                        

                      
            </div>
        </div>
    )
}