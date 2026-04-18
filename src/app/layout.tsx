import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GardenTree's Portfolio",
  description: "GardenTreeのポートフォリオサイト。ハードウェアからクラウドまで、アイデアを形にしたプロジェクトを紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className="scroll-pt-16">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
        suppressHydrationWarning
      >
        {/* Development Status Badge */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-yellow-900/40 border border-yellow-500/30 text-yellow-500 px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg flex items-center gap-2 pointer-events-none select-none">
          <span aria-hidden="true">🚧</span>
          <span>このサイトは現在開発中です</span>
        </div>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
