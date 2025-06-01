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
import img01 from '/public/img01.jpg';
import img02 from '/public/img02.jpg';
import img03 from '/public/img03.jpg';
import img04 from '/public/img04.jpg';
import img05 from '/public/img05.jpg';
import img06 from '/public/img06.jpg';
import img07 from '/public/img07.jpg';
import img08 from '/public/img08.jpg';
import img09 from '/public/img09.jpg';
import img10 from '/public/img10.jpg';
import img11 from '/public/img11.jpg';
import img15 from '/public/cosplayrs.jpg';




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
        
            <h1 className={styles.tituloEvento}> <span> Cosplayers   </span>  Edição 2024 </h1>
            <section className={styles.containerEdicaoAnterior} >
                <div className={styles.Containerimagem}>
                    <Image src={img01} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>
                
                <div className={styles.Containerimagem}>
                    <Image src={img02} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img03} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img04} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img05} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img06} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img08} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img09} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img10} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

                <div className={styles.Containerimagem}>
                    <Image src={img15} alt="Cosplay Principal" className={styles.imagemCosplay} />
                </div>

               

            
            </section>
            
        </div>
    )
}