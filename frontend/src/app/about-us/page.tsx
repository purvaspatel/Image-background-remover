import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-6">
          Welcome to our Background Removal tool. We're dedicated to providing simple, powerful image editing tools that help you create professional-looking images in seconds.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to democratize image editing by making advanced tools accessible to everyone. We believe that professional-quality image editing shouldn't require expensive software or technical expertise.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Technology</h2>
        <p className="mb-6">
          We use state-of-the-art AI algorithms to power our background removal tool. Our technology can accurately detect and remove backgrounds from various types of images, including portraits, product photos, and complex scenes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
        <p className="mb-6">
          We're a team of passionate developers, designers, and AI specialists who are committed to creating tools that make image editing simpler and more accessible. With backgrounds in computer vision, web development, and user experience design, we bring diverse expertise to solve complex image processing challenges.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Fast processing with advanced AI technology</li>
          <li className="mb-2">Simple, intuitive user interface</li>
          <li className="mb-2">High-quality results with clean edges</li>
          <li className="mb-2">Privacy-focused approach to handling your images</li>
          <li className="mb-2">Continuous improvements based on user feedback</li>
        </ul>
        
        <p className="mt-10 text-gray-600 italic">
          Thank you for choosing our service. We're constantly working to improve our tools and would love to hear your feedback!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;