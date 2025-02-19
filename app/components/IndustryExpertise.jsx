"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function InsuranceResources() {
  // const resources = [
  //   { title: "Construction", icon: "/Layer_1.png", image: "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" },

  //   { title: "Energy", icon: "/Layer_1.png", image: "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg" },

  //   { title: "Environmental", icon: "/Layer_1.png", image: "https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg" },

  //   { title: "Healthcare", icon: "/Layer_1.png", image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },



  //   { title: "Hospitality + Entertainment", icon: "/Layer_1.png", image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },



  //   { title: "Life Sciences", icon: "/Layer_1.png", image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" }
  // ];

  const industries = [
    { name: "Construction Insurance", img: "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" },

    { name: "Energy Insurance", img: "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg" },


    { name: "Environmental Insurance", img: "https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg" },




    { name: "Healthcare Insurance", img: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },
    { name: "Hospitality + Entertainment", img: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },


    { name: "Life Sciences Insurance", img: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },


    { name: "Manufacturing + Distribution", img: "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg" },

    { name: "Public Entity", img: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg" },


    { name: "Real Estate", img: "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg" },
  ];

 
    return (<>
      <section className="py-12 bg-gray-50 px-7 md:text-center">
        <div className="lg:max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Industry Expertise
          </h2>
          <p className="mt-2 text-gray-600">
            Our specialty practices consist of teams dedicated to specific
            industries and the unique risks they face.
          </p>
        </div>
  
        {/* Industry Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 
        lg:max-w-[1200px]    mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  p-5 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-40">
                <Image
                  src={industry.img}
                  alt={industry.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry.name}
                </h3>
                <a
                  href="#"
                  className="text-blue-600 mt-2 inline-block hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>





   </> );
  }

 
