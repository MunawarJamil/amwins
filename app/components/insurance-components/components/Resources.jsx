"use client";
import React from "react";
import Link from "next/link";

const Resources = () => {
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-32 max-w-[1500px] mx-auto">
      {/* Header */}
      <div className="text-3xl md:text-4xl lg:text-5xl">
        <h1 className="font-bold">Property Resources + Insights</h1>
      </div>

      {/* Subheader */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-6">
        <p className="text-sm md:text-base max-w-md">
          Stay up-to-date on emerging property insurance trends and topics
        </p>
        <Link 
          href="/" 
          className="text-blue-500 underline hover:text-blue-700 mt-4 md:mt-0 pr-3"
        >
          View All Resources
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-8 md:mt-12 ml-24">
        {/* Grid Content */}
        <div className="w-full lg:w-[700px] mt-10 gap-10">
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="border-b border-[#CA93F5] pb-4 py-5">
              <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] gap-4">
                <h2 className="text-sm md:text-base font-bold">Jan 21, 2025</h2>
                <p className="text-sm md:text-base">Why Phase I Environmental Site Assessments Aren't Enough</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="border-b border-[#CA93F5] pb-4 py-5">
              <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] gap-4">
                <h2 className="text-sm md:text-base font-bold">Dec 19, 2024</h2>
                <p className="text-sm md:text-base">
                  State of the Market - 2025 Outlook for Small Business and Personal Lines
                </p>
              </div>
            </div>
      

            {/* Item 3 */}
            <div className="border-b border-[#CA93F5] pb-4 py-5">
              <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] gap-4">
                <h2 className="text-sm md:text-base font-bold">Dec 3, 2024</h2>
                <p className="text-sm md:text-base">State of the Market - 2025 Outlook</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="border-b border-[#CA93F5] pb-4 py-5">
              <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] gap-4">
                <h2 className="text-sm md:text-base font-bold">Nov 26, 2024</h2>
                <p className="text-sm md:text-base">Did Hurricane Season 2024 Live Up to the Hype?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-auto mt-8 lg:mt-0">
          <img 
            className="w-full lg:w-[350px] lg:h-[400px] object-cover mx-auto lg:ml-20 lg:pb-5 absolute" 
            src="/insurance-images/img/zoom.png" 
            alt="Resources illustration" 
          />
        </div>
      </div>
    </div>
    
  );
};

export default Resources;