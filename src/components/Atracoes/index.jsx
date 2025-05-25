// components/Atracoes/Atracoes.jsx
"use client";

import styles from "./Atracoes.module.css";
import Card from "@/components/Card/Card";

import kpop from "/public/kpop.webp";
import cosplayrs from "/public/cosplayrs1.jpg";
import areagamer from "/public/areagamer.webp";
import gincana from "/public/gincana.jpg";

import Countdown from "../Countdown/Countdown";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Importe o ScrollTrigger!

export default function Atracoes() {
  const containerAtracoesRef = useRef(null);
  const tituloRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Registre o plugin ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // 2. Crie uma timeline para coordenar as animações do título e dos cards
      const tl = gsap.timeline({
        // Configurações do ScrollTrigger para a timeline
        scrollTrigger: {
          trigger: containerAtracoesRef.current, // O elemento que "dispara" a animação
          start: "top 80%", // Quando o topo do container atinge 80% da altura da viewport
          // end: "bottom top", // (Opcional) Define onde a animação termina se for scrub
          // scrub: true, // (Opcional) Animação sincronizada com o scroll (suave)
          toggleActions: "play none none none", // Quando o trigger entra na viewport, a animação 'play'
          // markers: true, // Apenas para depuração, remova em produção!
        },
      });

      // 3. Adicione as animações à timeline
      tl.from(tituloRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          cardsContainerRef.current.children,
          {
            opacity: 0,
            y: 50,
            stagger: 0.2, // Cada card aparece com um atraso de 0.2 segundos
            duration: 0.8,
            ease: "power2.out",
          },
          "<0.2" // Começa a animação dos cards 0.2 segundos antes do final da animação do título
        );
    },
    { scope: containerAtracoesRef }
  );

  return (
    <div ref={containerAtracoesRef} className={styles.containeratracoes}>
      <div className={styles.containerTitulo}>  
      <h2 ref={tituloRef} className={styles.titulo}>
        Mostre Seu <span>Talento</span>
      </h2>
      <h3>K-Pop, Cosplay, Games e muito mais esperam por você!</h3>
      </div>
      

      <div ref={cardsContainerRef} className={styles.containerCards}>
        <div className={styles.Card1}>
          <Card
            titulo="Campeonato de K-Pop (Dance Cover)"
            descricao="Solte o talento no palco com performances incríveis de K-Pop! Participe sozinho ou com seu grupo e concorra a prêmios mostrando sua paixão pela dança coreana."
            imagem={kpop}
            linkPage="/Page_K-Pop"
          />
        </div>

        <div className={styles.Card2}>
          <Card
            titulo="Concurso Cosplay & Cospobre"
            descricao="Seja com armadura digna de cinema ou papelão e muita criatividade — o importante é se divertir! Mostre sua caracterização, desfile no palco e concorra a prêmios em duas categorias: Cosplay e Cospobre!"
            imagem={cosplayrs}
            linkPage="/Page_cosplay"
          />
        </div>

        <div className={styles.Card3}>
          <Card
            titulo="Área Gamer"
            descricao="Diversão garantida para todos os estilos de jogador! Entre na vibe com partidas de MTK, mostre seus passos no Just Dance e dispute nos gramados virtuais do FIFA. É só chegar e jogar!"
            imagem={areagamer}
            linkPage="/evento-cosplay"
          />
        </div>

        <div className={styles.Card4}>
          <Card
            titulo="Quiz Otaku & Gincanas"
            descricao="Você é um otaku raiz? Prove seus conhecimentos em nossos quizzes interativos e encare gincanas cheias de desafios. Diversão garantida para todas as idades!."
            imagem={gincana}
            linkPage="/evento-cosplay"
          />
        </div>
      </div>
    </div>
  );
}