"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function InsuranceResources({ title, subtitle, resources }) {
  const [hoveredImage, setHoveredImage] = useState(resources[0]?.image);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  return (
    <>
      <div className="mt-10 lg:mt-20  px-7  md:w-[82%] mx-auto   ">
        <h2 className=" text-3xl lg:text-4xl md:w-[70%] font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <div className="md:flex py-4 justify-between items-center">
          <p className="text-gray-600 mb-4">{subtitle}</p>
          <a href="#" className="text-[#CA93F5] font-semibold">
            <div className="flex gap-4">
              <Image src="/Layer_1.png" alt="icon" width={20} height={10} />
              <p>VIEW ALL RESOURCES</p>
            </div>
          </a>
        </div>
      </div>
      <div className="md:w-[79%] lg:border mb-10 lg:mb-20  mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center">
          <div className="lg:mt-6 space-y-4">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="border rounded-none border-gray-200 hover:shadow-lg transition-shadow"
                onMouseEnter={() => handleMouseEnter(resource.image)}
              >
                <CardContent className="flex flex-col lg:flex-row lg:items-center lg:gap-6 ">
                  <span className="text-[#CA93F5] lg:text-lg pt-2 whitespace-nowrap font-semibold">
                    {resource.date}
                  </span>
                  <h3 className="lg:text-LG font-semibold text-[#11071F] mt-1   cursor-pointer">
                    {resource.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <Image
            src={hoveredImage}
            alt="Dynamic display"
            className=" shadow-md object-cover w-full h-full"
            width={1000}
            height={800}
          />
        </div>
      </div>
    </>
  );
}
