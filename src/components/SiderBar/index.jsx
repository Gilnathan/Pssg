import styles from "./SideBar.module.css"
import Image from "next/image"
import Link from "next/link"

import logo1 from "/public/logo1.png"
import home from "/public/home.png"
import datas from "/public/datas.png"
import evento from "/public/evento.png"
import contato from "/public/contato.png"

export default function SideBar(){
    return(
        <div className={styles.SideBarContainer} >
        <Image src={logo1} alt="logo1" className={styles.logo} />

        <nav className={styles.navContainer}>
             <Link href="/">  <button className={styles.bntSideBar} > <Image src={home}  alt="icone home"  className={styles.icon} /> Home </button> </Link >
             <Link href="/">  <button className={styles.bntSideBar} > <Image src={datas} alt="Ícone Programação" className={styles.icon} /> Programação </button> </Link >
             <Link href="/">  <button className={styles.bntSideBar} > <Image src={evento}  alt="Ícone Evento " className={styles.icon} /> Evento </button> </Link >
             <Link href="/">  <button className={styles.bntSideBar} > <Image src={contato}  alt="Ícone Contato " className={styles.icon} /> Contato </button> </Link >
             
        </nav>
        </div>
    )
}