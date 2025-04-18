"use client";

import styles from "./Atracoes.module.css";
import Card from "@/components/Card/Card";

import kpop from "/public/kpop.webp"
import cosplayrs from "/public/cosplayrs1.jpg"
import areagamer from "/public/areagamer.webp"
import gincana from "/public/gincana.jpg"

import Countdown from "../Countdown/Countdown";



export default function Atracoes() {



  return (

    <div className={styles.containeratracoes}>
  

      <h2 className={styles.titulo}>
        Atrações <span>Principais</span>
      </h2>

      <div className={styles.containerCards}>

            



            <Card
              titulo="Campeonato de K-Pop (Dance Cover)"
              descricao="Solte o talento no palco com performances incríveis de K-Pop! Participe sozinho ou com seu grupo e concorra a prêmios mostrando sua paixão pela dança coreana."
              imagem={kpop} 
            />

            <Card
              titulo="Concurso Cosplay & Cospobre"
              descricao="Seja com armadura digna de cinema ou papelão e muita criatividade — o importante é se divertir! Mostre sua caracterização, desfile no palco e concorra a prêmios em duas categorias: Cosplay e Cospobre!"
              imagem={cosplayrs} 
            />

            <Card
              titulo="Área Gamer"
              descricao="Diversão garantida para todos os estilos de jogador! Entre na vibe com partidas de MTK, mostre seus passos no Just Dance e dispute nos gramados virtuais do FIFA. É só chegar e jogar!"
              imagem={areagamer} 
            />

            <Card
              titulo="Quiz Otaku & Gincanas"
              descricao="Você é um otaku raiz? Prove seus conhecimentos em nossos quizzes interativos e encare gincanas cheias de desafios. Diversão garantida para todas as idades!."
              imagem={gincana} 
            />

      </div>
  




    </div>

      

  )
}
