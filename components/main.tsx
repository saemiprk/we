'use client';

import Image from 'next/image';
import mainImage from '../public/images/main.jpg';

export default function Main(){
    return (
        <div className='relative'>
            <Image
                src={mainImage}
                alt='Main Image'
                sizes='100vw'
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={500}
                height={300}
                priority
            />
            <div className='absolute top-0 left-0 right-0 text-center text-4xl mt-10'>
                <h1>우리, 결혼합니다!</h1>
            </div>
            <div className='absolute bottom-0 left-0 right-0 mb-6 w-full text-center text-white text-lg'>
                <div className='mb-1'>이태현 & 박새미</div>
                <div>2024년 12월 14일 토요일 오전 11시</div>
                <div className='text-sm'>JK아트컨벤션 엠버루체홀</div>
            </div>
        </div>
    )
}