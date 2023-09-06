import { pretendard } from '@/utils/fonts';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: `KMin's Blog`,
  description: '프론트엔드 개발자 경민의 블로그입니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-normal">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
