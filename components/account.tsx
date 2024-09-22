'use client';

import Title from "./title";
import { IoIosArrowDown } from "react-icons/io";

export default function Account(){
    const buttonAccountClick = (e) => {
        let value = e.target.value;
        if(e.target.tagName === 'BUTTON'){
            e.target.children[0].classList.toggle("active");
        }else{
            e.target.classList.toggle("active");
        }

        if(value === undefined){
            value = e.target.parentElement.value;
        }
        const toggleElement = document.getElementById(value);
        toggleElement.classList.toggle("active");
    }

    const handleButtonClick = (e) => {
        const account = e.target.parentElement.getElementsByTagName("b")[0].textContent;
        handleCopyClipBoard(account);
    }

    const handleCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("클립보드에 복사가 완료 되었습니다.");
        } catch (e) {
            alert("복사에 실패 하였습니다.");
        }
    };

    return (
        <div className="py-5 bg-red-100">
            <Title ko='마음 전하실 곳' en='ACCOUNT' />
            <div className="w-full py-2">
                <p className="text-lg text-center">
                    참석이 어려우신 분들을 위해<br />
                    계좌번호를 기재하였습니다.<br />
                    너그러운 마음으로 양해 부탁드립니다.
                </p>
                <div className="w-full pt-5">
                    <button type="button" value={"groom"} className="accountButton flex items-center justify-center bg-white shadow text-sm py-2 rounded text-red-400 font-bold mx-auto w-[80%]" onClick={buttonAccountClick}>신랑측 계좌번호 <IoIosArrowDown className="ml-2" /></button>
                    <div id="groom" className="mx-auto w-[80%] mt-2">
                        <div className="bg-white rounded">
                            <div className="border-b p-2">
                                <h1 className="flex items-center font-bold pb-2">이태현 <span className="mx-2 text-sm">신랑</span></h1>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">우리은행 <b className="ml-2">123456789123456</b></span>
                                    <button type="button" className="bg-red-100 p-1 shadow rounded text-sm" onClick={handleButtonClick}>복사하기</button>
                                </div>
                            </div>
                            <div className="border-b p-2">
                                <h1 className="font-bold pb-2">이상규 <span className="mx-2 text-sm">신랑 아버지</span></h1>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">우리은행 <b className="ml-2">1108884444</b></span>
                                    <button type="button" className="bg-red-100 p-1 shadow rounded text-sm" onClick={handleButtonClick}>복사하기</button>
                                </div>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold pb-2">정문숙 <span className="mx-2 text-sm">신랑 어머니</span></h1>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">우리은행 <b className="ml-2">1104zzz444444</b></span>
                                    <button type="button" className="bg-red-100 p-1 shadow rounded text-sm" onClick={handleButtonClick}>복사하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <button type="button" value={"bride"} className="accountButton flex items-center justify-center bg-white shadow text-sm py-2 rounded text-red-400 font-bold mx-auto w-[80%]" onClick={buttonAccountClick}>신부측 계좌번호 <IoIosArrowDown className="ml-2" /></button>
                    <div id="bride" className="mx-auto w-[80%]">
                        <div className="bg-white rounded my-2">
                            <div className="border-b p-2">
                                <h1 className="flex items-center font-bold pb-2">박새미 <span className="mx-2 text-sm">신부</span></h1>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">신한 <b className="ml-2">110434755333</b></span>
                                    <button type="button" className="bg-red-100 p-1 shadow rounded text-sm" onClick={handleButtonClick}>복사하기</button>
                                </div>
                            </div>
                            <div className="border-b p-2">
                                <h1 className="font-bold pb-2">박광도 <span className="mx-2 text-sm">신부 아버지</span></h1>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">새마을 <b className="ml-2">9002147185361</b></span>
                                    <button type="button" className="bg-red-100 p-1 shadow rounded text-sm" onClick={handleButtonClick}>복사하기</button>
                                </div>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold pb-2">권영일 <span className="mx-2 text-sm">신부 어머니</span></h1>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">농협 <b className="ml-2">3521917261373</b></span>
                                    <button type="button" className="bg-red-100 p-1 shadow rounded text-sm" onClick={handleButtonClick}>복사하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}