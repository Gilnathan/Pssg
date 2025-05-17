import React from 'react';
import styles from './VideoNaMoldura.module.css'; // Importe o arquivo de estilos CSS Module

function VideoNaMoldura({ videoPath }) {
  // A URL para arquivos na pasta 'public' começa com '/'
  const videoURL = videoPath.startsWith('/') ? videoPath : `/${videoPath}`;

  return (
    <div className={styles.moldura}>
      <div className={styles.telaVertical}>
        <video
          className={styles.videoVertical}
          src={videoURL}
          controls // Mantenha os controles se desejar que o usuário interaja
          loop
          muted // Essencial para autoplay em muitos navegadores
          playsInline
          autoPlay // Adiciona o atributo para autoplay
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
      <div className={styles.altoFalanteVertical}></div>
      <div className={styles.botoesVerticais}>
        
      </div>
    </div>
  );
}

export default VideoNaMoldura;