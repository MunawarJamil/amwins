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
      <div className="relative w-full max-container mx-auto hidden lg:flex    ">
        <div className="relative w-full h-[150vh]">
          <Image
            src="/Hero.png"
            alt="image is missing"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute flex top-1/3 pt-10 w-full max-w-7xl px-24 mx-auto gap-10 left-[50%] justify-around mt-14 text-white transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[30%]">
            <p className="text-gray-300 text-xl">
              Read Now: 2025 Market Outlook & Trends
            </p>
            <h1 className="text-5xl mt-10 font-bold leading-tight">
              Leading Specialty <br /> Insurer Keeping <br />{" "}
              <span className="text-white">You Ahead</span>
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {/* Top 3 Stats */}
              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">$39B</p>
                </div>
                <p className="mt-4">Annual Premium Allocations</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">37,124</p>
                </div>
                <p className="mt-4">Strategic Underwriter</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">30,341</p>
                </div>
                <p className="mt-4">Retail Agency Relationships</p>
              </div>

              {/* Divider Line */}
              <div className="col-span-2 lg:col-span-3">
                <hr className="border-t-2 border-gray-400 my-5" />
              </div>

              {/* Bottom 3 Stats */}
              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">7,325</p>
                </div>
                <p className="mt-4">Global Workforce Presence</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">1,514</p>
                </div>
                <p className="mt-4">Employee Stakeholders</p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <div className="flex flex-col w-full border-b-2 border-gray-400 pb-2">
                  <p className="text-2xl font-bold text-sky-400 mb-2">30,341</p>
                </div>
                <p className="mt-4">Annual Submission Volume</p>
              </div>
            </div>
          </div>

          <div className="relative h-auto">
            <img
              src="/Rectangle.png"
              alt="cover"
              className="w-full max-w-[463px] h-auto object-cover rounded-lg"
            />
            {/* Overlay Cards */}
            <div className="absolute top-0 translate-x-[50px] bg-white px-4 py-2 shadow-lg max-w-auto">
              <p className="relative text-sm flex gap-2 items-center font-semibold text-gray-700">
                <img src="/black-stars.png" alt="" />
                <span className="lg:whitespace-nowrap">
                  Key Growth Metrics, And Business Expansion Trends
                </span>
              </p>
            </div>

            <div className="absolute bottom-20 left-[-40] font-[Onest] bg-white rounded-lg p-4 shadow-lg max-w-xs">
              <p className="relative text-sm flex gap-3 items-center font-semibold text-gray-700">
                <span className="lg:whitespace-nowrap text-2xl font-bold">
                  Yearly Growth
                </span>
                <div className="bg-black w-7 h-7 rounded-md flex items-center justify-center">
                  <img src="/arrow-up.png" alt="arrow" />
                </div>
              </p>
              <p className="text-sm text-gray-600 mt-3">
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
