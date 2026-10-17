import "../globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config/siteConfig";
import { ThemeProvider } from "@/features/theme/theme-provider";
const sans = localFont({ src: "../../public/fonts/inter-variable.ttf", variable: "--font-inter", display: "swap" });
const mono = localFont({ src: "../../public/fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", display: "swap" });
export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Shashank Tripathi | Frontend & React Native Developer",
  description:
    "Portfolio of Shashank Tripathi, Frontend Developer specializing in React, React Native, and fintech payment systems.",
=======
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
  title: { default: "Shashank Tripathi — Full Stack Engineer", template: "%s | Shashank Tripathi" },
  description: "Senior frontend-focused full stack engineer with 4.5+ years of experience. React, TypeScript, Next.js, Node.js, and React Native. Senior Technical Consultant at EY India, New Delhi.",
  icons: { icon: "/favicon.svg" },
  applicationName: "Shashank Tripathi Portfolio",
  authors: [{ name: "Shashank Tripathi" }],
  openGraph: { title: "Shashank Tripathi — Full Stack Engineer", description: "Frontend depth. Full stack perspective. Explore professional work across public-sector systems, fintech, enterprise, and mobile." },
  robots: { index: true, follow: true },
>>>>>>> eaacee3 (updated resume)
};
const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning>
    <body className={`${sans.variable} ${mono.variable}`} id="top">
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <ThemeProvider>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </ThemeProvider>
    </body>
  </html>;
}
