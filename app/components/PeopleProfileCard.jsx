"use client";
import React from "react";
import Image from "next/image";

export default function PeopleProfileCard() {
  return (
    <>
      <section className="max-w-[1245px] mx-auto px-4 py-12 ">
        <h2 className="text-4xl font-bold text-gray-900">
          People of Brokerage
        </h2>
        <p className="text-gray-600 mt-2">
          Collaborators. Experts. Partners. When you work with Amwins, our team
          is your team.
        </p>

        {/* Card Layout */}
        <div className="mt-8 border-l-0 border border-b-0 flex flex-col lg:flex-row bg-white   rounded-lg   overflow-hidden">
          {/* Left Image */}
          <div className="w-full lg:w-[40%] h-auto">
            <Image
              src="/peopleImage.jpeg" // Replace with your actual image path
              width={350}
              height={400}
              alt="Becky Patel"
              className=" w-[90%] h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[60%] p-6 flex flex-col   justify-center">
            <h3 className="text-3xl font-bold text-gray-900 leading-normal">
              Becky Patel
            </h3>
            <p className="text-gray-600 text-md leading-normal mt-2">
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
            <div className="mt-4 flex gap-3">
              <span className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                San Mateo, CA
              </span>
              <span className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                Amwins Connect
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex bg-gradient-to-r   from-purple-900 to-gray-900 text-white 
          text-center rounded-2xl shadow-lg  justify-center max-w-[1200px] mt-10 mx-auto items-center px-6  bg-slate-400 lg:px-20 py-16"
      >
        <div
          className="  
      "
        >
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-6">
            Li Europan lingues es membres del sam familie. Lor separat existe un
            myth. Por scientie, musica, sport etc, litot Europa usa li sam
            vocabular.
          </p>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
