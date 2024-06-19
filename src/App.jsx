import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';
import ImageSlider from './components/ImageSlider'
import CountDown from './components/CountDown';
import DecCalendar from './components/DecCalendar';

function App() {
  return (
    <>
    <section className='relative w-full'>
      <img className='w-full' src='images/main02.jpg' />
      <h1 className='absolute w-full mt-10 top-0 left-0 drop-shadow-lg'>
        <Typewriter
            words={['우리, 결혼합니다!']}
            cursor = {false}
          />
      </h1>
      <div className='main_info absolute left-0 bottom-5 w-full text-white drop-shadow-lg text-lg'>
        <span className='flex items-center justify-center mb-3 drop-shadow-lg'>박새미 & 이태현</span>
        <span className='flex items-center justify-center text-xl'>2024년 12월 14일 토요일 오전 11시</span>
        <span className='flex items-center justify-center'>JK아트컨벤션 엠버루체홀</span>
      </div>
    </section>

    <section className='bg-red-100 relative w-full p-10'>
      <div className='text-lg leading-7'>
        <span>추운 겨울의 끝자락에서<br/>저희 두 사람이<br/>평생을 약속하게 되었습니다.<br/>귀한 걸음 하셔서 저희의 앞날을<br/>축복해 주시면 감사하겠습니다.</span>
      </div>
      <div className='GowunBatang-Bold mt-10'>
        <div>
          <span className='flex items-center justify-center text-lg'>이상규 · 정문숙 <span className='m-2 text-sm'>장남</span>이태현</span>
        </div>
        <div>
          <span className='flex items-center justify-center text-lg'>박광도 · 권영일 <span className='m-2 text-sm'>장녀</span>박새미</span>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className='sec_gallery relative w-full pt-10 pb-10'>
      <div>
        <span className='subtitle flex items-center justify-center text-xs'>Gallery</span>
        <span className='flex items-center justify-center text-2xl GowunBatang-Bold mb-2'>우리의 순간</span>
      </div>
      <div className='flex items-center justify-center'>
        <ImageSlider className='w-full' />
      </div>
    </section>

    <section className='bg-red-100 p-10'>
      <div>
        <DecCalendar />
        <CountDown />
      </div>
    </section>

    {/* Location */}
    {/* <section className='relative w-full'>
      <div className='mt-10'>
        <span className='subtitle flex items-center justify-center text-xs'>Location</span>
        <span className='flex items-center justify-center text-2xl GowunBatang-Bold mb-5'>오시는길</span>
      </div>
      <div>

      </div>
    </section> */}

    {/* Account */}
    {/* <section className='relative w-full'>
      <div className='mt-10'>
        <span className='subtitle flex items-center justify-center text-xs'>Account</span>
        <span className='flex items-center justify-center  text-2xl GowunBatang-Bold mb-5'>마음 전하실 곳</span>
      </div>
      <div>

      </div>
    </section> */}
    </>
  )
}

export default App
