import Image from "next/image";
import styles from "./page.module.css";
import Main from "@/components/Main";
import Atracoes from "@/components/Atracoes";
import Carrocel from "@/components/Carrocel/Carrocel";
import Card_Discord from "@/components/Card_Discord/Card_Discord";
import Card_Wpp from "@/components/Card_Wpp/Card_Wpp";
import SessaoGamer from "@/components/SessaoGamer/SessaoGamer";
import SessaoGrupos from "@/components/SessaoGrupos/SessaoGrupos";
import SobreEvento from "@/components/SobreEvento";


export default function Home() {
  return (
    <div className={styles.page}>
      <Main />
      <SobreEvento />
      <Atracoes />
      <Carrocel />
      <SessaoGamer />
      <SessaoGrupos />
      
    
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
