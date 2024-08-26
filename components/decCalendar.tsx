'use client';

import { useState } from "react";
import Calendar from "react-calendar";

export default function DecCalendar(){
    const ourDate = new Date('2024-12-14');
    const [date, setDate] = useState(ourDate);
    const month = ourDate.getMonth() + 1;

    return (
        <div className="py-5 bg-red-100 cursor-default">
            
            {/* Calendar */}
            <div className='w-full text-center text-2xl font-bold mb-5'>{month} 월</div>
            <div className='flex items-center justify-center w-full pb-3 border-b border-dotted border-red-200'>
                <Calendar className='border-none bg-transparent font-bold text-center'
                    value= {date}
                    showNavigation = {false}
                    showNeighboringMonth = {false}
                    formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
                />
             </div>

            {/* CountDown */}
            <div className="w-full text-center pt-5">
                
            </div>
        </div>
    )
}