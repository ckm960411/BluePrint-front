import { pretendard } from "@/utils/fonts";
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import SideBar from "@/components/common/sidebar/SideBar";
import { ChakraUIProvider } from "@/components/common/ChakraUIProvider";
import BottomNavigation from "@/components/common/BottomNavigation";
import ScrollToTop from "@/components/common/ScrollToTop";
import RecoilProvider from "@/components/common/RecoilProvider";
import ImageDetailProvider from "@/components/common/ImageDetailProvider";

import "./globals.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const metadata: Metadata = {
  title: `KMin's Blog`,
  description: "프론트엔드 개발자 경민의 블로그입니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="flex flex-col font-normal">
        <RecoilProvider>
          <ChakraUIProvider>
            <div className="relative flex grow">
              <SideBar />
              <div className="flex grow flex-col">
                <Header />
                <main className="grow">
                  <ImageDetailProvider>{children}</ImageDetailProvider>
                </main>
              </div>
              <ScrollToTop />
            </div>
            <BottomNavigation />
          </ChakraUIProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
