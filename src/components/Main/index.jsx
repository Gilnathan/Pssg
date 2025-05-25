"use client";

import styles from "./Main.module.css";
import Countdown from "@/components/Countdown/Countdown";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

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

      <motion.div
        className={styles.contentLimitado}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.containerInf} variants={itemVariants}>
          <motion.h1 variants={itemVariants}>
            <span className={styles.titleOrange}>Porto Seguro</span> <br />
            <span className={styles.titleWhite}>Summer Geek</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            "Um encontro de almas que compartilham <br /> a paixão pela fantasia"
          </motion.p>

          <motion.div className={styles.infoContainer} variants={itemVariants}>
            <div className={styles.eventInfo}>
              <span className={styles.label}>Data do Evento</span>
              <strong>12/10/2025</strong>
            </div>

            <div className={styles.eventInfo}>
              <span className={styles.label}>Local</span>
              <strong>Porto Seguro, BA</strong>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.containerContador}
          variants={itemVariants}
        >
          <Countdown />
        </motion.div>
      </motion.div>
    </div>
  );
}
