'use client';

import Title from "./title";
import { IoMdSubway } from "react-icons/io";
import { IoMdBus } from "react-icons/io";
import { IoMdCar } from "react-icons/io";
import mapImage from "../public/images/naver_map.png";
import naverImage from "../public/images/naver.png";
import kakaoImage from "../public/images/kakao.png";
import Image from "next/image";
import Link from "next/link";

export default function Location(){
    return (
        <div className="py-5">
            <Title ko='오시는길' en='LOCATION' />

            {/* Content */}
            <div className="py-2">
                <div className="flex justify-center items-center flex-col pb-2">
                    <div className="text-center leading-8">서울 영등포구 문래로 164, SK리더스뷰 4층<br /><b className="font-bold">JK아트컨벤션 엠버루체홀</b></div>
                </div>
                <Image className="m-auto" src={mapImage} width={640} height={197} alt={"서울 영등포구 문래로 164, JK아트컨벤션"} priority />
                <div className="flex gap-2 items-center justify-center pt-4">
                    <div className="flex border p-2 items-center justify-start rounded">
                        <Link href='https://naver.me/FHYucCYu'><Image className="" src={naverImage} width={30} height={30} alt={"서울 영등포구 문래로 164, JK아트컨벤션"} /></Link>
                        <span className="ml-2 text-sm">네이버지도</span>
                    </div>
                    <div className="flex border p-2 items-center justify-start rounded">
                        <Link href='https://kko.to/x-jr9fttei'><Image className="" src={kakaoImage} width={30} height={30} alt={"서울 영등포구 문래로 164, JK아트컨벤션"} /></Link>
                        <span className="ml-2 text-sm">카카오맵</span>
                    </div>
                </div>
            </div>
            <div>
                {/* Subway */}
                <div className="py-2 px-6">
                    <div className="flex items-center"><IoMdSubway className="mr-1" />지하철 안내</div>
                    <div className="text-sm mt-2">
                        <p>2호선 문래역 5번출구 전방 직진 300M</p>
                        <p>2호선 문래역 4번출구(뒤쪽) 셔틀버스 운행</p>
                    </div>
                </div>
                {/* Bus */}
                <div className="py-2 px-6">
                    <div className="flex items-center"><IoMdBus className="mr-1" />버스 안내</div>
                    <div className="text-sm mt-2">
                        <p>문래역: 6211, 6625, 641, 영등포12</p>
                        <p>문래주민센터 / 영일시장,록스 : 영등포05</p>
                        <p>벽제메가트리움APT : 6516</p>
                    </div>
                </div>
                {/* Car */}
                <div className="py-2 px-6">
                    <div className="flex items-center"><IoMdCar className="mr-1" />자가용 안내</div>
                    <div className="text-sm mt-2">
                        <p>네비게이션 : "JK아트컨벤션" 또는 "문래동 SK리더스뷰"</p>
                        <p>- 주차장 동시 1,000여대 주차 가능 / 2시간 무료</p>
                    </div>
                </div>
            </div>
        </div>
    )
}