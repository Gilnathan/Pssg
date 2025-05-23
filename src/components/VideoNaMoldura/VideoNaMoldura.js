// components/VideoNaMoldura/VideoNaMoldura.jsx
import React from 'react';
import styles from './VideoNaMoldura.module.css'; // Importe o arquivo de estilos CSS Module

function VideoNaMoldura({ videoPath }) {
  // A URL para arquivos na pasta 'public' começa com '/'
  // Garante que o caminho do vídeo seja correto, mesmo se não começar com '/'
  const videoURL = videoPath.startsWith('/') ? videoPath : `/${videoPath}`;

  return (
    <div className={styles.iphoneMoldura}>
      {/* Botões laterais e entalhe (notch) */}
      <div className={styles.notch}>
        <div className={styles.speaker}></div>
        <div className={styles.camera}></div>
      </div>
      <div className={styles.silentSwitch}></div>
      <div className={styles.volumeUpButton}></div>
      <div className={styles.volumeDownButton}></div>
      <div className={styles.powerButton}></div>

      {/* Tela do iPhone onde o vídeo será exibido */}
      <div className={styles.iphoneScreen}>
        <video
          className={styles.videoPlayer}
          src={videoURL}
          controls // Mantenha os controles se desejar que o usuário interaja
          loop
          muted // Essencial para autoplay em muitos navegadores
          playsInline // Essencial para autoplay em iOS
          autoPlay // Adiciona o atributo para autoplay
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </div>
  );
}

export default VideoNaMoldura;