"use client";

import { useState } from "react";
import Title from "./title";
import InvitionModal from "./invitionModal";

export default function Invition(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="py-5 bg-red-100">
            <Title ko='초대합니다' en='INVITION' />

            {/* Content */}
            <div className="w-full text-center py-5 text-lg">
                세상이 온통 하얗게 물든 겨울날 <br />
                저희 두 사람이 평생을 약속하게 되었습니다. <br />
                귀한 걸음 하셔서 저희의 앞날을 <br />
                축복해 주시면 감사하겠습니다.
            </div>
            <div className="w-full text-center pb-5">
                <div className="mb-1">
                    <span className='text-lg font-bold'>이상규 · 정문숙 <span className='m-2 text-sm'>장남</span>이태현</span>
                </div>
                <div className="font-bold">
                    <span className='text-lg font-bold'>박광도 · 권영일 <span className='m-2 text-sm'>장녀</span>박새미</span>
                </div>
                <div className="flex items-center justify-center pt-5">
                   <button className="bg-white text-red-400 rounded py-2 px-6 font-bold shadow text-sm" type="button" onClick={openModalHandler}>연락하기</button>
                </div>
                {isOpen ? (
                    <InvitionModal setIsOpen={setIsOpen} />
                ) : null}
            </div>
        </div>
    )
}