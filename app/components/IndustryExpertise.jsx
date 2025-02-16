"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function InsuranceResources() {
  const resources = [
    { title: "Construction", icon: "/Layer_1.png", image: "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" },
    { title: "Energy", icon: "/Layer_1.png", image: "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg" },
    { title: "Environmental", icon: "/Layer_1.png", image: "https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg" },
    { title: "Healthcare", icon: "/Layer_1.png", image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },
    { title: "Hospitality + Entertainment", icon: "/Layer_1.png", image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },
    { title: "Life Sciences", icon: "/Layer_1.png", image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" }
  ];

  const [hoveredImage, setHoveredImage] = useState(resources[0]?.image);

  const handleMouseEnter = (image) => setHoveredImage(image);

  return (<><div className="lg:w-[77%] px-6 lg:px-0 mx-auto mt-10 lg:mt-20">
  <h1 className=" text-3xl font-bold  " >In-depth industry expertise</h1>
  <p>Our specialty practices are comprised of teams focused on specific industries, and the risks that accompany them.</p>
  </div>
    <div className="md:w-[77%] mt-10   mx-auto p-6 lg:mt-20 lg:border grid grid-cols-1 lg:grid-cols-[2fr_2fr]  gap-6">
      <div className="flex flex-col justify-center space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:shadow-lg hover:px-5 hover:border-l-4 hover:border-l-blue-600 border-b py-4 cursor-pointer hover:bg-gray-100 transition-colors"
            onMouseEnter={() => handleMouseEnter(resource.image)}
          >
            <span className=" text-xl lg:text-2xl font-bold text-[#003366]">{resource.title}</span>
            <span className=" "> <Image src={resource.icon} width={20} height={20} /></span>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex items-center">
        <Image
          src={hoveredImage}
          alt="Industry Image"
          className="object-cover w-full h-full shadow-lg"
          width={600}
          height={800}
        />
      </div>
    </div>
    </> );
}
