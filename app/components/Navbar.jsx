"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

 
function Navbar() { const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "Solutions",
      items: ["Construction", "Energy", "Environmental", "Healthcare", "Hospitality + Entertainment", "Life Sciences", "Manufacturing + Distribution", "Public Entity", "Real Estate", "Transportation"],
    },
    {
      title: "Industries",
      items: ["Finance", "Technology", "Retail", "Healthcare", "Education", "Energy", "Government"],
    },
    {
      title: "Who We Are",
      items: ["About Us", "Leadership", "Careers", "News & Events", "Our Values"],
    },
    {
      title: "Resources + Insights",
      items: ["Blog", "Case Studies", "Webinars", "White Papers"],
    },
    {
      title: "Contact Us",
      items: ["Support", "Locations", "Partnerships"],
    },
  ];


  const [toggleOpen, setToggleOpen] = useState(false);
  const onclickMenu = () => {
    setToggleOpen(!toggleOpen);
  };
  return (
    <>
      {/* Navbar for mobile screens */}

      <nav className="flex sticky top-0 z-10 justify-between  mx-auto bg-white p-5 lg:px-0 items-center  md:justify-evenly lg:pt-7  md:mx-auto  ">
        <h1 className="text-3xl tracking-wider font-semibold">AMWINS</h1>

        <ul className="hidden lg:flex gap-10 font-semibold text-black">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            className="relative text-lg font-semibold"
            onMouseEnter={() => setOpenDropdown(menu.title)}
             onMouseLeave={() => setOpenDropdown(null)

            }
          >
            <span className="cursor-pointer">{menu.title}</span>

            {/* Dropdown Content */}
            {openDropdown === menu.title && (
              <ul className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md border border-gray-200 text-black">
                {menu.items.map((item, idx) => (
                  <li key={idx} className="px-4 py-2 mt-0 hover:bg-gray-100 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

        <div className="flex gap-3 items-center">
          <span className="text-sky-400">
            <Search />
          </span>
          <span className="lg:hidden">
            {toggleOpen ? (
              <span className="text-sky-400 ">
                <X onClick={onclickMenu} />{" "}
              </span>
            ) : (
              <span className="text-sky-400">
                <Menu onClick={onclickMenu} />{" "}
              </span>
            )}
          </span>
        </div>
      </nav>
      {toggleOpen && (
        <menu className="px-5   w-4/5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg">
                RESOURCES + INSIGHTS
              </AccordionTrigger>
              <AccordionContent className="font-semibold">
                Markete Insights
              </AccordionContent>
              <AccordionContent className="font-semibold">
                Amwins DNA
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg">
                WHO WE ARE
              </AccordionTrigger>
              <AccordionContent className="font-semibold">
                Markete Insights
              </AccordionContent>
              <AccordionContent className="font-semibold">
                Amwins DNA
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg">
                CONTACT US
              </AccordionTrigger>
              <AccordionContent className="font-semibold">
                Markete Insights
              </AccordionContent>
              <AccordionContent className="font-semibold">
                Amwins DNA
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg text-sky-400">
                QOUTE ONLINE
              </AccordionTrigger>
              <AccordionContent className="font-semibold">
                Markete Insights
              </AccordionContent>
              <AccordionContent className="font-semibold">
                Amwins DNA
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </menu>
      )}
    </>
  );
}

export default Navbar;
