"use client";

import React from "react";
import styles from "./DriveSection.module.css";
import { FolderOpen, Plus, Eye } from "lucide-react";
import Lottie from "lottie-react";

const DriveSection = ({
  title = "Drive",
  actionLabel = "Adicionar Foto",
  onAction,
  isOfficialDrive = false,
  isTopItem = true,
  animation = null,
}) => {
  const handleActionClick = () => {
    const audio = new Audio("/sounds/coin.mp3");
    audio.play().catch(e => console.error("Erro ao reproduzir som:", e));

    if (onAction) {
      onAction();
    }
  };

  // Determina o ícone baseado no tipo de ação
  const getActionIcon = () => {
    if (actionLabel === "Adicionar Foto") {
      return <Plus size={20} />;
    }
    return <Eye size={20} />;
  };

  return (
    <div
      className={`${styles.driveSectionContainer} ${isTopItem ? styles.topItem : ""}`}
    >
      {/* Header com ícone e título */}
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <FolderOpen size={28} className={styles.folderIcon} />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <span className={styles.badge}>
          {isOfficialDrive ? "OFICIAL" : "DEMO"}
        </span>
      </div>

      {/* Content area */}
      <div className={styles.content}>
        {animation && (
          <div className={styles.lottieContainer}>
            <Lottie
              animationData={animation}
              loop={true}
              autoplay={true}
              style={{ maxWidth: "140px", height: "auto" }}
            />
          </div>
        )}
        <p className={styles.description}>
          {actionLabel === "Adicionar Foto"
            ? "Faça upload de suas fotos do evento"
            : "Veja todas as fotos do evento"}
        </p>
      </div>

      {/* Footer com botão de ação */}
      <div className={styles.footer}>
        <button
          className={`${styles.actionButton} ${
            actionLabel === "Adicionar Foto"
              ? styles.addButton
              : styles.viewButton
          }`}
          onClick={handleActionClick}
        >
          {getActionIcon()}
          <span>{actionLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default DriveSection;
