// components/ButtonGlobal/ButtonGlobal.jsx
'use client'

import React from 'react';
import styles from './ButtonGlobal.module.css'; // Mudei para um novo arquivo de CSS modular
                                                  // para evitar conflitos com o Button.jsx original.
                                                  // Você pode renomear Button.module.css para ButtonGlobal.module.css

const ButtonGlobal = ({ buttonText = "Clique Aqui", href = "#" }) => { // Adicionei props com valores padrão
  const handleClick = () => {
    // Tenta reproduzir o som, mas previne erro se o arquivo não existir
    const audio = new Audio('/sounds/coin.mp3'); 
    audio.play().catch(e => console.error("Erro ao reproduzir som:", e));
  };

  return (
    <div className={styles.wrapper}>
      <a
        href={href} // Usa a prop href
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <button className={styles.animatedButton}>
          <svg viewBox="0 0 24 24" className={styles.arr2} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className={styles.text}> {buttonText} </span> {/* Usa a prop buttonText */}
          <span className={styles.circle}></span>
          <svg viewBox="0 0 24 24" className={styles.arr1} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default ButtonGlobal;