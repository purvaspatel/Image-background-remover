'use client';
import React from 'react';
import { 
  ImageOff, 
  Layers, 
  Download, 
  Code, 
  ChevronRight, 
  Check, 
  Mail
} from 'lucide-react';
import Link from 'next/link';

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-[#2A2722] text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Powerful Background Removal Features</h1>
          <p className="text-lg md:text-xl max-w-[700px] mx-auto text-gray-200">
            Everything you need to remove backgrounds from images with professional results
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Background Removal Feature */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#7790ED]/10 rounded-lg flex items-center justify-center mb-6">
                <ImageOff className="w-7 h-7 text-[#7790ED]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2A2722]">Background Removal</h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered background removal technology delivers professional-quality results in seconds. Perfect for product photos, portraits, and any image that needs a clean background.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automatic edge detection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Works with complex objects and hair</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Preserves image quality</span>
                </li>
              </ul>
              <Link href="/" className="inline-flex items-center text-[#7790ED] font-medium">
                Try it now <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Bulk Processing Feature */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#7790ED]/10 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-[#7790ED]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2A2722]">Bulk Processing</h2>
              <p className="text-gray-600 mb-6">
                Need to process multiple images at once? Our bulk processing option lets you remove backgrounds from hundreds of images with just a few clicks.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Process up to 100 images at once</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Batch downloading as ZIP</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Consistent quality across all images</span>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7790ED]" />
                <span className="text-gray-700">Contact: <a href="mailto:purvaspatel1241@gmail.com" className="text-[#7790ED]">purvaspatel1241@gmail.com</a></span>
              </div>
            </div>
            
            {/* HD Downloads Feature */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#7790ED]/10 rounded-lg flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-[#7790ED]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2A2722]">HD Downloads</h2>
              <p className="text-gray-600 mb-6">
                Get your processed images in high-definition quality. Our service preserves the original resolution of your images, ensuring professional results every time.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full resolution output</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparent PNG format</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No watermarks</span>
                </li>
              </ul>
              <Link href="/" className="inline-flex items-center text-[#7790ED] font-medium">
                Try it now <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* API Access Feature */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#7790ED]/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-[#7790ED]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2A2722]">API Access</h2>
              <p className="text-gray-600 mb-6">
                Integrate our powerful background removal technology directly into your applications, websites, or workflows with our robust API.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">RESTful API with simple integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">High throughput and low latency</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive documentation</span>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7790ED]" />
                <span className="text-gray-700">Contact: <a href="mailto:purvaspatel1241@gmail.com" className="text-[#7790ED]">purvaspatel1241@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#2A2722]">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A2722] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Free</th>
                  <th className="p-4 text-center">Bulk Processing</th>
                  <th className="p-4 text-center">API Access</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Background Removal</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 font-medium">HD Downloads</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Batch Processing</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 font-medium">Integration Options</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Priority Support</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#7790ED]">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Try our background removal tool for free today and see the quality for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="px-8 py-3 text-base font-medium rounded-md bg-white text-[#2A2722] hover:bg-gray-100 transition-all">
              Remove Background Now
            </Link>
            <Link href="#" className="px-8 py-3 text-base font-medium rounded-md bg-[#2A2722] text-white hover:bg-opacity-90 transition-all">
              Learn More About API
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#2A2722]">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">How does the background removal technology work?</h3>
              <p className="text-gray-600">Our background removal tool uses advanced AI algorithms to detect the subject of your image and separate it from the background. The technology analyzes each pixel of your image to determine what belongs to the foreground and what belongs to the background.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">What image formats are supported?</h3>
              <p className="text-gray-600">We currently support JPG and PNG formats for input images. All processed images are delivered as transparent PNG files.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">How can I access bulk processing features?</h3>
              <p className="text-gray-600">For bulk processing needs, please contact us via email at bulk@example.com. We'll help you set up an account with bulk processing capabilities based on your specific requirements.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-[#2A2722] mb-2">Is there any limit to the free version?</h3>
              <p className="text-gray-600">Our free version allows you to process individual images with no daily limit. However, for batch processing or API access, you'll need to contact us for a custom solution.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;