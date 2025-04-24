'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper'; // importa o módulo Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import logo from '/public/logo.png';
import img1 from '/public/foto1.png';
import img2 from '/public/foto2.png';
import img3 from '/public/foto3.png';
import img4 from '/public/foto4.png';
import img5 from '/public/foto5.png';

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

        <SwiperSlide> <Image src={img1} alt='img1' className={styles.imgCarrocel} /> </SwiperSlide>
        <SwiperSlide> <Image src={img2} alt='img2' className={styles.imgCarrocel} /> </SwiperSlide>
        
        <SwiperSlide> <Image src={img4} alt='img4' className={styles.imgCarrocel} /> </SwiperSlide>
        <SwiperSlide> <Image src={img5} alt='img5' className={styles.imgCarrocel} /> </SwiperSlide>
      </Swiper>
    </>
  );
}
