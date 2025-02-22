"use client";
import React from "react";
import Image from "next/image";
import { Repeat } from "lucide-react";

export default function PeopleProfileCard() {
  return (
    <>
      <section className="w-full lg:max-w-7xl mx-auto px-7 py-12 ">
        <h2 className="text-4xl font-bold text-gray-900">
          People of Brokerage
        </h2>
        <p className="text-gray-600 mt-2">
          Collaborators. Experts. Partners. When you work with Amwins, our team
          is your team.
        </p>

        {/* Card Layout */}
        <div className=" mt-4 lg:mt-8   flex flex-col lg:flex-row bg-white gap-0   rounded-lg   overflow-hidden">
          {/* Left Image */}
          <div className="hidden lg:block w-full lg:w-[40%] h-auto">
            <Image
              src="/peopleImage.jpeg" // Replace with your actual image path
              width={350}
              height={400}
              alt="Becky Patel"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[60%] lg:py-16   my-auto lg:p-6 flex flex-col lg:border border-l-0   ">
            <h3 className="text-3xl font-bold lg:pl-12 text-gray-900 leading-normal">
              Becky Patel
            </h3>
            <p className="text-gray-600 lg:pl-12 text-md leading-loose mt-2">
              Becky has been instrumental in furthering our mission at Amwins.
              Throughout her 37-year career, she has been recognized for
              countless achievements and proven herself as an industry leader.
              From receiving an Orange County Women in Business award to holding
              a previous Chairman of the Board position for Delta Dental of
              California, Patel’s experience and vision for development is
              evident. Today, Becky brings a signature management style and
              innovative solutions to over 350 people in her role as CEO of
              Amwins Connect.{" "}
            </p>

            {/* Badges */}
            <div className="flex lg:pl-12 mt-5 gap-3">
  <span className="bg-purple-100 text-gray-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg shadow-purple-200">
    San Mateo, CA
  </span>
  <span className="bg-purple-100 text-gray-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg shadow-purple-200">
    Amwins Connect
  </span>
</div>

          </div>
        </div>
      </section>

      <div
        className="py-10 object-contain w-full  md:px-0 px-7"
        style={{
          backgroundImage: "url('/CTA.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section
          className="flex bg-gradient-to-r   from-[#11071F] to-[#32155C] text-white 
          text-center rounded-2xl shadow-lg  justify-center max-w-[78rem]   mx-auto items-center px-4 bg-slate-400 lg:px-24 py-24"
        >
          <div
            className="  
      "
          >
            <h2 className="text-3xl font-bold font-[Asap] mb-4">
              Let’s Work Together
            </h2>
            <p className="text-gray-300 font-[Plus Jakarta Sans] leading-normal mb-6">
              Li Europan lingues es membres del sam familie. Lor separat existe
              un myth. Por scientie, musica, sport etc, litot <br /> Europa usa li sam
              vocabular.
            </p>
            <button className="bg-purple-500 font-[Plus Jakarta Sans] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
