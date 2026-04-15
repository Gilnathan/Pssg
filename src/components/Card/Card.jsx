import styles from "./CardStyled.module.css";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function Card({
  titulo,
  descricao,
  horario,
  imagem,
  linkPage,
  tituloColor,
  descricaoColor,
  stripColor,
  children,
  badge,
  badgeColor,
  buttonLabel,
  icon: Icon,
}) {
  const renderTitulo = () => {
    if (!titulo) return titulo;
    const match = titulo.match(/^(.+?)\s*\((.+)\)$/);
    if (!match) return titulo;
    return (
      <>
        {match[1]}
        <br />
        <span className={styles.headerTitleSub}>({match[2]})</span>
      </>
    );
  };

  return (
    <div className={styles.card}>
      {/* Header with badge and icon */}
      {(titulo || badge || Icon) && (
        <div
          className={styles.cardHeader}
          style={stripColor ? { borderBottomColor: stripColor } : {}}
        >
          <div className={styles.headerContent}>
            {Icon && <Icon className={styles.headerIcon} size={24} />}
            <h3
              className={styles.headerTitle}
              style={
                tituloColor
                  ? {paddingLeft: "0.85rem" }
                  : {}
              }
            >
              {titulo}
            </h3>
          </div>
          {badge && (
            <div
              className={styles.badge}
              style={{ backgroundColor: badgeColor || "#ffd080" }}
            >
              {badge}
            </div>
          )}
        </div>
      )}

      {imagem && (
        <div className={styles.imageWrapper}>
          <Image src={imagem} alt={titulo} fill className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        {!titulo && <h3 style={{ color: tituloColor }}>Placeholder</h3>}
        <p style={{ color: descricaoColor }}>{descricao}</p>

        {children && <div className={styles.childrenContainer}>{children}</div>}

        <div className={styles.footer}>
          {horario && (
            <div className={styles.horario}>
              <Clock size={16} />
              {horario}
            </div>
          )}
          <Link href={linkPage}>
            <button className={styles.button}>
              {buttonLabel || "Saiba mais"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
