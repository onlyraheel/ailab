import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 z-50 bg-lynx-gray
                 w-full transform transition-transform duration-300 ease-in-out
                 translate-y-[calc(100%-3rem)] hover:translate-y-0 cursor-pointer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* This is the content that is initially hidden */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-lynx-light-gray">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">360<span className="text-lynx-blue">LYNX</span> AiLab</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in digital marketing and AI solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Email: support@360lynx.com</li>
              <li>Phone: +971-566-521342</li>
            </ul>
          </div>
        </div>
        {/* This is the always-visible part (the "handle") */}
        <div className="h-12 flex items-center justify-center text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 360LYNX AiLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
