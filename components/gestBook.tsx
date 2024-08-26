'use client';

import GestBookItem from "./gestBookItem"
import Title from "./title"
import { useState } from "react";
import Modal from "./modal";

export default function GestBook(){
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <div className="py-5">
        <Title ko='방명록' en='GESTBOOK' />
        <GestBookItem />
        <div className="flex items-center justify-end">
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="mx-8 rounded bg-red-400 text-white shadow p-2 text-sm py-2 px-6 font-bold">작성하기</button>
        </div>
        {isOpen? (
          <Modal type="create" setIsOpen={()=> setIsOpen(!isOpen)} />
        ) : null}
      </div>
  )
}