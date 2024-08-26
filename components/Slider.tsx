'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';
import image01 from '../public/images/1.jpg';
import image02 from '../public/images/2.jpg';
import image03 from '../public/images/3.jpg';
import image04 from '../public/images/4.jpg';
import image05 from '../public/images/5.jpg';
import image06 from '../public/images/6.jpg';
import image07 from '../public/images/7.jpg';
import image08 from '../public/images/8.jpg';
import image09 from '../public/images/9.jpg';

export default function Slider({num}){

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={num}
            loop={true}
        >
            <SwiperSlide>
                <Image src={image01} alt='1' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image02} alt='2' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image03} alt='3' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image04} alt='4' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image05} alt='5' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image06} alt='6' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image07} alt='7' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image08} alt='8' width={300} height={100} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={image09} alt='9' width={300} height={100} />
            </SwiperSlide>
        </Swiper>
    )
}