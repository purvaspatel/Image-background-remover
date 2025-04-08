// app/not-found.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-4">
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
        <Image
          src="/assets/404-fox.jpg" // Replace this with your image path
          alt="Lost in space"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! This page is lost in space 🚀</h1>
      <p className="text-gray-600 mb-6">Looks like the page you're looking for vanished into a black hole.</p>
      <Link href="/">
        <span className="bg-[#7790ED] text-white px-6 py-2 rounded-md font-medium hover:bg-[#5e78d0] transition-colors">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}
