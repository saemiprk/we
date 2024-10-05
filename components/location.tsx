'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import Title from "./title";
import { IoMdSubway } from "react-icons/io";
import { IoMdBus } from "react-icons/io";
import { IoMdCar } from "react-icons/io";
import naverImage from "../public/images/naver.png";
import kakaoImage from "../public/images/kakao.png";
import Image from "next/image";
import Link from "next/link";

export default function Location(){
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeMap = () => {
            if (mapRef.current && (window as any).naver) {
                const position = new (window as any).naver.maps.LatLng(37.517436, 126.8997884);
                const mapOptions = {
                    center: position,
                    zoom: 16
                };
                
                const map = new (window as any).naver.maps.Map(mapRef.current, mapOptions);

                // 마커 추가
                const marker = new (window as any).naver.maps.Marker({
                    position: position,
                    map: map,
                    title: 'JK아트컨벤션'
                });

                // 정보창 추가
                const infoWindow = new (window as any).naver.maps.InfoWindow({
                    content: `
                        <div style="padding:10px;width:300px;">
                            <h3 style="margin-bottom:5px;">JK아트컨벤션</h3>
                            <p style="margin-bottom:5px;">문래로 164, 영등포구, 서울</p>
                            <p>우편번호: 07297</p>
                        </div>
                    `
                });

                // 마커 클릭 시 정보창 표시
                (window as any).naver.maps.Event.addListener(marker, 'click', function() {
                    if (infoWindow.getMap()) {
                        infoWindow.close();
                    } else {
                        infoWindow.open(map, marker);
                    }
                });
            }
        };

        // Check if naver is already available
        if ((window as any).naver && (window as any).naver.maps) {
            initializeMap();
        } else {
            // If not, wait for the script to load
            (window as any).initMap = initializeMap;
        }
    }, []);

    return (
        <div className="py-5">
            <Script 
                strategy="afterInteractive"
                type="text/javascript"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
                onReady={() => (window as any).initMap && (window as any).initMap()}
            />
            <Title ko='오시는길' en='LOCATION' />

            {/* Content */}
            <div className="py-2">
                <div className="flex justify-center items-center flex-col pb-2">
                    <div className="text-center leading-8">서울 영등포구 문래로 164, SK리더스뷰 4층<br /><b className="font-bold">JK아트컨벤션 엠버루체홀</b></div>
                </div>
                <div className="flex justify-center">
                    <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
                </div>
                <div className="flex gap-2 items-center justify-center pt-4">
                    <div className="flex border p-2 items-center justify-start rounded">
                        <Link className="flex items-center" href='https://naver.me/FHYucCYu'><Image src={naverImage} width={30} height={30} alt={"서울 영등포구 문래로 164, JK아트컨벤션"} />
                            <span className="ml-2 text-sm">네이버지도</span>
                        </Link>
                    </div>
                    <div className="flex border p-2 items-center justify-start rounded">
                        <Link className="flex items-center" href='https://kko.to/x-jr9fttei'><Image src={kakaoImage} width={30} height={30} alt={"서울 영등포구 문래로 164, JK아트컨벤션"} />
                            <span className="ml-2 text-sm">카카오맵</span>
                        </Link>
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