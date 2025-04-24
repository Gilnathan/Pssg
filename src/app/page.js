import Image from "next/image";
import styles from "./page.module.css";


import Main from "@/components/Main";
import Atracoes from "@/components/Atracoes";
import Evento from "@/components/Evento";
import Carrocel from "@/components/Carrocel/Carrocel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Main />
      <Atracoes />
      <Carrocel />
      <Atracoes />

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
