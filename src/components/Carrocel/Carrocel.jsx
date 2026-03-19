'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // importa os módulos de swiper/modules
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import styles from './Carrocel.module.css';

export default function Carrocel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]} // adiciona o Autoplay
        autoplay={{
          delay: 2000, // tempo entre os slides (em milissegundos)
          disableOnInteraction: false, // continua mesmo se o usuário interagir
        }}
        loop={true} // deixa em loop infinito
        className={styles.mySwiper}
      >
        <div className={styles.containerTitulo}>
          
          <h1> Edição 2024</h1>
        </div>

        <SwiperSlide> <Image src="/foto1.png" alt='img1' className={styles.imgCarrocel} width={800} height={600} /> </SwiperSlide>
        <SwiperSlide> <Image src="/foto2.png" alt='img2' className={styles.imgCarrocel} width={800} height={600} /> </SwiperSlide>
        
        <SwiperSlide> <Image src="/foto4.png" alt='img4' className={styles.imgCarrocel} width={800} height={600} /> </SwiperSlide>
        <SwiperSlide> <Image src="/foto5.png" alt='img5' className={styles.imgCarrocel} width={800} height={600} /> </SwiperSlide>
      </Swiper>
    </>
  );
}
