"use client";
import { motion } from "framer-motion";
import styles from "./video.module.css";

export default function VideoCosplayBackground() {
  return (
    <motion.div
      className={styles.videocontainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <video
        className={styles.videobg}
        poster="/capaVideo.jpg"
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        <source src="/VideoCosplay.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </motion.div>
  );
}
