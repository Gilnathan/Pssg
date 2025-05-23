import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import VideoNaMoldura from "@/components/VideoNaMoldura/VideoNaMoldura";
import ButtonKpop from "@/components/ButtonK-pop/Button";

export default function PageCosplay() {
  const videoURL1 = "https://www.youtube.com/watch?v=cX1d8LPib4w";
  const videoURL2 = "https://www.youtube.com/embed/OutroIDDeVideo";

  return (
    <div className={styles.container}>
      <div className={styles.containerLimitado}>
        <div>
          <VideoNaMoldura videoPath="Video-K-pop.mp4" />
        </div>

        <div className={styles.containerTexto}>
          <h1 className={styles.tituloEvento}>
            Vista sua fantasia, brilhe no palco e viva a magia dos animes!
          </h1>
          <p className={styles.textoEvento}>
            Não importa se você vem com uma armadura digna de Hollywood ou com
            papelão, fita crepe e MUITA criatividade — aqui, o que vale é a
            paixão e a diversão! Prepare seu melhor cosplay (ou cospobre), entre
            no clima, desfile no palco e concorra a prêmios incríveis em duas
            categorias superdivertidas:
          </p>
          <ButtonKpop />
        </div>
      </div>
    </div>
  );
}
