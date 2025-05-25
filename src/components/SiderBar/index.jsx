// SideBar.jsx
"use client"

import styles from "./SideBar.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import LogoGif from "/public/Logo_animado.gif"
import Logo from "/public/logo.png"
import home from "/public/home.png"
import datas from "/public/datas.png"
import evento from "/public/evento.png"
import contato from "/public/contato.png"

export default function SideBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <div className={styles.SideBarContainer}>
        <div className={styles.contentLimitado}>
          <Image src={Logo} alt="logo" className={styles.logo} />
          
          <nav className={styles.navContainer}>
            <Link href="/"><button className={styles.bntSideBar}><Image src={home} alt="home" className={styles.icon} />Home</button></Link>
            <Link href="/"><button className={styles.bntSideBar}><Image src={datas} alt="datas" className={styles.icon} />Programação</button></Link>
            <Link href="/SobreEvento"><button className={styles.bntSideBar}><Image src={evento} alt="evento" className={styles.icon} />Evento</button></Link>
            <Link href="/"><button className={styles.bntSideBar}><Image src={contato} alt="contato" className={styles.icon} />Contato</button></Link>
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
            <button className={styles.closeBtn} onClick={closeMenu}>×</button>
            <Link href="/"><button className={styles.bntSideBarMobile} onClick={closeMenu}><Image src={home} alt="home" className={styles.icon} />Home</button></Link>
            <Link href="/"><button className={styles.bntSideBarMobile} onClick={closeMenu}><Image src={datas} alt="datas" className={styles.icon} />Programação</button></Link>
            <Link href="/SobreEvento"><button className={styles.bntSideBarMobile} onClick={closeMenu}><Image src={evento} alt="evento" className={styles.icon} />Evento</button></Link>
            <Link href="/"><button className={styles.bntSideBarMobile} onClick={closeMenu}><Image src={contato} alt="contato" className={styles.icon} />Contato</button></Link>
          </div>
        </div>
      )}
    </>
  )
}
