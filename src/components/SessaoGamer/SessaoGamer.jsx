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
          title="Just Dance"
          description="casual"
          imageUrl="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000017893/2e1cdcae1a7662012ff11f46b068a795c239d178cf414af2b963fca03d8ce420"
          linkPage="/play/competitive"
          competitive="casual"
        />

        <CardGames
          title="Five Nights at Freddy’s VR"
          description="casual"
          imageUrl="https://imgproxy.eneba.games/ikR5-aGMwunpsD74oRdzceQM7FkYCjIiCIeieTbW8fs/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy93/dUVYWEQ2THNjUEQ1/M04wZGliQVM2Mzdp/aW1mUWlqb3RScG9j/aVFhNk5RLmpwZw"
          linkPage="/play/competitive"
          competitive="casual"
        />

        <CardGames
          title=""
          description="EM BREVE"
          imageUrl="https://i.pinimg.com/736x/10/b6/77/10b677f80fdbdde4df60f9d74832cf7d.jpg"
          linkPage="/play/competitive"
          competitive="casual"
        />
      </div>
    </section>
  );
}
