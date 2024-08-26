'use client';

import { useMutation, useQuery } from "@tanstack/react-query";
import { createGestBook, getGestBook } from "actions/gestBook";
import { useState } from "react";
import Title from "./title";
import GestBookItem from "./gestBookItem";
import { IoMdClose } from "react-icons/io";

export default function GestBook(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [contents, setContents] = useState('');

    const [endIndex, setEndIndex] = useState(4);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    const gestBooksQuery = useQuery({
        queryKey: ["gestBooks"],
        queryFn: () => getGestBook(endIndex),
    });

    const createGestBookMutation = useMutation({
        mutationFn: () => createGestBook({
            name: username,
            password: password,
            contents: contents
        }),
        onSuccess: () => {
            gestBooksQuery.refetch();
        }
    });
    
    const buttonClick = (e) => {
        e.preventDefault();

        if(username === ''){
            alert('이름을 입력하세요.');
        }else if(password === ''){
            alert('비밀번호를 입력하세요.');
        }else if(contents === ''){
            alert('축하글을 입력하세요.');
        }else{
            setIsOpen(false);

            createGestBookMutation.mutate();
        }
    }

    const buttonAddClick = () => {

    }

    return (
        <div className="py-5">
            <Title ko='방명록' en='GESTBOOK' />
            <div>
                {gestBooksQuery.isLoading && <p className="text-center">Loading...</p>}
                {gestBooksQuery.data && gestBooksQuery.data.map(gestbook => <GestBookItem key={gestbook.id} gestbook={gestbook} />)}
                {gestBooksQuery.data && gestBooksQuery.data.length === 0 ? (<p className="text-center">축하글을 작성해주세요.</p>): null}
                {gestBooksQuery.data && (gestBooksQuery.data.length > 4 && gestBooksQuery.data.length > endIndex) ? (
                    <div className="flex items-center justify-center"><button type="button" onClick={buttonAddClick}>더보기</button></div>
                ): null}
            </div>
            <div className="flex justify-end mx-5">
                <button className="py-2 px-4 flex items-center justify-end bg-red-400 text-white rounded shadow mt-2 text-sm font-bold" type="button" onClick={openModalHandler}>작성하기</button>
            </div>
            {isOpen ? (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
                    <div className="relative w-auto min-w-[85%] my-6 mx-auto">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
                            {/* header */}
                            <div className="flex items-start justify-between p-4 border-b border-solid rounded-t">
                                <h3 className="text-xl font-semibold text-center w-full">박명록</h3>
                                <button
                                    className="absolute right-4 top-5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        <IoMdClose />
                                    </span>
                                </button>
                            </div>
        
                            {/* body */}
                            <div className="relative p-6 flex-auto">
                                <form className="w-full">
                                    <div className="flex items-center justify-between mb-2">
                                        <label htmlFor="name"><span className="text-red-400">*</span> 이름</label>
                                        <input name="name" type="text" className="border-b px-2 py-1 w-[50%]" onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label htmlFor="password"><span className="text-red-400">*</span> 비밀번호</label>
                                        <input name="password" type="password" className="border-b px-2 py-1 w-[50%]" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <textarea name="contents" placeholder="내용을 입력하세요." className="border w-full mt-3 min-h-20 p-2" onChange={(e) => setContents(e.target.value)} ></textarea>
        
                                    <div className="flex items-center justify-end py-4">
                                        <button
                                        className="bg-red-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none"
                                        type="button"
                                        name="gestbook"
                                        onClick={buttonClick}
                                        >
                                            {'축하글 전달하기'}
                                        </button>
                                    </div>
                                </form>
                            </div>                    
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}