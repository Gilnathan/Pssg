// app/page.js ou components/PageCosplay.jsx
"use client"; // ESSENCIAL para usar hooks React e GSAP no lado do cliente

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// Importações GSAP
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import VideoNaMoldura from "@/components/VideoNaMoldura/VideoNaMoldura";
import Card_Discord from "@/components/Card_Discord/Card_Discord";
import ButtonGlobal from "@/components/ButtonGlobal/ButtonGlobal";
import { Car } from "lucide-react";

export default function PageCosplay() {
  const videoURL1 = "Video-K-pop.mp4"; // Já é o caminho correto para public
  const videoURL2 = "Video-K-pop.mp4"; // Usei o mesmo para exemplo

  // 1. Crie referências para os elementos que você quer animar
  const containerRef = useRef(null); // Ref para o contêiner principal (escopo)
  const iphoneRef = useRef(null); // Ref para a div que contém o VideoNaMoldura
  const textoRef = useRef(null); // Ref para a div que contém o título e parágrafo

  // 2. Use o hook useGSAP para definir suas animações
  useGSAP(
    () => {
      // Crie uma timeline para sequenciar as animações
      const tl = gsap.timeline({
        delay: 0.1, // Um pequeno atraso antes da animação começar
      });

      // Animação para o iPhone: desliza da esquerda e aparece
      tl.from(iphoneRef.current, {
        x: -200, // Começa 200px para a esquerda
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animação para o contêiner de texto: desliza da direita e aparece
      tl.from(
        textoRef.current,
        {
          x: 200, // Começa 200px para a direita
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.5",
      ); // Começa 0.5s ANTES do fim da animação anterior (iPhone), para um overlap legal
    },
    { scope: containerRef },
  ); // Defina o escopo da animação para o contêiner principal

  return (
    // 3. Associe as referências aos seus elementos JSX
    <div ref={containerRef} className={styles.container}>
      <div className={styles.containerLimitado}>
        <div ref={iphoneRef}>
          {" "}
          {/* Adicione a ref para a div do iPhone */}
          <VideoNaMoldura videoPath={videoURL1} />
        </div>

        <div ref={textoRef} className={styles.containerTexto}>
          {" "}
          {/* Adicione a ref para a div do texto */}
          <h1 className={styles.tituloEvento}>
            Campeonato de K-Pop (Dance Cover): Mostre Seu Ritmo!
          </h1>
          <p className={styles.textoEvento}>
            Prepare-se para subir ao palco e mostrar todo o seu talento no nosso
            Campeonato de K-Pop (Dance Cover)! Se você e seu grupo têm o ritmo,
            a sincronia e a paixão pelas coreografias mais icônicas do K-Pop,
            esta é a sua chance de brilhar.
          </p>
          <p>
            <strong>
              Venha brilhar no nosso palco e mostrar que o ritmo do K-Pop corre
              nas suas veias!
            </strong>
          </p>
          <ButtonGlobal
            buttonText="Cadastro para concurso"
            href="https://docs.google.com/forms/d/e/1FAIpQLScZPcfWxr2yfiUHz9KSkyp7oXfayeWNhDSkFJ5lt5xldoWYow/viewform"
          />
        </div>
      </div>
    </div>
  );
}
