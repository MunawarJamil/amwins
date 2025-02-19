import React from 'react';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <div className=" mt-20 mx-auto px-6 bg-slate-100 shadow-xl py-12 ">
      <div className="grid grid-cols-1 lg:w-[1200px] mx-auto lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            Let's talk<br />
            about your<br />
            project.
          </h1>
          
          {/* Background Text */}
          <div className=" mt-[50] relative">
            <span className="absolute -z-10 text-8xl font-bold text-gray-100 opacity-70 -left-4 -top-20 mt-8">
              Let's talk
            </span>
          </div>

          {/* Email Input with Send Icon */}
          <div className="relative mt-28">
            <div className="flex items-center gap-2">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="eg. johnsmith@email.com"
                  className="w-full max-w-md py-3 border-b-2 border-gray-300 focus:border-gray-800 outline-none text-gray-600"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Send className="w-5 h-5 text-gray-500 hover:text-gray-800 transition-colors rotate-45 mr-32" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-3 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">PRODUCT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Product</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
            </ul>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">MENU</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Product</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
            </ul>
          </div>

          {/* Location Column */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">LOCATION</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Indonesia</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">USA</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">French</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Moved to bottom right */}
      <div className="flex justify-end mt-8 space-x-4">
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-800 transition-colors">
          <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </a>
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-800 transition-colors">
          <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </a>
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-800 transition-colors">
          <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </a>
      </div>
    </div>
  );
};

export default Footer;