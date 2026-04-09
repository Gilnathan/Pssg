'use client';

import styles from './page.module.css';
import Image from 'next/image';
import { Calendar, MapPin, X } from 'lucide-react';
import { useState } from 'react';

export default function PageEventosFuturos() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className={styles.containerMain}>
      
      <div className={styles.EventoCard}>
        
        {/* TOPO: Mantém a cor sólida conforme a imagem original */}
        <div className={styles.topEventoCard}>
          <h1>PSSG DEMO X SESC GEEK</h1>

          <div className={styles.infoContainer}>
            <div className={styles.dateSection}>
              <Calendar size={24} className={styles.calendarIcon} />
              <h2>Sábado, 25 abril às 14:00</h2>
            </div>
            <div className={styles.locationSection}>
              <MapPin size={24} className={styles.mapIconTop} />
              <span className={styles.locationText}>Sesc Porto Seguro</span>
              <button 
                className={styles.mapLink}
                onClick={() => setShowMap(true)}
              >
                Ver no mapa
              </button>
            </div>
          </div>
        </div>
        
        {/* CORPO: Onde a imagem de fundo ficará */}
        <div className={styles.bodyEventoCard}>
          
          {/* A IMAGEM DE FUNDO (Cobre apenas esta área) */}
          <Image
            src="/BG3.jpeg"
            alt="Fundo do corpo do card"
            fill // Preenche o elemento pai (.bodyEventoCard)
            priority
            className={styles.bgImageBody}
          />

          {/* CONTEÚDO DO CORPO (Por cima da imagem) */}
          <div className={styles.bodyContent}>
            <p>Um evento aberto ao público criado para fortalecer o movimento cultural geek de Porto Seguro. Será um encontro que reúne fãs de games, anime, k-pop, cosplay e cultura pop em um ambiente de diversão e comunidade.

A programação contará com banda de rock ao vivo, concurso de cosplay, concurso de k-pop, área de games, caravana dos jogos com RPG e jogos de mesa, random play dance e lojas com produtos geek, nerd e pop.

Um evento para reunir amigos, famílias e todos que amam o universo geek... </p>
          </div>
          
          {/* RODAPÉ COM BOTÃO */}
          <div className={styles.footerEventoCard}>
            <div className={styles.badgeGratuita}>
              Entrada Gratuita
              <span className={styles.tooltip}>Entrada com alimentos não perecíveis</span>
            </div>
            <a href="https://uticket.com.br/evento/pssg-demo-x-sesc-geek/01LV3TNO5HN0GC" className={styles.euVouButton} target="_blank" rel="noopener noreferrer">
              EU VOU!
            </a>
          </div>
          
        </div>

      </div>

      {/* MODAL DO MAPA */}
      {showMap && (
        <div className={styles.mapModal} onClick={() => setShowMap(false)}>
          <div className={styles.mapContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowMap(false)}
              aria-label="Fechar mapa"
            >
              <X size={24} />
            </button>
            <div className={styles.mapFrame}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3827.2062666530906!2d-39.0950016!3d-16.414347399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzUxLjciUyAzOcKwMDUnNDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1773791110789!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>



      )}
    </div>
  );
}