import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "config/ReactClientProivider";
import RecoilProvider from "config/RecoilProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이태현, 박새미의 결혼식에 초대합니다.",
  description: "2024년 12월 14일 오전 11시 JK아트컨벤션 엠버루체홀",
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
          <body className={inter.className}>{children}</body>
        </html>
      </ReactQueryClientProvider>
    </RecoilProvider>
  );
}
