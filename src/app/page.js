import Image from "next/image";
import styles from "./page.module.css";


import Main from "@/components/Main";
import Atracoes from "@/components/Atracoes";
import Carrocel from "@/components/Carrocel/Carrocel";
import Card_Discord from "@/components/Card_Discord/Card_Discord";

export default function Home() {
  return (
    <div className={styles.page}>
      <Main />
      <Atracoes />
      <Carrocel />
      <Card_Discord />
      

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}