"use client";
import React from "react";
import Image from "next/image";

export default function PeopleProfileCard() {
  return (
    <div className="w-full lg:w-[77%] mx-auto mt-20  px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold text-[#003366] mb-2">
        People of Amwins
      </h2>
      <p className="text-gray-600 mb-6">
        Collaborators. Experts. Partners.
        <br />
        When you work with Amwins, our team is your team.
      </p>
      <div className="flex flex-col lg:flex-row items-start lg:items-center bg-white  rounded-lg overflow-hidden">
        <div className="w-full h-[400px] lg:w-1/2">
          <Image
            src="/people.png"
            alt="Profile Image"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-2/3 border p-6 border-l border-gray-200">
          <h3 className="text-xl font-bold text-[#003366] mb-2">Becky Patel</h3>
          <p className="text-gray-700 mb-4">
            Becky has been instrumental in furthering our mission at Amwins.
            Throughout her 37-year career, she has been recognized for countless
            achievements and proven herself as an industry leader. From
            receiving an Orange County Women in Business award to holding a
            previous Chairman of the Board position for Delta Dental of
            California, Patel's experience and vision for development is
            evident. Today, Becky brings a signature management style and
            innovative solutions to over 350 people in her role as CEO of Amwins
            Connect.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-[#D2A0FA] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#002244]">
              San Mateo, CA
            </button>
            <button className="bg-gray-100   px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
              Amwins Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
