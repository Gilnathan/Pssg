// SideBar.jsx
"use client";

import styles from "./SideBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Camera } from "lucide-react";

export default function SideBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className={styles.SideBarContainer}>
        <div className={styles.contentLimitado}>
          <Image src="/logo.png" alt="logo" className={styles.logo} width={100} height={100} />

          <nav className={styles.navContainer}>
            <Link href="/">
              <button className={styles.bntSideBar}>
                <Image src="/home.png" alt="home" className={styles.icon} width={24} height={24} />
                Home
              </button>
            </Link>
            <Link href="/Page_EventosFuturos">
              <button className={styles.bntSideBar}>
                <Image src="/datas.png" alt="datas" className={styles.icon} width={24} height={24} />
                Eventos Futuros
              </button>
            </Link>
            <Link href="/SobreEvento">
              <button className={styles.bntSideBar}>
                <Image src="/evento.png" alt="evento" className={styles.icon} width={24} height={24} />
                Evento
              </button>
            </Link>
            <Link href="/Fotos">
              <button className={styles.bntSideBar}>
                <Camera size={24} style={{ color: "#ffffff" }} />
                Fotos
              </button>
            </Link>
<Link href="#footer">
              <button className={styles.bntSideBar}>
                <Image src="/contato.png" alt="contato" className={styles.icon} width={24} height={24} />
                Contato
              </button>
            </Link>
          </nav>

          <div className={styles.menuIcon} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMenu}>
          <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeMenu}>
              ×
            </button>
            <Link href="/">
              <button className={styles.bntSideBarMobile} onClick={closeMenu}>
                <Image src="/home.png" alt="home" className={styles.icon} width={24} height={24} />
                Home
              </button>
            </Link>
            <Link href="/Page_EventosFuturos">
              <button className={styles.bntSideBarMobile} onClick={closeMenu}>
                <Image src="/datas.png" alt="datas" className={styles.icon} width={24} height={24} />
                Eventos Futuros
              </button>
            </Link>
            <Link href="/SobreEvento">
              <button className={styles.bntSideBarMobile} onClick={closeMenu}>
                <Image src="/evento.png" alt="evento" className={styles.icon} width={24} height={24} />
                Evento
              </button>
            </Link>
            <Link href="/Fotos">
              <button className={styles.bntSideBarMobile} onClick={closeMenu}>
                <Camera size={24} style={{ color: "#ffffff" }} />
                Fotos
              </button>
            </Link>
            <Link href="#footer">
              <button className={styles.bntSideBarMobile} onClick={closeMenu}>
                <Image src="/contato.png" alt="contato" className={styles.icon} width={24} height={24} />
                Contato
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
