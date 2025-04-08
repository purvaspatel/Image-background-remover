import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const prompt = Prompt({
  subsets: ['latin'],
  variable: '--font-prompt',
  weight: ['100', '400', '500', '600', '700'],
});

// Enhanced metadata configuration for better SEO
export const metadata: Metadata = {
  title:"BG Remover | AI Background Removal Tool",
  description: "Remove image backgrounds instantly with our AI-powered tool. Fast, accurate, and easy to use for professionals and beginners.",
  keywords: ["background remover", "image editing", "AI background removal", "photo editing", "transparent background"],
  authors: [{ name: "BG Remover Team" }],
  creator: "BG Remover",
  publisher: "BG Remover",
  applicationName: "BG Remover",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://www.bgremover.com',
  },
  openGraph: {
    title: "BG Remover | AI Background Removal Tool",
    description: "Remove image backgrounds instantly with our AI-powered tool. Fast, accurate, and easy to use.",
    url: 'https://www.bgremover.com',
    siteName: 'BG Remover',
    images: [
      {
        url: '/assets/logo.png', // Make sure to create this image
        width: 1200,
        height: 630,
        alt: 'BG Remover - AI Background Removal Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BG Remover | AI Background Removal Tool',
    description: 'Remove image backgrounds instantly with our AI-powered tool.',
    images: ['/assets/logo.png'], // Make sure to create this image
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#2A2722' },
  ],
  verification: {
    google: 'your-google-site-verification-code', // Add your Google verification code here
  },
  category: 'technology',
  manifest: '/manifest.json', // Create a web manifest file
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to your domain to improve performance */}
        <link rel="preconnect" href="https://www.bgremover.com" />
        
        {/* Favicon configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical link to prevent duplicate content issues */}
        <link rel="canonical" href="https://www.bgremover.com" />
      </head>
      <body className={`${prompt.variable}`}>
        {/* Structured data for rich results */}
        <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BG Remover",
            "url": "https://www.bgremover.com",
            "description": "Remove image backgrounds instantly with our AI-powered tool.",
            "applicationCategory": "ImageProcessingApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "BG Remover",
              "url": "https://www.bgremover.com"
            }
          })
        }} />

        <Navbar />

        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-8 bg-[#2A2722] text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image
                  src="/assets/logo.png"
                  alt="BG Remover Logo"
                  width={36}
                  height={36}
                  priority
                />

                <h3 className="text-lg font-medium mb-4 mt-4">BG // Remover</h3>

                <p className="text-gray-300">The fastest way to remove backgrounds from images online with AI precision.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Features</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/features/background-removal" className="hover:text-[#7790ED]">Background Removal</Link></li>
                  <li><Link href="/features/bulk-processing" className="hover:text-[#7790ED]">Bulk Processing</Link></li>
                  <li><Link href="/features/hd-downloads" className="hover:text-[#7790ED]">HD Downloads</Link></li>
                  <li><Link href="/features/api-access" className="hover:text-[#7790ED]">API Access</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/about-us" className="hover:text-[#7790ED]">About Us</Link></li>
                  <li><Link href="/terms" className="hover:text-[#7790ED]">Terms of Service</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#7790ED]">Privacy Policy</Link></li>
                  <li><Link href="/contact" className="hover:text-[#7790ED]">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/blog" className="hover:text-[#7790ED]">Blog</Link></li>
                  <li><Link href="/tutorials" className="hover:text-[#7790ED]">Tutorials</Link></li>
                  <li><Link href="/faq" className="hover:text-[#7790ED]">FAQ</Link></li>
                  <li><Link href="/help" className="hover:text-[#7790ED]">Help Center</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>© {new Date().getFullYear()} BG Remover. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}