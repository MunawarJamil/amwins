'use client';
import React from 'react';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <section className="mt-8 overflow-hidden"> {/* Prevents horizontal overflow */}
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column */}
        <div>
          <h1 className="text-4xl font-[Asap] md:text-5xl font-bold lg:mb-8 text-gray-800">
            Let's talk<br />
            about your<br />
            project.
          </h1>
  
          {/* Background Text */}
          <div className="mt-12 hidden lg:block relative">
            <span className="absolute -z-10 text-7xl lg:text-8xl font-bold text-gray-100 opacity-60 left-0 -top-16">
              Let's talk
            </span>
          </div>
  
          {/* Email Input with Send Icon */}
          <div className="relative mt-6 lg:mt-28">
            <div className="flex items-center gap-2">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="eg. johnsmith@email.com"
                  className="w-full max-w-full py-3 border-b-2 border-gray-300 focus:border-gray-800 outline-none text-gray-600 bg-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Send className="w-5 h-5 text-gray-500 hover:text-gray-800 transition-colors rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Column */}
        <div className="grid  grid-cols-3 gap-8 font-[Plus Jakarta Sans]">
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
  
      {/* Social Media Icons */}
      <div className=" hidden lg:flex justify-end mt-1 space-x-4">
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
  </section>
  );
};

export default Footer;