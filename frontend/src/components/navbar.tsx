'use client';

import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#2A2722] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#FFF]">
          <Image
            src="/assets/logo.png"
            alt="BG Remover Logo"
            width={36}
            height={36}
            
          />
          <span>BG // Remover</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-[#FFF]">Home</Link>
          <Link href="/backgroundremover" className="text-[#FFF] font-medium ">Remove Background</Link>
          <Link href="/contact" className="text-[#FFF] font-medium ">Contact</Link>
          <Link href="/about-us" className="text-[#FFF] font-medium ">About Us</Link>

        </nav>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-[#FFF] hover:text-[#7790ED] transition">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col gap-4 px-4 py-4">
            <Link href="/" className="text-[#2A2722]">Home</Link>
            <Link href="/backgroundremover" className="text-[#2A2722] font-medium ">Remove Background</Link>
            <Link href="/contact" className="text-[#2A2722] font-medium ">Contact</Link>
            <Link href="/about-us" className="text-[#2A2722] font-medium ">About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
