'use client';

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGestBooks } from "utils/gestBooks";
import Modal from "./modal";
import Pagenation from "./pagenation";

type GestBook = {
    id?: number;
    name: string;
    password: string;
    contents?: string;
}

export default function GestBookItem(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const start = (startIndex: number) => setStartIndex(startIndex);
    const end = (endIndex: number) => setEndIndex(endIndex);
    const current = (currentPage: number) => setCurrentPage(currentPage);

    const { data, isPending } = useGestBooks(startIndex, endIndex);
    const [delGestBook, setDelGestBook] = useState({
        id: 0,
        name: "",
        password: "",
    });

    if (isPending) return (
        <div className="flex items-center justify-center">Loading...</div>
    )

    return (
        <div className="grid grid-row gap-2 py-2">
            {data.data?.map((gestbook : GestBook)=> (
                <div key={gestbook.id} className="relative bg-red-100 p-2 w-[80%] mb-2 mx-auto rounded-md shadow">
                    <div className="font-bold mb-1">{gestbook.name}</div>
                    <div>{gestbook.contents}</div>
                    <button type="button" className="absolute top-2 right-2 text-gray-600 text-md text-md" onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(!isOpen);

                        setDelGestBook({
                            id: gestbook.id,
                            name: gestbook.name,
                            password: gestbook.password
                        });
                    }}><IoMdClose /></button>
                </div>
            ))}
            {data.data.length > 0 ? (
                <Pagenation totalPage={data.totalPage} currentPage={currentPage} start={start} end={end} current={current} />
            ) : <div className="text-center">축하글을 작성해주세요.</div>}
            
            {isOpen? (
                <Modal type="delete" setIsOpen={()=> setIsOpen(!isOpen)} gestbook={delGestBook}/>
            ): null}
        </div>
    )
}