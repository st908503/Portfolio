import '../globals.css'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from '@/features/theme/theme-provider';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shashank Tripathi | Frontend & React Native Engineer",
  description:
    "Portfolio of Shashank Tripathi, Frontend Developer specializing in React, React Native, and fintech payment systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="flex flex-col bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 h-full">
            <Header />
            <main className="flex-1 flex">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
