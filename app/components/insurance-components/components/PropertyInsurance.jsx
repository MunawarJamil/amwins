"use client";
import React from "react";
import Link from "next/link";
import { FaBuilding } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoChatboxEllipses } from "react-icons/io5";
import { Star, User } from "lucide-react";

const PropertyInsurance = () => {
  return (
    <>
      <div className="flex w-full h-[900px] mx-auto text-white bg-[url('/insurance-images/img/bg.jpg')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Left Section (Text and Button) */}
          <div className="w-[500px] mb-40 ml-[105px] p-6">
            <h1 className="text-6xl">Property Insurance</h1>
            <p className="mt-12 w-[600px]">
              Brokerage property specialists collaborate to assess risks and
              leverage our global network, ensuring clients receive
              comprehensive, tailored insurance solutions. With deep market
              expertise and strategic partnerships, we provide innovative
              coverage that meets diverse property needs.
            </p>
            <button className="mt-28 bg-[#CA93F5] text-black py-3 px-6 rounded-xl ml-1">
              Get Started
            </button>
          </div>

          {/* Right Section (Image and Dotted Image) */}
          <div className="relative w-full h-full mr-20 mb-96">
            <img
              className="absolute bottom-0 right-0 w-[440px] h-[600px] object-cover" // Moved to right side, full width
              src="/insurance-images/img/placeholder.png"
              alt="Property Insurance"
            />
            <img
              className="absolute bottom-4 right-4 w-48 h-32" // Moved to bottom right of placeholder image
              src="/insurance-images/img/doted.png"
              alt="Dotted decoration"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex justify-center mt-12 mx-auto font-black text-4xl">
        <h1>Why Choose Us?</h1>
      </div>

      <div className="flex justify-between space-x-10 w-[900px] text-black text-center mx-auto mt-20">
        {/* Box 1 */}
        <div className="relative bg-white p-6 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-[#CA93F5] rounded-full mx-auto mb-4">
            <FaBuilding className="text-black w-8 h-8" />
          </div>
          <h1 className="font-black">Market Reach</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            ipsa? Nostrum nam iste sit sapiente doloremque animi libero sequi
            dolorem.
          </p>
          <Link href="/" className="underline font-black hover:text-blue-800">
            Learn more
          </Link>
        </div>

        {/* Box 2 */}
        <div className="relative bg-white p-6 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-[#CA93F5] rounded-full mx-auto mb-4">
            <RiTeamFill className="text-balck w-8 h-8" />
          </div>
          <h1 className="font-black">Expert Team</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            ipsa? Nostrum nam iste sit sapiente doloremque animi libero sequi
            dolorem.
          </p>
          <Link href="/" className=" underline font-black hover:text-blue-800">
            Learn more
          </Link>
        </div>

        {/* Box 3 */}
        <div className="relative bg-white p-6 rounded-lg  hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-[#CA93F5] rounded-full mx-auto mb-4">
            <IoChatboxEllipses className="text-black w-8 h-8" />
          </div>
          <h1 className="font-black">Industry Partnership</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            ipsa? Nostrum nam iste sit sapiente doloremque animi libero sequi
            dolorem.
          </p>
          <Link href="/" className="underline font-black hover:text-blue-800">
            Learn more
          </Link>
        </div>
      </div>

      {/* property insurance section */}

      <section className="w-[1230px] mx-auto">
        <div className="flex flex-col md:flex-row lg:justify-between   mt-12">
          {/* Left content section */}

          <div className="flex-1 ">
            <h1 className="text-6xl font-bold mb-4">
              Property Insurance That Delivers A Distinct Advantage
            </h1>

            <p className="text-black mb-8">
              Our brokerage delivers tailored solutions for complex risks,
              leveraging market expertise and strong industry relationships.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-gray-100">
                  <svg
                    className="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline
                      points="20 6 9 17 4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-black">
                  Custom Risk Solutions – Specialized coverage for diverse
                  property needs
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-gray-100">
                  <svg
                    className="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline
                      points="20 6 9 17 4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-black">
                  Expert Collaboration – Industry professionals navigating
                  market challenges
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-gray-100">
                  <svg
                    className="w-5 h-5 text-black "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline
                      points="20 6 9 17 4 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-black">
                  Exclusive Access – Strong partnerships providing unique
                  coverage options
                </p>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="max-w-full ">
            <div className="relative h-[300px] w-[350px] mr-18">
              {/* image */}
              <img
                className="w-[600px] h-[400px] mt-3"
                src="/insurance-images/img/21.png"
                alt=""
              />

              {/* Floating info cards */}
              <div className="absolute bottom-0 left-0 bg-white p-3 rounded-lg flex items-center gap-3 ml-48 w-[250px] h-16 shadow-md">
                <div className="p-2 bg-gray-100 rounded">
                  <Star className="w-5 h-5 text-black" />
                </div>
                <p className="text-sm w-56">
                  We bring extensive experience and expertise to the industry
                </p>
              </div>

              <div className="absolute -bottom-20 left-28 bg-white p-3 rounded-lg shadow-md flex items-center gap-3 ml-8">
                <div className="p-2 bg-gray-100 rounded">
                  <User className="w-5 h-5 text-black" />
                </div>
                <p className="text-sm w-40">
                  We use experienced and professional personnels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyInsurance;
