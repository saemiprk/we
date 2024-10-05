import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "config/ReactClientProivider";
import RecoilProvider from "config/RecoilProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이태현, 박새미의 결혼식에 초대합니다.",
  description: "2024년 12월 14일 오전 11시 JK아트컨벤션",
  openGraph: {
    images: {
      url: '/images/meta.jpg'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilProvider>
      <ReactQueryClientProvider>
        
        <html lang="en">
          <Script type="text/javascript" src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`} />
          <body className={inter.className}>{children}</body>
        </html>
      </ReactQueryClientProvider>
    </RecoilProvider>
  );
}
