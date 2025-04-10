import styles from './Card.module.css'
import Image from 'next/image'
import { Clock } from 'lucide-react'

export default function Card({
  titulo,
  descricao,
  horario,
  imagem,
}) {
  return (
    <div className={styles.card}>
      
      {imagem && (
        <div className={styles.imageWrapper}>
          <Image
            src={imagem}
            alt={titulo}
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <div className={styles.footer}>
          
        <button className={styles.button}>Saiba mais</button>
        </div>
        
      </div>
      
    </div>
  )
}
