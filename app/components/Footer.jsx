import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00334d] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
            Subscribe to ASI Brokerage News
          </h2>
          <a href="#" className="text-sm text-[#CA93F5] font-medium hover:underline">
            GET STARTED
          </a>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Column */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <p className="font-semibold">Get appointed today</p>
            <a href="#" className="text-sm text-[#CA93F5] hover:underline">
              LEARN MORE
            </a>
            <a href="#" className="text-lg text-white hover:underline">
              ASI Brokerage
            </a>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 text-center md:text-left">
            <a href="#" className="font-semibold hover:underline">Solutions</a>
            <a href="#" className="font-semibold hover:underline">Industries</a>
            <a href="#" className="font-semibold hover:underline">Who We Are</a>
            <a href="#" className="font-semibold hover:underline">Locations</a>
            <a href="#" className="font-semibold hover:underline">Resources + Insights</a>
            <a href="#" className="font-semibold hover:underline">Bondholder Relations</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
          © 2025 ASI Brokerage. All rights reserved. /
          <a href="#" className="mx-2 hover:underline">Terms & Conditions</a> /
          <a href="#" className="mx-2 hover:underline">Privacy</a> /
          <a href="#" className="mx-2 hover:underline">California Notice at Collection</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
