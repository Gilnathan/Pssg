import styles from './Card.module.css'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import Link from 'next/link'

export default function Card({
  titulo,
  descricao,
  horario,
  imagem,
  linkPage,
  tituloColor, // New prop for title color
  descricaoColor, // New prop for description color
  stripColor, // New prop for the strip color
}) {
  return (
    <div className={styles.card}>
      {/* New: Customizable colored strip */}
      {stripColor && (
        <div className={styles.topStrip} style={{ backgroundColor: stripColor }}></div>
      )}

      {imagem && (
        <div className={styles.imageWrapper}>
          <Image src={imagem} alt={titulo} fill className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <h3 style={{ color: tituloColor }}>{titulo}</h3>
        <p style={{ color: descricaoColor }}>{descricao}</p>

        <div className={styles.footer}>
          {horario && (
            <div className={styles.horario}>
              <Clock size={16} />
              {horario}
            </div>
          )}
          <Link href={linkPage}>
            {' '}
            <button className={styles.button}>Saiba mais</button>{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}