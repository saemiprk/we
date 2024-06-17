import { useState } from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* main */}
    <section className='relative w-full h-full'>
      <img className='absolute w-full' src='images/main.jpg' />
      {/* <h1 className='absolute top-0 left-0 w-full mt-10'>우리 결혼 합니다!</h1> */}
      <h1 className='absolute w-full mt-12 text-white drop-shadow-lg'>
        <Typewriter
            words={['우리, 결혼합니다!']}
            cursor = {false}
          />
      </h1>
      <div className='main_info absolute left-0 bottom-36 w-full text-white drop-shadow-lg text-2xl'>
        박새미 & 이태현
      </div>
    </section>
    
    {/* info */}
    <section>

    </section>
    </>
  )
}

export default App
