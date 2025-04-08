import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-6">
          Last Updated: April 8, 2025
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
        <p className="mb-6">
          Welcome to our Background Removal Tool. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Data We Collect</h2>
        <p className="mb-3">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Usage Data:</strong> Information about how you use our website and services.</li>
          <li className="mb-2"><strong>Image Data:</strong> Images that you upload to our service for processing.</li>
          <li className="mb-2"><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Your Data</h2>
        <p className="mb-3">We use your data for the following purposes:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">To provide and maintain our service, including processing your uploaded images.</li>
          <li className="mb-2">To monitor the usage of our service for technical administration.</li>
          <li className="mb-2">To improve our website and services.</li>
          <li className="mb-2">To detect, prevent and address technical issues.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Image Data Privacy</h2>
        <p className="mb-6">
          Images that you upload to our service are processed on our servers and are used solely for the purpose of providing the background removal service. We do not store your images permanently unless explicitly stated otherwise. Images are typically deleted from our servers within 24 hours of processing.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Cookies</h2>
        <p className="mb-6">
          We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Data Security</h2>
        <p className="mb-6">
          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us via email at privacy@example.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;