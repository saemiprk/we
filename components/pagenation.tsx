'use client';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Page = {
    totalPage: number;
    currentPage: number;
    current: (currentPage: number) => void;
    start: (startIndex: number) => void;
    end: (endIndex: number) => void;
}

export default function Pagenation({ totalPage, currentPage, current, start, end }: Page){
    const count: number = 5;

    const pageNumbers: number[] = [];
    for(let i = 1; i <= totalPage; i++){
        pageNumbers.push(i);
    }

    return (
        <div className="flex mx-auto items-center justify-center">
            <div className="mx-2">
                <button type="button" className="text-sm text-gray-600">
                    <IoIosArrowBack />
                </button>
            </div>
            <ul className="flex items-center justify-center">
                {pageNumbers.map((number) => (
                    <li key={number} className={`${currentPage === number ? "text-red-400" : ""} px-1`}>
                        <button type="button" onClick={(e) => {
                            e.preventDefault();

                            current(number);

                            const startNum = (number-1) *count;
                            const endNum = startNum + 4;

                            start(startNum);
                            end(endNum);

                            }}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mx-2">
                <button type="button" className="text-sm text-gray-600">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}