'use client';

import { dehydrate, QueryClient } from "@tanstack/react-query"
import { fetchGestBooks } from "utils/gestBooks"
import GestBookItem from "./gestBookItem"
import Title from "./title"
import { useState } from "react";
import Modal from "./modal";

export default function Gest(){
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

export async function getStaticProps() {
    const queryClient = new QueryClient();
  
    await queryClient.prefetchQuery({
      queryKey: ['gestbooks', 4],
      queryFn: () => fetchGestBooks(4),
    })
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  }