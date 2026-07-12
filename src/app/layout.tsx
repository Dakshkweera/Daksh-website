import type { Metadata } from "next";
import { Fraunces, Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import IntroGate from "@/components/IntroGate";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daksh Kweera — SWE, AI/ML & Full-Stack",
  description:
    "Portfolio of Daksh Kweera — B.Tech CSE (AI/ML) student building scalable full-stack and AI-powered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${rajdhani.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <IntroGate>
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </IntroGate>
      </body>
    </html>
  );
}
