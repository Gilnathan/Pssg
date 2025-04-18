import styles from "./Main.module.css";
import Countdown from "@/components/Countdown/Countdown";
import Button from "../Button/Button";



export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <video
        className={styles.bgVideo}
        src="/videoBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className={styles.contentLimitado} > 

      <div className={styles.containerInf}>
        <h1>
          <span className={styles.titleOrange}>Porto Seguro</span> <br />
          <span className={styles.titleWhite}>Summer Geek</span>
        </h1>

        <p className={styles.subtitle}>
          "Um encontro de almas que compartilham a paixão pela fantasia"
        </p>

        <div className={styles.infoContainer}>
          <div className={styles.eventInfo}>
            <span className={styles.label}>Data do Evento</span>
            <strong>12/10/2025</strong>
          </div>

          <div className={styles.eventInfo}>
            <span className={styles.label}>Local</span>
            <strong>Porto Seguro, BA</strong>
          </div>
        </div>

        <Button />
      </div>
      <div className={styles.containerContador}> 
      
      <Countdown />
      
      </div>
      
      </div>

      
    </div>
  );
}
