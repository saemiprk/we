'use client';

import React, { useState, useEffect } from 'react';
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
import image10 from '../public/images/10.jpg';
import { IoMdClose } from "react-icons/io";
import Slider from './Slider';
import Title from './title';

export default function ImageGallery(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [first, setFirst] = useState<number>(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // 컴포넌트가 언마운트될 때 overflow 스타일을 원래대로 되돌립니다.
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const openModalHandler = (index: number) => {
        setFirst(index);
        setIsOpen(true);
    };

    return (
        <div className='py-5'>
            <Title ko='우리의 순간' en='GALLERY' />
            <div className='grid grid-cols-4 gap-2'>
                <Image src={image01} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={0} priority />
                <Image src={image02} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={1} priority />
                <Image src={image03} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={2} priority />
                <Image src={image04} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))  } data-index={3} priority />
                <Image src={image05} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={4} priority />
                <Image src={image06} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={5} priority />
                <div className='col-span-2'>
                    <Image className='h-full w-full' src={image07} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={6} priority />
                </div>
                <div className='col-span-2'>
                    <Image className='h-full w-full' src={image08} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={7} priority />
                </div>
                <Image src={image09} alt='taehyen, saemi' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={8} priority />
                <Image src={image10} alt='taehyen, saemi0' width={300} height={100} onClick={(e) => openModalHandler(Number(e.currentTarget.dataset.index))} data-index={9} priority />
                {isOpen && (
                    <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-hidden flex items-center justify-center p-4">
                        <button type="button" className='absolute top-5 right-5 text-white text-2xl z-50' onClick={() => setIsOpen(false)}><IoMdClose /></button>
                        <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                            <Slider num={first} className="w-full h-full" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}