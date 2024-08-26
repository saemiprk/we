'use client';

import { useStopwatch } from "react-timer-hook";

export default function DateTimer(){
    const {
        seconds,
        minutes,
        hours,
        days,
      } = useStopwatch({
        autoStart: true,
        offsetTimestamp: new Date("2024-12-14")
    });
    
    return (
    <div style={{textAlign: 'center'}}>
        <hr className="w-[80%] border-t border-dotted border-red-200 mx-auto" />
        <div className="flex items-end text-2xl justify-center pt-2 font-bold gap-2">
            <div className="grid gap-2">
                <span className="text-xs text-gray-500">DAYS</span>
                <span suppressHydrationWarning>{days}</span>
            </div>
            <span> : </span>
            <div className="grid gap-2">
                <span className="text-xs">HOUR</span>
                <span suppressHydrationWarning>{hours}</span>
            </div>
            <span> : </span>
            <div className="grid gap-2">
                <span className="text-xs">MIN</span>
                <span suppressHydrationWarning>{minutes}</span>
            </div>
            <span> : </span>
            <div className="grid gap-2">
                <span className="text-xs">SEC</span>
                <span suppressHydrationWarning>{seconds}</span>
            </div>
        </div>
        <div className="mt-4 font-bold">
            <p>태현, 새미의 결혼식이 <span className="text-red-400">{days}</span>일 남았습니다.</p>
        </div>
    </div>
    );
}