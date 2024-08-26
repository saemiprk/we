'use client';

import Link from "next/link";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export default function InvitionModal({setIsOpen}){
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className="relative w-auto min-w-[85%] my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
                    {/* header */}
                    <div className="flex items-start justify-between p-4 border-b border-solid rounded-t">
                        <h3 className="text-xl font-semibold text-center w-full">연락하기</h3>
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
                        <button type="button" className='absolute top-5 right-5 text-white text-xl z-50'><IoMdClose /></button>
                        <div className="border-b border-dotted">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm w-[30%]">신랑</span>
                                <span className="font-bold">이태현</span>
                                <div className="flex items-center text-red-400 mx-2">
                                    <Link href='tel:01079140900'><BsFillTelephoneFill className="mr-4" /></Link>
                                    <Link href='sms:01079140900'><BsEnvelopeFill /></Link>
                                </div>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm w-[30%]">신랑 아버지</span>
                                <span className="font-bold">이상규</span>
                                <div className="flex items-center text-red-400 mx-2">
                                    <Link href='tel:'><BsFillTelephoneFill className="mr-4" /></Link>
                                    <Link href='sms:'><BsEnvelopeFill /></Link>
                                </div>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm w-[30%]">신랑 어머니</span>
                                <span className="font-bold">정문숙</span>
                                <div className="flex items-center text-red-400 mx-2">
                                    <Link href='tel:'><BsFillTelephoneFill className="mr-4" /></Link>
                                    <Link href='sms:'><BsEnvelopeFill /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex justify-between mb-2">
                                <span className=" text-sm w-[30%]">신부</span>
                                <span className="font-bold">박새미</span>
                                <div className="flex items-center text-red-400 mx-2">
                                    <Link href='tel:01092852860'><BsFillTelephoneFill className="mr-4" /></Link>
                                    <Link href='sms:01092852860'><BsEnvelopeFill /></Link>
                                </div>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className=" text-sm w-[30%]">신부 아버지</span>
                                <span className="font-bold">박광도</span>
                                <div className="flex items-center text-red-400 mx-2">
                                    <Link href='tel:01088921471'><BsFillTelephoneFill className="mr-4" /></Link>
                                    <Link href='sms:01088921471'><BsEnvelopeFill /></Link>
                                </div>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className=" text-sm w-[30%]">신부 어머니</span>
                                <span className="font-bold">권영일</span>
                                <div className="flex items-center text-red-400 mx-2">
                                    <Link href='tel:01064422146'><BsFillTelephoneFill className="mr-4" /></Link>
                                    <Link href='sms:01064422146'><BsEnvelopeFill /></Link>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}