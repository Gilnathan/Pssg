'use client';

import React from 'react';
import { Mail, Phone, Instagram, Copyright } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      {/* Container Principal */}
      <div className={styles.container}>
        {/* Grid Responsivo */}
        <div className={styles.grid}>
          {/* Coluna 1: Sobre o Evento */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>PSSG</h3>
            <p className={styles.description}>
              Porto Seguro Summer Geek - Celebrando a cultura geek e gamer com estilo e diversão.
            </p>
            {/* CNPJ */}
            <div className={styles.cnpjContainer}>
              <p className={styles.cnpjLabel}>CNPJ</p>
              <p className={styles.cnpjValue}>54.875.674/0001-69</p>
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contato</h3>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511964460786"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <div className={styles.iconWrapper}>
                <Phone className={`${styles.icon} ${styles.whatsappIcon}`} />
              </div>
              <span className={styles.linkText}>+55 11 96446-0786</span>
            </a>

            {/* Email */}
            <a
              href="mailto:Ps.summergeek@gmail.com"
              className={styles.contactLink}
              aria-label="Email"
            >
              <div className={styles.iconWrapper}>
                <Mail className={`${styles.icon} ${styles.emailIcon}`} />
              </div>
              <span className={styles.linkText}>Ps.summergeek@gmail.com</span>
            </a>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Siga-nos</h3>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ps_summergeek/"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div className={styles.iconWrapper}>
                <Instagram className={`${styles.icon} ${styles.instagramIcon}`} />
              </div>
              <div className={styles.socialInfo}>
                <span className={styles.linkText}>@ps_summergeek</span>
              </div>
            </a>

            {/* Espaço vazio */}
            <div className={styles.socialNote}>
              Acompanhe nossos eventos e notícias!
            </div>
          </div>
        </div>

        {/* Divisor Decorativo */}
        <div className={styles.divider}></div>

        {/* Rodapé com Copyright */}
        <div className={styles.bottomFooter}>
          {/* Copyright */}
          <div className={styles.copyright}>
            <Copyright className={styles.copyrightIcon} />
            <span>
              © {currentYear} PSSG - Porto Seguro Super Geek. Todos os direitos reservados.
            </span>
          </div>

          {/* Badges/Tecnologias */}
          
        </div>
      </div>

      {/* Efeito de brilho decorativo */}
      <div className={styles.glowEffect}></div>
    </footer>
  );
}
