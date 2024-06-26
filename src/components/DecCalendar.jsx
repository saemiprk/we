import React, { useState } from 'react';
import Calendar from 'react-calendar';

const DecCalendar = () => {
    const [date, setDate] = useState(new Date('2024-12-14'));
    const month = new Date('2024-12-14').getMonth() + 1;

    return (
        <div>
            <div className='GowunBatang-Bold text-2xl mb-3'>{month} 월</div>
            <div className='flex items-center justify-center w-full pb-3 border-b border-dotted border-red-200'>
                <Calendar className='border-none bg-transparent GowunBatang-Bold'
                    onChange= {setDate}
                    value= {date}
                    showNavigation = {false}
                    showNeighboringMonth = {false}
                    formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
                />
             </div>
        </div>
    )
}

export default DecCalendar