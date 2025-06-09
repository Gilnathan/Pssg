"use client";

import Lottie from "lottie-react";
import ButtonGlobal from "../ButtonGlobal/ButtonGlobal";
import styles from "./SessaoGamer.module.css";

import AnimationGamer from "../../../public/AnimationGamer.json";

import CardGames from "../CardGames/CardGames";

export default function SessaoGamer() {
  return (
    <section className={styles.sessaoGamer}>
      <div className={styles.container}>
        <div className={styles.lottieIcon}>
          <Lottie
            animationData={AnimationGamer}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
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
          title="Dragon ball z budokai tenkaichi 3"
          description="competitivo"
          imageUrl="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3r52.jpg"
          linkPage="/play/competitive"
          competitive="competitivo"
        />
        <CardGames
          title="Mario kart "
          description="competitivo"
          imageUrl="https://upload.wikimedia.org/wikipedia/pt/0/0d/MarioKart8.jpg"
          linkPage="/play/competitive"
          competitive="competitivo"
        />
        <CardGames
          title="Mortal kombat 11"
          description="competitivo"
          imageUrl="https://store-images.s-microsoft.com/image/apps.31077.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.032a1c73-7961-4acf-a82a-89d2f3ccdd1f?q=90&w=480&h=270"
          linkPage="/play/competitive"
          competitive="competitivo"
        />

        <CardGames
          title="Just Dance"
          description="Jogar Casualmente"
          imageUrl="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000017893/2e1cdcae1a7662012ff11f46b068a795c239d178cf414af2b963fca03d8ce420"
          linkPage="/play/competitive"
          competitive="Ncompetitivo"
        />
      </div>
    </section>
  );
}
