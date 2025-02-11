import React from "react"; 

const Footer = () => {
  return (
    <footer className="bg-[#00334d] text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-evenly items-center border-b border-gray-600 pb-6 mb-6">
          <h2 className="text-2xl font-bold">Subscribe to Amwins News</h2>
          <a href="#" className="text-sm text-[#00a9e0] font-medium">
            GET STARTED
          </a>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-around">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            {/* <div className="flex space-x-4">
              <a href="#" className="text-xl"><FaLinkedinIn /></a>
              <a href="#" className="text-xl"><FaFacebookF /></a>
              <a href="#" className="text-xl"><FaInstagram /></a>
            </div> */}
            <p className="font-semibold">Get appointed today</p>
            <a href="#" className="text-sm text-[#00a9e0]">
              LEARN MORE
            </a>
            {/* <img
              src="/amwins-logo.png"
              alt="Amwins Logo"
              className="w-24 mt-4"
            />
            <img
              src="/ambest-logo.png"
              alt="AM Best PA-1 Logo"
              className="w-32 mt-4"
            /> */}

<a href="#" className="text-lg text-whote">
             AMWINS
            </a>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 space-y-2   mt-8 md:mt-0">
            <a href="#" className="font-semibold">
              Solutions
            </a>
            <a href="#" className="font-semibold">
              Industries
            </a>
            <a href="#" className="font-semibold">
              Who We Are
            </a>
            <a href="#" className="font-semibold">
              Locations
            </a>
            <a href="#" className="font-semibold">
              Resources + Insights
            </a>
            <a href="#" className="font-semibold">
              Bondholder Relations
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
          © 2025 Amwins. All rights reserved. /
          <a href="#" className="mx-2">
            Terms & Conditions
          </a>{" "}
          /
          <a href="#" className="mx-2">
            Privacy
          </a>{" "}
          /
          <a href="#" className="mx-2">
            California Notice at Collection
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
