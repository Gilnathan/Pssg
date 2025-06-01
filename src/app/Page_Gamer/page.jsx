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
import ButtonGlobal from '@/components/ButtonGlobal/ButtonGlobal';
import CardGames from '@/components/CardGames/CardGames'; 
import { Car } from 'lucide-react';

export default function Page_Gamer() {
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
                        Arena Gamer: Conecte-se e Jogue!
                    </h1>
                    <p className={styles.textoEvento}>
                        Prepare-se para entrar no mundo dos games em nossa Arena Gamer! Seja você um jogador casual ou um competidor nato, este é o seu espaço para se divertir, desafiar amigos e explorar os universos digitais mais incríveis.
                        </p>
                    
                <p><strong>Nossa Área Gamer foi pensada para proporcionar a melhor experiência de jogo para todos os níveis de jogadores. Chame a galera, escolha seu console e conecte-se à diversão!</strong></p>
                    
                    <ButtonGlobal
                        buttonText="Cadastro para concurso"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdErmqihJNqHe_lB34chYdqwFYVrVZLzZCh1Su5qHg5ToNxaw/viewform"
                    />
                </div>
            </div>
            <h2 className={styles.tituloListaJogos}> Títulos Confirmados na Área Gamer </h2>
            <section className={styles.containerJogos}>
                    <CardGames
                    title="Dragon ball budokai tenkaichi 3"
                    description="Emulador PS2"
                    imageUrl="https://images.igdb.com/igdb/image/upload/t_cover_big/co3r52.jpg" 
                    
                    />

                    <CardGames
                    title="Dragon ball Sparking Zero"
                    description="PC"
                    imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/3658b62762b30e4d4b080a58847dd94b60bd24a0a70aab72.png"
                    
                    />

                    <CardGames
                    title="free fire"
                    description="Celular"
                    imageUrl="https://wallpapers.com/images/hd/4k-free-fire-punkster-bunny-skin-8qzyivps662a8x2n.jpg" 
                    
                    />

                    <CardGames
                    title="Just Dance 2025"
                    description="Nintendo Switch"
                    imageUrl="https://upload.wikimedia.org/wikipedia/pt/9/9c/Just_Dance_2025_Edition.jpg" 
                    
                    />


                    <CardGames
                    title="Mario Kart"
                    description="Nintendo Switch"
                    imageUrl="https://upload.wikimedia.org/wikipedia/pt/0/0d/MarioKart8.jpg" 
                    
                    />
                    

                </section>
        </div>
    );
}