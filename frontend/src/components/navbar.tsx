'use client';

import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition">
          <Sparkles className="h-6 w-6" />
          <span>BG Remover</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition">How It Works</Link>
          <Link href="/api" className="text-gray-700 hover:text-blue-600 font-medium transition">API</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-blue-600 transition">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col gap-4 px-4 py-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition">How It Works</Link>
            <Link href="/api" className="text-gray-700 hover:text-blue-600 font-medium transition">API</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
