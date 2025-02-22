"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full  sticky top-0 z-10 bg-white">
        <nav className="w-full max-w-7xl justify-between   lg-px-8 mx-auto sticky top-0 lg:mb-2 px-5   lg:py-6 py-4  z-10 bg-white flex items-center  ">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/isalogo.png" alt="Logo" width={60} height={30} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-gray-700 font-semibold text-lg  ">
            <Link href="#" className="hover:text-gray-500">
              Solutions
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Industries
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Who We Are
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Resources + Insights
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Contact Us
            </Link>
            <span className="border-l h-5"></span>
            <Link href="#" className="text-[#3E0392] hover:text-blue-800">
              Quote Online
            </Link>
            <div className="w-8 h-8 mx-auto flex items-center justify-center rounded-full text-xl bg-[#CA93F55E]">
              <Search className="w-5 h-5 text-black" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden flex flex-col space-y-4 p-6 text-gray-800 text-sm font-medium">
              <Link href="#" className="hover:text-gray-500">
                Solutions
              </Link>
              <Link href="#" className="hover:text-gray-500">
                Industries
              </Link>
              <Link href="#" className="hover:text-gray-500">
                Who We Are
              </Link>
              <Link href="#" className="hover:text-gray-500">
                Resources + Insights
              </Link>
              <Link href="#" className="hover:text-gray-500">
                Contact Us
              </Link>
              <span className="border-t my-2"></span>
              <Link href="#" className="text-[#3E0392] hover:text-blue-800">
                Quote Online
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
