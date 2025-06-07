"use client"; 

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Lottie from "lottie-react";
import AnimationGamer from "../../../public/AnimationGamer2.json";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import VideoNaMoldura from '@/components/VideoNaMoldura/VideoNaMoldura';
import { Car } from 'lucide-react';

export default function SobreEvento() {

    const videoURL1 = 'PSSG.mp4'; // Já é o caminho correto para public
    const videoURL2 = 'Video-K-pop.mp4'; // Usei o mesmo para exemplo

    // 1. Crie referências para os elementos que você quer animar
    const containerRef = useRef(null); // Ref para o contêiner principal (escopo)
    const iphoneRef = useRef(null);    // Ref para a div que contém o VideoNaMoldura
    const textoRef = useRef(null);     // Ref para a div que contém o título e parágrafo

    // 2. Use o hook useGSAP para definir suas animações
    useGSAP(() => {
        // Crie uma timeline para sequenciar as animações
        const tl = gsap.timeline({
            delay: 0.1, // Um pequeno atraso antes da animação começar
        });

        // Animação para o iPhone: desliza da esquerda e aparece
        tl.from(iphoneRef.current, {
            x: -200, // Começa 200px para a esquerda
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Animação para o contêiner de texto: desliza da direita e aparece
        tl.from(textoRef.current, {
            x: 200, // Começa 200px para a direita
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "<0.5"); // Começa 0.5s ANTES do fim da animação anterior (iPhone), para um overlap legal

    }, { scope: containerRef }); // Defina o escopo da animação para o contêiner principal

    return (
        // 3. Associe as referências aos seus elementos JSX
        <div ref={containerRef} className={styles.container}>
            <div className={styles.lottieIcon}>
                <Lottie
                animationData={AnimationGamer}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.containerLimitado}>
                

                <div ref={textoRef} className={styles.containerTexto}> {/* Adicione a ref para a div do texto */}
                    <h1 className={styles.tituloEvento}>
                        Bem-vindo ao <span> Porto Seguro Summer Geek (PSSG)!</span>  
                    </h1>
                    <p className={styles.textoEvento}>
                        Prepare-se para uma imersão épica no universo da cultura geek em pleno coração de Porto Seguro! O Porto Seguro Summer Geek (PSSG) é o seu destino imperdível para celebrar tudo o que amamos: animes, mangás, games, K-Pop, quadrinhos, filmes, séries e muito mais!
                        Nascido da paixão por esse mundo vibrante, o PSSG é um evento feito por fãs para fãs, que busca reunir a comunidade geek da região e de todo o Brasil em um só lugar. Aqui, você encontrará um espaço para fazer novas amizades, compartilhar interesses, soltar a criatividade e, claro, se divertir muito!
                    </p>
        
                </div>
            </div>

            <section className={styles.containerEdicaopassada}>

            </section>
        </div>
    );
}