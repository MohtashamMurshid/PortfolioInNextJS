import type { Metadata } from "next";
import Head from "next/head"; // Import the Head component from Next.js
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Adjust the import path as necessary

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
