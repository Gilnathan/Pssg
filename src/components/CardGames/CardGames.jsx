import styles from './CardGames.module.css';
import Link from 'next/link';
import ButtonGlobal from '../ButtonGlobal/ButtonGlobal';

export default function CardGames({
  title = "Lorem Ipsum",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra, tincidunt augue id, efficitur massa.",
  imageUrl,
  linkPage = "#",
  competitive = "Ncompetitivo", // This prop determines if ButtonGlobal appears
}) {
  return (
    <section
      className={styles.card}
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
    >
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
        {/* Conditionally render ButtonGlobal based on the 'competitive' prop */}
        {competitive === "competitivo" && (
          <ButtonGlobal
            className={styles.cardButton}
            text="Play Now"
            link={linkPage}
            buttonText="PARTICIPAR"
          />
        )}
      </div>
      
    </section>
  );
}