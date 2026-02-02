import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./footer/Footer";

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
  title: "TexToHTML",
  description: "Tex to HTML converter",
  keywords: "LaTeX, KaTeX, HTML, Math, Converter, TexToHTML",
  authors: [{ name: "Levente Fabry", url: "https://github.com/leventefabry/TexToHTML" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col overflow-hidden antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
