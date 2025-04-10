import styles from "./Atracoes.module.css";
import Card from "@/components/Card/Card";

import kpop from "/public/kpop.webp"
import cosplayrs from "/public/cosplayrs1.jpg"
import areagamer from "/public/areagamer.webp"
import gincana from "/public/gincana.jpg"


export default function Atracoes() {
  return (
    <div className={styles.containeratracoes}>
        
      <h2 className={styles.titulo}>
        Atrações <span>Principais</span>
      </h2>
      <div className={styles.containerCards}>
            <Card
              titulo="Campeonato de K-Pop (Dance Cover) "
              descricao="Mostre seu talento na dança! Competições solo e em grupo com premiação."
              imagem={kpop} 
            />

            <Card
              titulo="Concurso de Cosplay"
              descricao="Valendo prêmios! Traga seu melhor personagem à vida e brilhe na passarela."
              imagem={cosplayrs} 
            />

            <Card
              titulo="Área Gamer"
              descricao="Free play + torneios de Naruto, Dragon Ball, Street Fighter e muito mais!"
              imagem={areagamer} 
            />

            <Card
              titulo="Quiz Otaku & Gincanas"
              descricao="Prove que é um verdadeiro fã! Responda perguntas e participe de desafios interativos."
              imagem={gincana} 
            />

      </div>
  




    </div>

      

  )
}
