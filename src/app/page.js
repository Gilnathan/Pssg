import Image from "next/image";
import styles from "./page.module.css";


import Main from "@/components/Main";
import Atracoes from "@/components/Atracoes";
import Evento from "@/components/Evento";

export default function Home() {
  return (
    <div className={styles.page}>
      <Main />
      <Atracoes />
      <Evento />
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
