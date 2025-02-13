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
    <div className="md:w-[80%] my-10 md:my-20 mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{subtitle}</p>
        <a href="#" className="text-blue-500 font-semibold">
          VIEW ALL RESOURCES
        </a>

        <div className="mt-6 space-y-4">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
              onMouseEnter={() => handleMouseEnter(resource.image)}
            >
              <CardContent className="flex flex-col">
                <span className="text-blue-500 text-sm pt-2 font-semibold">
                  {resource.date}
                </span>
                <h3 className="text-md font-semibold text-gray-800 mt-1 hover:text-blue-500 cursor-pointer">
                  {resource.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src={hoveredImage}
          alt="Dynamic display"
          className="rounded-lg shadow-md object-cover w-full h-full"
          width={1000}
          height={800}
        />
      </div>
    </div>
  );
}
