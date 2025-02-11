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

function Navbar() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const onclickMenu = () => {
    setToggleOpen(!toggleOpen);
  };
  return (
    <>
      {/* Navbar for mobile screens */}

      <nav className="flex sticky top-0 z-10 justify-between  mx-auto bg-white p-5 lg:px-0 items-center  md:justify-around  md:mx-auto  ">
        <h1 className="text-2xl font-bold">AMWINS</h1>

        <ul className="hidden lg:flex gap-10 font-semibold  ">
          <li> RESOURCES + INSIGHTS</li>
          <li> WHO WE ARE</li>
          <li> CONTACT US</li>
          <li> QOUTE ONLINE</li>
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
