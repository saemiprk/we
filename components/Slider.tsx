'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  num: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ num, className }) => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
  ];

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      className={className}
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="select-none"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;