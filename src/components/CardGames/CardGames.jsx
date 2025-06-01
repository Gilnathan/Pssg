import styles from './CardGames.module.css';
import Link from 'next/link';

export default function CardGames({
  title = "Lorem Ipsum",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra, tincidunt augue id, efficitur massa.",
  imageUrl, // This prop will now be the main background image URL
  
  linkPage = "#",
}) {
  return (
    
      <section
        className={styles.card}
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }} // Set background image here
      >
        {/* The image is now a background-image of the card itself */}
        
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </section>
    
  );
}