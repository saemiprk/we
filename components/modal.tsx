'use client';

import { useMutation } from "@tanstack/react-query";
import { createGestBook, deleteGestBook } from "actions/gestBook";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGestBooks } from "utils/gestBooks";

type Props = {
    type: string;
    gestbook?: {
        id?: number;
        name: string;
        password: string;
        contents?: string;
    },
    setIsOpen?: (isOpen: boolean) => void;
    startIndex?: number;
    endIndex?: number;
    start?: (startIndex: number) => void;
    end?: (endIndex: number) => void;
} 

export default function Modal(props: Props){
    const startIndex = props.startIndex;
    const endIndex = props.endIndex;
    
    const { refetch } = useGestBooks(startIndex, endIndex);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");

    const [id, setId] = useState(0);

    const createMutation = useMutation({
        mutationFn: () => createGestBook({
            name: userName,
            password: password,
            contents: contents
        }),
        onSuccess: () => {
            props.setIsOpen(false);
            alert("작성이 완료 되었습니다.");
            refetch();
        }
    });

    const deleteMutation = useMutation({
        mutationFn: () => deleteGestBook({
            id: id,
            name: userName,
            password: password,
        }),
        onSuccess: () => {
            props.setIsOpen(false);
            alert("삭제가 완료 되었습니다.");
            props.start(0);
            props.end(4);
        }
    });

    const buttonClick = (e) => {
        e.preventDefault();

        if(props.type === "create"){

            if(!userName){
                alert("이름을 입력하세요.");
            }else if(!password){
                alert("비밀번호를 입력하세요.");
            }else if(!contents){
                alert("내용을 입력하세요.");
            }else{
                createMutation.mutate();
                props.setIsOpen(false);
            }

        }else if(props.type === "delete"){
            if(!password){
                alert("비밀번호를 입력하세요.");
            }else{
                setId(props.gestbook.id);
                if(password === props.gestbook.password){
                    deleteMutation.mutate();
                }else{
                    alert("비밀번호가 틀렸습니다.");
                }
            }
        }
    }

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
            <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md p-2">
                {props.type === 'create' ? (
                    <div>
                        {/* Header */}
                        <div className="relative w-full py-2 font-bold text-2xl text-center border-b">
                            <h1>박명록</h1>
                            <button type="button" className="absolute top-2 right-2 text-md text-gray-500" onClick={() => {props.setIsOpen(false)}}><IoMdClose /></button>
                        </div>

                        {/* Body */}
                        <div className="m-2">
                            <form>
                                <div className="grid grid-col gap-2 mb-2">
                                    <label htmlFor="username" className="font-bold">이름</label>
                                    <input type="text" name="username" className="border rounded p-2" onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="grid grid-col gap-2 mb-2">
                                    <label htmlFor="password" className="font-bold">비밀번호</label>
                                    <input type="password" name="password" className="border rounded p-2" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="grid grid-col gap-2">
                                    <label htmlFor="username" className="font-bold">내용</label>
                                    <textarea name="username" className="border rounded p-2" onChange={(e) => setContents(e.target.value)} />
                                </div>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="w-full flex items-center justify-end my-3 p-2">
                            <button type="button" className="flex items-center shadow bg-red-400 text-white p-2 rounded" onClick={buttonClick}>축하글 전달하기</button>
                        </div>
                    </div>
                ) : props.type === 'delete' ? (
                    <div className="p-2">
                        {/* Header */}
                        <div className="relative w-full py-2 font-bold text-center">
                            <h1 className="text-lg">삭제 하시려면 비밀번호를 입력하세요.</h1>
                            <button type="button" className="absolute top-1 right-1 text-2xl text-gray-500" onClick={() => {props.setIsOpen(false)}}><IoMdClose /></button>
                        </div>
                        {/* Body */}
                        <div className="grid grid-col gap-2 m-2">
                            <label htmlFor="password font-bold">비밀번호</label>
                            <input type="password" name="password" className="border rounded p-2" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {/* Footer */}
                        <div className="w-full flex items-center justify-end p-2">
                            <button type="button" className="flex items-center shadow bg-red-400 text-white p-2 rounded" onClick={buttonClick}>삭제하기</button>
                        </div>
                    </div>
                ): null}
            </div>
        </div>
    )
}