'use client';

import Lottie from 'lottie-react';
import ButtonGlobal from '../ButtonGlobal/ButtonGlobal';
import styles from './SessaoGrupos.module.css';
import Card_Discord from "@/components/Card_Discord/Card_Discord";
import Card_Wpp from "@/components/Card_Wpp/Card_Wpp"; 

export default function SessaoGrupos() {
  return (
    <section className={styles.sessaoGamer}>
      <Card_Discord />
      <Card_Wpp />
      
    </section>
  );
}