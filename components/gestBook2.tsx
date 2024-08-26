'use client';

import { useMutation } from "@tanstack/react-query";
import { createGestBook } from "actions/gestBook";
import { queryClient } from "config/ReactClientProivider";
import { useState } from "react";
import GestBookItem from "./gestBookItem";

export default function GestBook2(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [contents, setContents] = useState('');
    
    const createGestBookMutation = useMutation({
        mutationFn: () => createGestBook({
            name: username,
            password: password,
            contents: contents,
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["gestbooks"],
            });
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username.trim()){
            alert("이름을 입력해주세요.");
            return;
        }else if(!password.trim()){
            alert("비밀번호를 입력해주세요.");
            return;
        }else if(!contents.trim()){
            alert("내용을 입력해주세요.");
            return;
        }else{

            createGestBookMutation.mutate();
            setUserName('');
            setPassword('');
            setContents('');
        }
    }

    return (
        <div className="py-5">
            <div className="grid grid-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="username">이름</label>
                    <input type="text" name="username" className="border p-2 rounded w-52" onChange={(e) => setUserName(e.target.value)} /> 
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" name="password" className="border p-2 rounded w-52" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <textarea className="border" onChange={(e) => setContents(e.target.value)} />
                <button type="submit" className="bg-gray-200" onClick={handleSubmit}>작성하기</button>
            </div>
            <GestBookItem />
            
        </div>
    )
}