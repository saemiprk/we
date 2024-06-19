import React from 'react';
import Countdown from 'react-countdown-simple';


const CountDown = () => {
    const ourDate = new Date('2024-12-14');

    return (
        <div>
            <Countdown
                targetDate={ourDate}
                renderer={({ days, hours, minutes, seconds }) => (
                <div>
                    <div className='flex justify-center GowunBatang-Bold text-3xl'>
                        <div className='relative'>
                            <div className='flex items-center justify-center absolute text-sm w-full'>Days</div>
                            <span className='flex mt-6'>{days}</span>
                        </div>
                        <span className='flex mt-6 ml-3 mr-3'>:</span>
                        <div className='relative'>
                            <div className='flex items-center justify-center absolute text-sm w-full'>Hour</div>
                            <span className='flex mt-6'>{hours}</span>
                        </div>
                        <span className='flex mt-6 ml-3 mr-3'>:</span>
                        <div className='relative'>
                            <div className='flex items-center justify-center absolute text-sm w-full'>Min</div>
                            <span className='flex mt-6'>{minutes}</span>
                        </div>
                        <span className='flex mt-6 ml-3 mr-3'>:</span>
                        <div className='relative'>
                            <div className='flex items-center justify-center absolute text-sm w-full'>Sec</div>
                            <span className='flex mt-6'>{seconds}</span>
                        </div>
                    </div>
                    <div className='text-sm mt-2'>태현, 새미 결혼식이 {days}일 남았습니다.</div>
                </div>
                )}
            />
        </div>
    )
}

export default CountDown