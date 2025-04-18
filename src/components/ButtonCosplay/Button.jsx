'use client'

import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  const handleClick = () => {
    const audio = new Audio('/sounds/coin.mp3') 
    audio.play()
  }

  return (
    <div className={styles.wrapper}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdErmqihJNqHe_lB34chYdqwFYVrVZLzZCh1Su5qHg5ToNxaw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <button className={styles.animatedButton}>
          <svg viewBox="0 0 24 24" className={styles.arr2} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className={styles.text}>Cadastro para concurso </span>
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
