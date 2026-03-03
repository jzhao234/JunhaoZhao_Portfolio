import { Geist, Geist_Mono, Luckiest_Guy } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const luckiest = Luckiest_Guy({
  variable: "--font-luckiest",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://junhaozhao.com"),
  title: {
    default: "Junhao's Portfolio | Software Engineer ",
    template: "%s | Junhao Zhao"
  },
  description: "Full Stack Software Engineer Building Modern Applications",
  openGraph: {
    title: "Junhao's Portfolio | Software Engineer",
    description: "Projects, Experience, and Contact Info",
    url: "https://junhaozhao.com",
    siteName: "Junhao Zhao Portfolio",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Junhao Zhao" }],
  },
  robots: {
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1, 
      "max-video-preview": -1,
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${luckiest.variable} antialiased`}>
        <ThemeProvider>
          <Navbar/>
          <main className="min-h-screen flex flex-col bg-white dark:bg-[#151516] text-black dark:text-white"> {children} </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
