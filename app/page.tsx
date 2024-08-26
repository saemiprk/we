import { Metadata } from "next";
import Account from "components/account";
import DecCalendar from "components/decCalendar";
import GestBook from "components/gestBook";
import ImageGallery from "components/imageGallery";
import Invition from "components/invition";
import Location from "components/location";
import Main from "components/main";

export const metadata: Metadata = {
  title: "이태현, 박새미의 결혼식에 초대합니다.",
  description: "2024년 12월 14일 오전 11시 JK아트컨벤션",
  openGraph: {
    images: {
      url: '/images/main.jpg'
    }
  }
};

export default function Home() {
  return (
    <main className="relative max-w-screen-sm mx-auto">
      <Main />
      <Invition />
      <ImageGallery />
      <DecCalendar />
      <Location />
      <Account />
      <GestBook />
    </main>
  );
}
