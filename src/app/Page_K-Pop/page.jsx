// app/page.js ou components/PageCosplay.jsx
"use client"; // ESSENCIAL para usar hooks React e GSAP no lado do cliente

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Importações GSAP
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import VideoNaMoldura from '@/components/VideoNaMoldura/VideoNaMoldura';
import Card_Discord from '@/components/Card_Discord/Card_Discord';
import ButtonKpop from '@/components/ButtonK-pop/Button';
import { Car } from 'lucide-react';

export default function PageCosplay() {
    const videoURL1 = 'Video-K-pop.mp4'; // Já é o caminho correto para public
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
            
            <div className={styles.containerLimitado}>
                <div ref={iphoneRef}> {/* Adicione a ref para a div do iPhone */}
                    <VideoNaMoldura videoPath={videoURL1} />
                </div>

                <div ref={textoRef} className={styles.containerTexto}> {/* Adicione a ref para a div do texto */}
                    <h1 className={styles.tituloEvento}>
                        Vista sua fantasia, brilhe no palco e viva a magia dos animes!
                    </h1>
                    <p className={styles.textoEvento}>
                        Não importa se você vem com uma armadura digna de Hollywood ou com papelão, fita crepe e MUITA criatividade — aqui, o que vale é a paixão e a diversão!
                        Prepare seu melhor cosplay (ou cospobre), entre no clima, desfile no palco e concorra a prêmios incríveis em duas categorias superdivertidas:
                    </p>
                    <ButtonKpop />
                </div>
            </div>
        </div>
    );
}