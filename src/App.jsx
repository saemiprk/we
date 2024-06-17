import { useState } from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* main */}
    <section className='relative w-full'>
      <img className='w-full' src='images/main.jpg' />
      {/* <h1 className='absolute top-0 left-0 w-full mt-10'>우리 결혼 합니다!</h1> */}
      <h1 className='absolute w-full mt-12 top-0 left-0 text-white drop-shadow-lg'>
        <Typewriter
            words={['우리, 결혼합니다!']}
            cursor = {false}
          />
      </h1>
      <div className='main_info absolute left-0 bottom-10 w-full text-white drop-shadow-lg text-xl'>
        <span className='flex items-center justify-center mb-3 text-lg'>박새미 & 이태현</span>
        <span className='flex items-center justify-center'>2024년 12월 14일 토요일 오전 11시</span>
        <span className='flex items-center justify-center text-lg'>JK아트컨벤션 엠버루체홀</span>
      </div>
    </section>
    
    {/* info */}
    <section>

    </section>
    </>
  )
}

export default App
