import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';
import ImageSlider from './components/ImageSlider'
import CountDown from './components/CountDown';
import DecCalendar from './components/DecCalendar';
import CopyClipboard from './components/CopyClipboard';
// import Button from './components/Button';
import ModalButton from './components/ModalButton';
import { IoMdSubway } from "react-icons/io";
import { IoMdBus } from "react-icons/io";
import { IoMdCar } from "react-icons/io";
// import LocationMap from './components/LocationMap';

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
      <div>
        <span className='subtitle flex items-center justify-center text-xs'>Invition</span>
        <span className='flex items-center justify-center text-2xl GowunBatang-Bold mb-2'>초대합니다</span>
      </div>
      <div className='text-lg leading-7 mt-5 mb-5'>
        <span>추운 겨울의 끝자락에서<br/>저희 두 사람이<br/>평생을 약속하게 되었습니다.<br/>귀한 걸음 하셔서 저희의 앞날을<br/>축복해 주시면 감사하겠습니다.</span>
      </div>
      <div className='GowunBatang-Bold'>
        <div>
          <span className='flex items-center justify-center text-lg'>이상규 · 정문숙 <span className='m-2 text-sm'>장남</span>이태현</span>
        </div>
        <div>
          <span className='flex items-center justify-center text-lg'>박광도 · 권영일 <span className='m-2 text-sm'>장녀</span>박새미</span>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        {/* <button className='flex items-center justify-center bg-white text-red-400 rounded pt-1.5 pb-1.5 pl-4 pr-4'><BsFillTelephoneFill className='pr-1' /> 연락하기</button> */}
        <ModalButton title={'연락하기'} />
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
    <section className='relative w-full'>
      <div className='mt-10'>
        <span className='subtitle flex items-center justify-center text-xs'>Location</span>
        <span className='flex items-center justify-center text-2xl GowunBatang-Bold mb-5'>오시는길</span>
      </div>
      <div>
        <div className='mb-3'>
          <div>JK아트컨벤션 4F, 엠버루체홀</div>
          <div className='mt-1.5 text-sm'>서울 영등포구 문래로 164 <CopyClipboard value={'서울 영등포구 문래로 164'} /></div>
        </div>
        {/* <LocationMap /> */}
        <div className='p-3 pb-0'>
          <div className='flex items-center'><IoMdSubway /><span className='ml-2'>지하철 안내</span></div>
          <div className='text-sm text-left p-2'>
            <div>2호선 문래역 5번출구 전방 직진 300M</div>
            <div>2호선 문래역 4번출구(뒤쪽) 셔틀버스 운행</div>
          </div>
        </div>
        <div className='p-3 pb-0'>
          <div className='flex items-center'><IoMdBus /><span className='ml-2'>버스 안내</span></div>
          <div className='text-sm text-left p-2'>
            <div>문래역: 6211, 6625, 641, 영등포12</div>
            <div>문래주민센터 / 영일시장,록스 : 영등포05</div>
            <div>벽제메가트리움APT : 6516</div>
          </div>
        </div>
        <div className='p-3 pb-0'>
          <div className='flex items-center'><IoMdCar /><span className='ml-2'>자가용 안내</span></div>
          <div className='text-sm text-left p-2'>
            <div>네비게이션 : "JK아트컨벤션" 또는 "문래동 SK리더스뷰"</div>
            <div>- 주차장 동시 1,000여대 주차 가능 / 2시간 무료</div>
          </div>
        </div>
      </div>
    </section>

    {/* Account */}
    <section className='relative w-full'>
      <div className='mt-10'>
        <span className='subtitle flex items-center justify-center text-xs'>Account</span>
        <span className='flex items-center justify-center  text-2xl GowunBatang-Bold mb-5'>마음 전하실 곳</span>
      </div>
      <div>참석이 어려우신 분들을 위해<br />계좌번호를 기재하였습니다.<br /> 너그러운 마음으로 양해 부탁드립니다.</div>
      <div className='m-5'>
        <div className='w-full flex justify-center items-center bg-red-100 p-2 rounded-sm'>
          <button className=''>신랑측 계좌번호</button>
        </div>
        <div className='w-full flex justify-center items-center bg-red-100 p-2 rounded-sm mt-5'>
          <button className=''>신부측 계좌번호</button>
        </div>
      </div>
      <div>

      </div>
    </section>
    </>
  )
}

export default App
