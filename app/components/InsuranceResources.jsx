"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function InsuranceResources() {
  const resources = [
    {
      date: "FEB 3, 2025",
      title: "For Professional Services Firms, Landmines Lurk in D&O Polices",
      image:
        "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg",
    },
    {
      date: "JAN 21, 2025",
      title: "Semaglutides and GLP-1s: Their Impact on the Insurance Market",
      image:
        "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg",
    },
    {
      date: "JAN 21, 2025",
      title:
        "The Evolution of Excess/Side A DIC Insurance: Why Non-Profit and Private Companies Should Consider This Essential Coverage",
      image:
        "https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg",
    },
    {
      date: "JAN 21, 2025",
      title: "Why Phase I Environmental Site Assessments Aren’t Enough",
      image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg",
    },
  ];
  const [hoveredImage, setHoveredImage] = useState(resources[0]?.image);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  return (
    <>
      <div className="mt-10 lg:mt-20 px-6 w-full max-w-7xl  mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl lg:text-6xl font-semibold   leading-normal text-gray-800 mb-2">
          Discover specialized insurance <br />{" "}
          <p className="pt-3  "> solutions and valuable insights.</p>{" "}
        </h2>
        <div className="md:flex mt-9 py-4 justify-between items-center">
          <p className="text-gray-600 mb-4">
            Discover specialized insurance solutions and valuable insights.
          </p>
          <a href="#" className="text-[#CA93F5] font-semibold">
            <div className="flex gap-4">
              <Image src="/Layer_1.png" alt="icon" width={20} height={10} />
              <p>VIEW ALL RESOURCES</p>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl mx-auto px-7 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Resource List */}
        <div className="flex flex-col justify-center">
          <div className="lg:mt- space-y-8">
            {resources.map((resource, index) => (
              <div key={index} className="border-b border-[#CA93F5] pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
                  <span className="text-[#CA93F5] lg:text-lg pt-2 whitespace-nowrap font-semibold">
                    {resource.date}
                  </span>
                  <h3
                    className="lg:text-lg font-semibold text-[#11071F] mt-1 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(resource.image)}
                  >
                    {resource.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Image Display */}
        <div className="hidden lg:flex items-center">
          <Image
            src={hoveredImage}
            alt="Dynamic display"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
