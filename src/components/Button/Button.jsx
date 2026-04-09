'use client'

import React from 'react'
import styles from './Button.module.css'
import Image from 'next/image'

const Button = () => {
  const handleClick = () => {
    const audio = new Audio('/sounds/coin.mp3') 
    audio.play()
  }

  return (
    <div className={styles.wrapper}>
      <a
        href="https://uticket.com.br/evento/pssg-demo-x-sesc-geek/01LV3TNO5HN0GC"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <button className={styles.animatedButton}>
          <svg viewBox="0 0 24 24" className={styles.arr2} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className={styles.text}>
            
            <Image
              src="/Coinvideogame.png"
              className={styles.Coinvideogame}
              alt="Ícone de moeda de videogame" // Texto alternativo adicionado aqui
              width={50} // Adicione a largura e altura intrínsecas da imagem
              height={50} // para evitar o layout shift
            />
            GARANTIR INGRESSO
          </span>
          <span className={styles.circle}></span>
          <svg viewBox="0 0 24 24" className={styles.arr1} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </a>
    </div>
  )
}

export default Button