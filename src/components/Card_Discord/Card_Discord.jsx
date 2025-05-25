// components/Card_Discord/Card_Discord.jsx
'use client';

import Lottie from 'lottie-react';
import styles from './discordCard.module.css';
import ButtonGlobal from '../ButtonGlobal/ButtonGlobal';

// Se seu componente está em src/components/Card_Discord/Card_Discord.jsx
// e o JSON está em public/Discord_icon.json
import DiscordIconAnimation from '../../../public/Discord_icon.json'; 

export default function Card_Discord() {
    return(
        <div className={styles.container}>
            {/* O card não é mais um link */}
            <div className={styles.card}>
                <div className={styles.containerInfomaçoes}>
                    <div className={styles.lottieIcon}> 
                        <Lottie
                            animationData={DiscordIconAnimation}
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
                        href="https://discord.com/"
                    />
                </div>
            </div>
        </div>
    );
}