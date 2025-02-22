'use client';
import React from "react";
import { BiBuildings } from "react-icons/bi";

const specialties = [
  {
    title: "Builders' Risk",
    description:
      "Whether your client's project involves a renovation, catastrophe-exposed location, frame construction, or somewhere in between, Amwins has the builders risk and other construction property solutions to protect against job-site losses.",
  },
  {
    title: "Energy",
    description:
      "With energy sources continuously evolving, our specialists stay on top of market conditions to deliver property insurance solutions across upstream, midstream, downstream, utilities, solar and many other classes.",
  },
  {
    title: "Hospitality & Entertainment",
    description:
      "Do you have a large, coverage-driven account in the hospitality sector? Bring it on. We specialize in difficult-to-place risks from nightclubs to hotels to casinos.",
  },
  {
    title: "Manufacturing & Distribution",
    description:
      "Whether your client is involved in the design, development, manufacturing or distribution of products, we've got market access and expertise to deliver custom solutions that can't be found in the standard market.",
  },
  {
    title: "Parametric Structures",
    description:
      "Parametric solutions play a major role in covering catastrophe-driven risks and losses not caused by direct physical damage. We have the expertise to create individual account solutions as well as develop parametric products for specific perils, including a flood product for golf courses.",
  },
  {
    title: "Public Entity",
    description:
      "Public entities come in all shapes and sizes – from municipalities and government agencies to educational entities. Our specialists have the expertise to provide comprehensive, cost-effective property insurance coverage that meets your client's unique needs.",
  },
  {
    title: "Real Estate",
    description:
      "When it comes to commercial and residential real estate, Amwins brokers have the expertise and market relationships to protect your clients from weather-related and other unforeseen losses. With over $2 billion in annual property placements, real estate is kind of our thing.",
  },
  {
    title: "Transportation & Inland Marine",
    description:
      "From a fleet of trucks to rail trains, container ships and aviation, our transportation and inland marine property specialists have expertise to place coverage for whatever precious cargo your clients are hauling.",
  },
  {
    title: "Specialty Coverages",
    description:
      "Our property coverage expertise includes all risk, auto physical damage, boiler + machinery, cargo, dealers open lot, earthquake, difference in conditions (DIC), flood, motor truck cargo, terrorism, wind and more.",
  },
];

const PropertySpecialties = () => {
  return (
    <>
      {/* 1) SPECIALTIES GRID */}
      <div className="w-[1260px] mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-black mb-8">
          Property areas of specialty
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded p-6 flex items-start relative" // Replaced 'shadow-md' with custom shadow for 4 sides
            >
              {/* Icon (Square Checkmark at Top Left Corner) */}
              <div className="absolute top-1 left-1 w-14 h-14">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                >
                  <rect x="0" y="0" width="28" height="28" fill="#0A0A1A" />{" "}
                  {/* Square instead of circle */}
                  <path
                    d="M7 12L10 15L17 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text (Removed margin for icon, adjusted positioning) */}
              <div className="ml-0 pl-10">
                {" "}
                {/* Added padding-left to account for icon position */}
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {specialty.title}
                </h2>
                <p className="text-sm text-black leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2) EXCLUSIVE PROPERTY CAPACITY */}
      <div className="bg-[url('/insurance-images/img/offwhitebg.jpg')] bg-cover bg-no-repeat w-full h-[300px] flex items-center justify-center">
        <div className="w-[1230px] mx-auto px-12 pt-12 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex flex-col md:flex-row items-start md:items-center gap-6 py-8 rounded">
          {/* Icon + Title */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <BiBuildings className="w-12 h-12 text-black mb-2" />
            <h1 className="font-bold text-lg">Exclusive property capacity</h1>
          </div>
          {/* Description */}
          <div className="md:w-2/3">
            <p className="text-black">
              Brokerage Special Risk Underwriters (SRU) provides CAT-exposed
              property capacity, available exclusively through Brokerage, along
              with supplemental products like builder’s risk, earthquake, wind,
              and AOP deductible buyback. In a tightening market where capacity
              is shrinking for these risks, SRU continues to expand exclusive
              offerings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySpecialties;
