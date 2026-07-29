import { Space_Grotesk, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://junhaozhao.com"),
  title: {
    default: "Junhao Zhao | Software Engineer",
    template: "%s | Junhao Zhao",
  },
  description:
    "Backend-leaning software engineer building APIs, data-intensive applications, and research tools.",
  openGraph: {
    title: "Junhao Zhao | Software Engineer",
    description: "Projects, experience, and contact information.",
    url: "https://junhaozhao.com",
    siteName: "Junhao Zhao",
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
    },
  },
};

// Only facts already stated on the page — no invented titles or affiliations.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Junhao Zhao",
  url: "https://junhaozhao.com",
  image: "https://junhaozhao.com/profile.jpg",
  description:
    "Backend-leaning software engineer building APIs, data-intensive applications, and research tools.",
  sameAs: [
    "https://www.linkedin.com/in/junhao-zhao/",
    "https://github.com/jzhao234",
  ],
};

// Applies the stored theme before first paint so the dark default
// never flashes light on load.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jakarta.variable} ${geistMono.variable} antialiased bg-canvas text-content`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
