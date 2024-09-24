"use client";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50">
      <nav className="flex justify-between items-center p-4 text-white bg-[#0a0a0a]">
        <div className="text-xl font-light tracking-wide font-sans flex flex-row gap-3 items-center">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <h1 className="jacquarda-bastarda-9-regular">Mohtasham</h1>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="lg:hidden">
          <Button onClick={toggleMenu} className="text-white bg-transparent">
            &#x2630; {/* HTML entity for the hamburger menu icon */}
          </Button>
        </div>

        {/* Links Container */}
        <div
          className={`lg:flex ${
            isMenuOpen
              ? 'flex flex-col absolute top-16 right-0 w-64 bg-[#0a0a0a] z-50 transition-transform transform translate-x-0'
              : 'hidden'
          }`}
        >
          <Link href="/" passHref>
            <Button className="text-white bg-transparent" onClick={() => setIsMenuOpen(false)}>
              About
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button className="text-white bg-transparent" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="text-white bg-transparent" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Button>
          </Link>
          <Link href="/blog" passHref>
            <Button className="text-white bg-transparent" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
