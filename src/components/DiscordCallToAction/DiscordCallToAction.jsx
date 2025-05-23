// components/DiscordCallToAction.jsx

import React from 'react';
import styles from './DiscordCallToAction.module.css'; // Importa os estilos CSS Modules

const DiscordCallToAction = () => {
  return (
    <div className={styles.discordCallToAction}>
      <h2 className={styles.title}>
        🚀 Embarque na Aventura no Discord! 🚀
      </h2>

      <p className={styles.text}>
        Preparado para elevar seu <span className={styles.highlightGreen}>nível de poder</span> e se juntar à nossa{' '}
        <span className={styles.highlightGreen}>aldeia escondida</span> no Discord?
      </p>

      <p className={styles.text}>
        Entre para o nosso{' '}
        <span className={styles.highlightYellow}>bando pirata</span> e faça parte
        da nossa comunidade de{' '}
        <span className={styles.highlightBlue}>heróis</span> e{' '}
        <span className={styles.highlightPink}>magos</span>! Lá você encontrará:
      </p>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          ✨ **Missões diárias** e desafios para testar suas habilidades otaku!
        </li>
        <li className={styles.listItem}>
          💬 Canais para discutir seus animes, mangás e jogos favoritos – de{' '}
          <span className={styles.highlightRed}>shonen</span> a{' '}
          <span className={styles.highlightPurple}>isekai</span>!
        </li>
        <li className={styles.listItem}>
          🏆 Eventos exclusivos,{' '}
          <span className={styles.highlightGray}>torneios de FIFA</span> e{' '}
          <span className={styles.highlightPink}>campeonatos de K-Pop</span> para
          mostrar seu talento! [cite: 2, 3, 11, 12]
        </li>
        <li className={styles.listItem}>
          🤝 Novos amigos para formar sua própria{' '}
          <span className={styles.highlightOrange}>guilda</span>!
        </li>
      </ul>

      <p className={styles.text}>
        Não fique de fora dessa{' '}
        <span className={styles.highlightGold}>jornada épica</span>! Clique no
        botão abaixo e venha fazer parte da nossa{' '}
        <span className={styles.highlightDarkRed}>Akatsuki</span> (mas sem os planos
        malignos, claro)!
      </p>

      <a
        href="https://discord.gg/seu-link-do-discord" // Substitua pelo link real do seu Discord
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        🔗 ENTRAR NO DISCORD
      </a>
    </div>
  );
};

export default DiscordCallToAction;