import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden justify-evenly lg:w-[77%] mx-auto mt-5">
        <div className="text-center bg-sky-50 md:container lg:w-[55%] lg:pt-16">
          <p className="text-sky-400 pt-10 px-10 text-2xl">
            Read Now: State of the Market 2025 Outlook
          </p>
          <h1 className="text-3xl font-bold leading-relaxed px-10 py-5">
            The Specialty Insurance <br /> Provider that{" "}
            <span className="text-sky-400">
              Keeps You <br /> Ahead of Risks
            </span>
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-1 p-5">
            {/* Existing grid items remain the same */}
            {/* Stats Grid */}
            <div className="border-l-2 border-sky-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">$39B</p>
              <p>Annual Premium Allocations</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">37,124</p>
              <p>Strategic Underwriter</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">30,341</p>
              <p>Retail Agency Relationships</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">7,325</p>
              <p>Global Workforce Presence</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">1,514</p>
              <p>Employee Stakeholders</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-2">
              <p className="text-2xl font-bold text-sky-400">30,341</p>
              <p>Annual Submission Volume</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative header hidden lg:flex justify-center ">
        <Image
          src="/Hero.png"
          className=""
          width={1210}
          height={1200}
          alt="image is missing"
        />

        <div className="absolute flex top-1/3 pt-10 w-[70%] mx-auto gap-10 left-[50%] justify-evenly mt-14 text-white transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <p className="text-gray-300 text-xl">
              Read Now: 2025 Market Outlook & Trends
            </p>
            <h1 className="text-5xl mt-10 font-bold leading-tight">
              Leading Specialty <br /> Insurer Keeping <br />{" "}
              <span className="text-white">You Ahead</span>
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 w-[55%] mt-10 gap-y-16 gap-x-1 p-5">
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="text-3xl font-bold text-white">$39B</p>
                <p className="text-sm text-gray-300">
                  Annual Premium Allocations
                </p>
              </div>
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="text-3xl font-bold text-white">37,124</p>
                <p className="text-sm text-gray-300">Strategic Underwriter</p>
              </div>
              <div className="border-l-2 border-gray-500 ml-7 pl-4">
                <p className="text-3xl font-bold text-white">30,341</p>
                <p className="text-sm text-gray-300">
                  Retail Agency Relationships
                </p>
              </div>
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="text-3xl font-bold text-white">7,325</p>
                <p className="text-sm text-gray-300">
                  Global Workforce Presence
                </p>
              </div>
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="text-3xl font-bold text-white">1,514</p>
                <p className="text-sm text-gray-300">Employee Stakeholders</p>
              </div>
              <div className="border-l-2 border-gray-500 pl-4">
                <p className="text-3xl font-bold text-white">30,341</p>
                <p className="text-sm text-gray-300">
                  Annual Submission Volume
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-auto">
            <img
              src="/Rectangle.png"
              alt="cover"
              className="w-[443px] h-[550px] object-cover rounded-lg"
            />
            {/* Overlay Cards */}
            <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <p className="text-sm font-semibold text-gray-800">
                Key Growth Metrics, And Business Expansion Trends
              </p>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <p className="font-bold text-black text-xl mb-1">Yearly Growth</p>
              <p className="text-sm text-gray-600">
                Continuous innovation and improved service offerings
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
