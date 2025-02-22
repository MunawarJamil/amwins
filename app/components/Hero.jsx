import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden w-full mx-auto mt-5 ">
        <div className="text-center bg-sky-50 w-full lg:w-[55%] lg:pt-16">
          <p className="text-sky-400 pt-16 px-4 text-2xl">
            Read Now: State of the Market 2025 Outlook
          </p>
          <h1 className="text-3xl font-bold leading-relaxed px-4 py-5">
            The Specialty Insurance <br /> Provider that{" "}
            <span className="text-sky-400">
              Keeps You <br /> Ahead of Risks
            </span>
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {/* Stats Grid */}
            <div className="border-l-2 border-gray-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">$39B</p>
              <p>Annual Premium Allocations</p>
            </div>
            <div className="border-l-2 border-gray-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">37,124</p>
              <p>Strategic Underwriter</p>
            </div>
            <div className="border-l-2 border-gray-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">30,341</p>
              <p>Retail Agency Relationships</p>
            </div>
            <div className="border-l-2 border-gray-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">7,325</p>
              <p>Global Workforce Presence</p>
            </div>
            <div className="border-l-2 border-gray-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">1,514</p>
              <p>Employee Stakeholders</p>
            </div>
            <div className="border-l-2 border-gray-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">30,341</p>
              <p>Annual Submission Volume</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div
        className=" hidden lg:block w-full  min-h-[150vh] bg-cover bg-center    "
        style={{
          backgroundImage: "url('/Hero.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-full  max-w-7xl mx-auto  h-screen  flex justify-between  items-center  px-8   ">
          {/* Left Content */}
          <div className="text-white space-y-6 ">
            <p className="text-gray-300 text-xl">
              Read Now: 2025 Market Outlook & Trends
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold  leading-[3.4] ">
              Leading Specialty <br /> Insurer Keeping <br />
              <span className="text-white">You Ahead</span>
            </h1>

            {/* Stats Grid */}
           
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-9">
              {/* Top 3 Stats */}
              <div className="  border-gray-400 pl-0">
                <div className="flex flex-col w-full border-b-2  border-gray-400  pb-2 ">
                  <p className="text-2xl font-bold text-sky-400 mb-2">$39B</p>
                </div>
                <p className="mt-4">Annual Premium  <br /> Allocations</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">37,124</p>
                </div>
                <p className="mt-4">Strategic <br /> Underwriter</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">30,341</p>
                </div>
                <p className="mt-4">Retail Agency <br /> Relationships</p>
              </div>

              {/* Divider Line */}
              <div className="col-span-2 lg:col-span-3">
                <hr className="border-t-2 border-gray-400 my-5" />
              </div>

              {/* Bottom 3 Stats */}
              <div className="  border-gray-400  ">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">7,325</p>
                </div>
                <p className="mt-4">Global Workforce <br />  Presence</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">1,514</p>
                </div>
                <p className="mt-4">Employee <br /> Stakeholders</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">30,341</p>
                </div>
                <p className="mt-4">Annual Submission <br /> Volume</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="relative">
              <img
                src="/Rectangle.png"
                alt="cover"
                className="w-full max-w-[400px] h-auto object-cover rounded-lg"
              />

              {/* Floating Labels */}
              <div className="absolute w-full  top-0 left-16 bg-white px-4 py-2 shadow-lg rounded-sm">
                <p className="text-sm flex gap-2 items-center font-semibold text-gray-700">
                  <img src="/black-stars.png" alt="stars" />
                  <span className="whitespace-nowrap   ">
                    Key Growth Metrics, And Business Expansion Trends
                  </span>
                </p>
              </div>

              <div className="absolute bottom-8 left-[-32] bg-white rounded-lg p-4 shadow-md max-w-xs">
                <p className="text-sm flex gap-3 items-center font-semibold text-gray-700">
                  <span className="text-2xl font-bold">Yearly Growth</span>
                  <span className="bg-black w-7 h-7 rounded-md flex items-center justify-center">
                    <img src="/arrow-up.png" alt="arrow" />
                  </span>
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Continuous innovation and improved service offerings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
