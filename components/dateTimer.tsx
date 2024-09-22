'use client';

import { useEffect, useState } from "react";

export default function DateTimer(){
    const wedding = new Date('2024-12-14 11:00:00').getTime();
    const [calculatedate, setCalculatedate] = useState(wedding - new Date().getTime());

    useEffect(() => {
        const intervalRef = setInterval(() => setCalculatedate(wedding - new Date().getTime()), 1000);
        return () => {
            clearInterval(intervalRef);
        };
    });

    const day = Math.ceil((calculatedate / (1000 * 60 * 60 * 24)));
    const hours = Math.ceil((calculatedate / (1000*60*60) % 24));
    const min = Math.ceil((calculatedate / (1000*60) % 60));
    const sec = Math.ceil((calculatedate /1000 % 60));

    return (
    <div className="text-center">
        <hr className="w-[80%] border-t border-dotted border-red-200 mx-auto" />
        <div className="flex items-end text-2xl justify-center pt-2 font-bold gap-2">
            <div className="grid gap-2">
                <span className="text-xs text-gray-500 tracking-widest">DAYS</span>
                <span>{day}</span>
            </div>
            <span> : </span>
            <div className="grid gap-2">
                <span className="text-xs text-gray-500 tracking-widest">HOUR</span>
                <span>{hours}</span>
            </div>
            <span> : </span>
            <div className="grid gap-2">
                <span className="text-xs text-gray-500 tracking-widest">MIN</span>
                <span>{min}</span>
            </div>
            <span> : </span>
            <div className="grid gap-2">
                <span className="text-xs text-gray-500 tracking-widest">SEC</span>
                <span suppressHydrationWarning>{sec}</span>
            </div>
        </div>
        <div className="mt-4 font-bold">
            <p>태현, 새미의 결혼식이 <span className="text-red-400">{day}</span>일 남았습니다.</p>
        </div>
    </div>
    );
}