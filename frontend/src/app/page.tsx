'use client';

import General from '@/components/general';
import { WandSparkles, Camera, Download, Award, Star } from 'lucide-react';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags are handled in layout.js */}


      {/* Main Content with General Component */}
      <section className="">
        <div className="">
          <General />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2A2722]">Why Choose Our Background Remover</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <WandSparkles className="w-12 h-12 text-[#7790ED] mb-4" />
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">AI-Powered Precision</h3>
              <p className="text-gray-600">Our advanced AI detects edges with pixel-perfect accuracy for professional results every time.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Download className="w-12 h-12 text-[#7790ED] mb-4" />
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Instant Downloads</h3>
              <p className="text-gray-600">Get high-resolution transparent PNG images ready to use in seconds.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="w-12 h-12 text-[#7790ED] mb-4" />
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Free & No Login</h3>
              <p className="text-gray-600">Remove backgrounds without creating an account or paying a subscription.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2A2722]">How It Works</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Three simple steps to remove any image background</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#7790ED] text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Upload Your Image</h3>
              <p className="text-gray-600">Drag and drop or browse to select the image you want to edit.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#7790ED] text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Automatic Processing</h3>
              <p className="text-gray-600">Our AI instantly removes the background with high precision.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#7790ED] text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Download Result</h3>
              <p className="text-gray-600">Get your transparent PNG image ready for use in any project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-[#2A2722] text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#363129] rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#7790ED]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-300 mb-4">"This tool saved me hours of editing time. The results are incredible, and I love that it's free to use!"</p>
              <p className="font-medium">— Kalash Jain., Graphic Designer</p>
            </div>
            <div className="p-6 bg-[#363129] rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#7790ED]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />

                </div>
              </div>
              <p className="text-gray-300 mb-4">"Perfect for my e-commerce products. Clean edges and the transparent backgrounds look professional every time."</p>
              <p className="font-medium">— Varun Salecha, Designer</p>
            </div>
            <div className="p-6 bg-[#363129] rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#7790ED]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-300 mb-4">"As a social media manager, I use this daily. It's so easy and the results are always spot on!"</p>
              <p className="font-medium">— Sam, Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2A2722]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Is this tool really free?</h3>
              <p className="text-gray-600">Yes, our basic background removal service is completely free with no hidden costs or limitations. We also offer premium features for professional users.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">What image formats are supported?</h3>
              <p className="text-gray-600">We support all common image formats including JPG, PNG, WEBP, and HEIC. The maximum file size is 10MB.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">How accurate is the AI background removal?</h3>
              <p className="text-gray-600">Our AI provides professional-grade results and works exceptionally well with most images. It's particularly good with portraits, products, and objects with distinct edges.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Can I use the results for commercial purposes?</h3>
              <p className="text-gray-600">Absolutely! Images you process with our tool are yours to use however you like, including for commercial purposes or personal projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-[#7790ED]">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Remove Image Backgrounds?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of users who trust our tool for professional image editing. No signup, no download, just results.</p>
          <a
            href="/backgroundremover"
            className="inline-block px-8 py-3 text-base font-medium rounded-md bg-white text-[#2A2722] hover:bg-gray-100 transition-all"
          >
            Start Removing Backgrounds Now
          </a>
        </div>
      </section>

      
    </div>
  );
}