"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import ButtonGlobal from "../ButtonGlobal/ButtonGlobal";
import styles from "./SessaoGamer.module.css";

import CardGames from "../CardGames/CardGames";

export default function SessaoGamer() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/AnimationGamer.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Erro ao carregar animação Gamer:', err));
  }, []);
  return (
    <section className={styles.sessaoGamer}>
      <div className={styles.container}>
        <div className={styles.lottieIcon}>
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
        <div className={styles.containerInformacoes}>
          <h2 className={styles.tituloEvento}>
            Sessão Gamer <br /> <span>Competição e Diversão!</span>
          </h2>
          <p className={styles.descricao}>
            Entre na nossa Arena Gamer e encontre o seu lugar no universo dos
            videogames! Seja para batalhas épicas nos campeonatos com prêmios ou
            para descontrair em partidas casuais com os amigos, aqui a diversão
            é garantida para todos.
          </p>
        </div>
      </div>

      <div className={styles.containerJogos}>

        <CardGames
          title="Just dance 2025"
          description="casual"
          imageUrl="https://static.wikia.nocookie.net/justdance/images/7/7a/Boxart_redoo_instapost.png/revision/latest?cb=20240618165333"
          linkPage="/play/competitive"
          competitive="casual"
        />

        <CardGames
          title="Vr fnaf help wanted"
          description="casual"
          imageUrl="https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/f/fa/FNaFHW-SteamCoverArt.jpg/revision/latest?cb=20240819160806"
          linkPage="/play/competitive"
          competitive="casual"
        />

        <CardGames
          title="Mário kart 8"
          description="casual"
          imageUrl="https://upload.wikimedia.org/wikipedia/pt/0/0d/MarioKart8.jpg"
          linkPage="/play/competitive"
          competitive="casual"
        />

         <CardGames
          title="Mortal kombat 11"
          description="casual"
          imageUrl="https://files.meiobit.com/wp-content/uploads/2019/04/20190426mortal-kombat-001.jpg"
          linkPage="/play/competitive"
          competitive="casual"
        />

        <CardGames
          title="Beat Saber"
          description="casual"
          imageUrl="https://www.tuni.fi/oasis/wordpress/wp-content/uploads/2024/11/bsaber.jpg"
          linkPage="/play/competitive"
          competitive="casual"
        />
      </div>
    </section>
  );
}
