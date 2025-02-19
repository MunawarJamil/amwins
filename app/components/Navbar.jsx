"use client";
import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const menuItems = [
    {
      title: "Solutions",
      items: ["Construction", "Energy", "Healthcare"],
    },
    { title: "Industries", items: ["Finance", "Technology", "Retail"] },
    { title: "Who We Are", items: ["About Us", "Careers", "Our Values"] },
    { title: "Resources + Insights", items: ["Blog", "Webinars"] },
    { title: "Contact Us", items: ["Support", "Locations"] },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white p-5 flex justify-around items-center">
      <Link href="/">
        <Image
          src="/ISA Logo Refinement SVG-White.png"
          width={70}
          height={50}
          alt="Logo"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 font-semibold text-black">
        {menuItems.map((menu, index) => (
          <li key={index} className="relative group">
            <Link href={`/${menu.title.toLowerCase().replace(/ /g, "-")}`}>
              {menu.title}
            </Link>
            <ul className="hidden group-hover:block absolute bg-white shadow-lg  w-48 border rounded-md">
              {menu.items.map((item, idx) => (
                <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                  <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Search className="text-[#CA93F5]" />
        <span
          className="lg:hidden cursor-pointer"
          onClick={() => setToggleOpen(!toggleOpen)}
        >
          {toggleOpen ? (
            <X className="text-sky-400" />
          ) : (
            <Menu className="text-sky-400" />
          )}
        </span>
      </div>

      {/* Mobile Menu */}
      {toggleOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md p-5">
          {menuItems.map((menu, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold text-lg mb-2">{menu.title}</p>
              <ul>
                {menu.items.map((item, idx) => (
                  <li key={idx} className="py-1">
                    <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
