"use client";

import styles from "./page.module.css";
import Image from 'next/image';
import Button from "@/components/Button/Button";
import VideoNaMoldura from "@/components/VideoNaMoldura/VideoNaMoldura";
import Carrocel from "@/components/Carrocel/Carrocel";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import cosplayrPrincipal from '/public/cosplayrPrincipal.png';
import img1 from '/public/foto1.png';
import img2 from '/public/foto2.png';
import img3 from '/public/foto3.png';
import img4 from '/public/foto4.png';
import img5 from '/public/foto5.png';

export default function Evento(){
    // Crie as referências para os elementos que você quer animar
    const containerEventoRef = useRef(null); // Ref para o contêiner principal (escopo)
    const videoMolduraRef = useRef(null);    // Ref para a div que contém o VideoNaMoldura
    const textoContainerRef = useRef(null);  // Ref para a div que contém o título e parágrafo

    // Use o hook useGSAP para definir suas animações
    useGSAP(() => {
        // Crie uma timeline para sequenciar as animações
        const tl = gsap.timeline({
            delay: 0.1, // Pequeno atraso antes da animação começar
            // Opcional: Se você quiser que a animação só comece quando o componente entrar na viewport, adicione ScrollTrigger
            // scrollTrigger: {
            //     trigger: containerEventoRef.current,
            //     start: "top 80%", // A animação começa quando o topo do container atinge 80% da viewport
            //     toggleActions: "play none none none", // Toca uma vez ao entrar
            //     // markers: true, // Apenas para depuração, remova em produção!
            // }
        });

        // Animação para o VideoNaMoldura: desliza da esquerda e aparece
        tl.from(videoMolduraRef.current, {
            x: -200, // Começa 200px para a esquerda
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Animação para o contêiner de texto: desliza da direita e aparece
        tl.from(textoContainerRef.current, {
            x: 200, // Começa 200px para a direita
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "<0.5"); // Começa 0.5s ANTES do fim da animação anterior (VideoNaMoldura), para um overlap legal

    }, { scope: containerEventoRef }); // Defina o escopo da animação para o contêiner principal

    return(
        // Associe as referências aos seus elementos JSX
        <div ref={containerEventoRef} className={styles.containerEvento} >

            <div className={styles.containerLimitado} >
                <div ref={videoMolduraRef}> {/* Adicione a ref para a div do VideoNaMoldura */}
                    <VideoNaMoldura videoPath="VideoCosplay.mp4" />
                </div>

                <div ref={textoContainerRef} className={styles.containerTexto}> {/* Adicione a ref para a div do texto */}
                    <h1 className={styles.tituloEvento} >
                        Vista sua fantasia, brilhe no palco e viva a magia dos animes!
                    </h1>
                    <p className={styles.textoEvento} >
                        Não importa se você vem com uma armadura digna de Hollywood ou com papelão, fita crepe e MUITA criatividade — aqui, o que vale é a paixão e a diversão!
                        Prepare seu melhor cosplay (ou cospobre), entre no clima, desfile no palco e concorra a prêmios incríveis em duas categorias superdivertidas:
                    </p>
                    <Button />
                </div>
            </div>
            
        </div>
    )
}