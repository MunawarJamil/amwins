import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-white">
      <footer className="max-w-[1350px] mx-auto py-10 px-5 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="md:w-1/2 relative">
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-normal">
            Let's talk <br /> about your <br /> project.
          </h2>
          <p className="absolute text-6xl font-semibold text-gray-200 left-5 top-32 hidden md:block">
            Let's talk
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-wrap justify-end gap-10 mt-10 md:mt-0">
          {/* Product Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">PRODUCT</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>About</li>
              <li>Product</li>
              <li>Testimonials</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">MENU</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>About</li>
              <li>Product</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Location Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">LOCATION</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>Indonesia</li>
              <li>USA</li>
              <li>French</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="max-w-[1200px] mx-auto px-5 pb-20">
        <div className="flex justify-between items-center gap-2 border-b border-black py-4">
          <input
            type="email"
            placeholder="eg. johnsmith@email.com"
            className="bg-transparent border-b py-3 outline-none text-gray-600 text-sm"
          />
          <div className="flex gap-5 mt-0 justify-end">
            <Facebook className="text-gray-600" size={20} />
            <Instagram className="text-gray-600" size={20} />
            <Twitter className="text-gray-600" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;