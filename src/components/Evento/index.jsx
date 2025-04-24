"use client";

import styles from "./Evento.module.css"
import Carrocel from "../Carrocel/Carrocel"
import Image from 'next/image';
import Button from "../ButtonCosplay/Button";
import VideoCosplayBackground from "../VIdeoCosplay/VideoCosplay";

import cosplayrPrincipal from '/public/cosplayrPrincipal.png';
import img1 from '/public/foto1.png';
import img2 from '/public/foto2.png';
import img3 from '/public/foto3.png';
import img4 from '/public/foto4.png';
import img5 from '/public/foto5.png';



export default function Evento(){
    return(
        
        <div className={styles.containerEvento} >
             
            <div className={styles.containerLimitado} >         
            <div className={styles.container} >

                    <VideoCosplayBackground />

                 <div className={styles.containerTexto}>

                    <h1 className={styles.tituloEvento} >
                    Vista sua fantasia, brilhe no palco e viva a magia dos animes!
                    </h1>
                    <p className={styles.textoEvento} > 
                    Não importa se você vem com uma armadura digna de Hollywood ou com papelão, fita crepe e MUITA criatividade — aqui, o que vale é a paixão e a diversão!
                    Prepare seu melhor cosplay (ou cospobre), entre no clima, desfile no palco e concorra a prêmios incríveis em duas categorias superdivertidas:
                    </p>
                    <Button />
                </div>
                    
            </div>

            </div>
        </div>
    )
}