import type { Metadata } from "next";
import Head from "next/head"; 
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import { GeistSans } from 'geist/font/sans';





export const metadata: Metadata = {
  title: "Mohtasham's Portfolio",
  description: "My Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Mohtasham`&apos;`s Portfolio</title>
        <meta name="description" content="My Minimalistic Portfolio" />
        {/* Add the favicon link */}
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <body
        className={GeistSans.className}
      >
        <Navbar />
        {children}
        <footer className="text-center mt-4 text-white/40 font-serif">Mohtasham@2024</footer>
      </body>
    </html>
  );
}
