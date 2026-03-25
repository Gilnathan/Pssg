import Image from "next/image";
import styles from "./page.module.css";
import ButtonGlobal from "@/components/ButtonGlobal/ButtonGlobal";

export default function Home() {
    return(
        <div className={styles.ContainerMain}>
            <div className={styles.card}>
                

                <div className={styles.cardContent}>
                    <div className={styles.logoWrapper}>
                    <Image src="/logo.png" alt="logo" width={64} height={64} />
                    </div>
                    <div className={styles.containerText}>
                        <h1 className={styles.textTop}>PSSG DEMO X SESC GEEK  </h1>
                        <p className={styles.textBottom}>Queremos ver o evento pelo seu olhar! Compartilhe suas fotos com a gente.</p>
                    </div>
                    
                    <ButtonGlobal
                    buttonText="Enviar Fotos "
                    href="https://drive.google.com/drive/folders/1KkGavu9-smk2ewxxB1k7lNaRmc_9CAX_"
                />
                </div>
            </div>
        </div>
    )
}