'use client'

import { useEffect, useState } from "react"
import styles from "./Countdown.module.css"

export default function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-12T00:00:00")
    const now = new Date()
    const difference = targetDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()) // define o valor inicial
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null // ou um loading...

  return (
    <div className={styles.countdownContainer}>
      <h3>Contagem Regressiva</h3>
      <div className={styles.timer}>
        <div><strong>{timeLeft.days}</strong><span>DIAS</span></div>
        <div><strong>{timeLeft.hours}</strong><span>HORAS</span></div>
        <div><strong>{timeLeft.minutes}</strong><span>MIN</span></div>
        <div><strong>{timeLeft.seconds}</strong><span>SEG</span></div>
      </div>
    </div>
  )
}
