// components/PhotoAlbum.jsx
import React, { useState } from 'react';
import Image from 'next/image'; // Otimiza o carregamento de imagens no Next.js
import styles from './PhotoAlbum.module.css'; // Usando CSS Modules para estilos

const PhotoAlbum = ({ title, photos }) => {
  const [expandedPhoto, setExpandedPhoto] = useState(null);

  const openExpandedView = (photo) => {
    setExpandedPhoto(photo);
    // Adiciona uma classe ao body para evitar scroll quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
  };

  const closeExpandedView = () => {
    setExpandedPhoto(null);
    // Remove a classe do body
    document.body.style.overflow = 'unset';
  };

  return (
    <section className={styles.photoAlbumSection}>
      {title && <h2 className={styles.albumTitle}>{title}</h2>}

      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <div
            key={photo.id || index} // Usa um ID se disponível, ou o índice
            className={styles.photoItem}
            onClick={() => openExpandedView(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt || `Foto ${index + 1}`}
              width={300} // Largura base para o grid
              height={200} // Altura base para o grid
              layout="responsive" // Mantém a proporção responsiva
              objectFit="cover" // Corta a imagem para cobrir o espaço
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {expandedPhoto && (
        <div className={styles.expandedOverlay} onClick={closeExpandedView}>
          <div className={styles.expandedContent} onClick={(e) => e.stopPropagation()}>
            {/* Permite o clique dentro do conteúdo sem fechar o modal */}
            <button className={styles.closeButton} onClick={closeExpandedView}>
              &times;
            </button>
            <Image
              src={expandedPhoto.src}
              alt={expandedPhoto.alt || 'Foto Expandida'}
              layout="fill" // Preenche o contêiner do modal
              objectFit="contain" // Garante que a imagem inteira seja visível
              className={styles.expandedImage}
            />
            {expandedPhoto.caption && (
              <p className={styles.expandedCaption}>{expandedPhoto.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoAlbum;