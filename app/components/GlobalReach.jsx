"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const GlobalReach = () => {
  const regions = [
    {
      name: "United States",
      description:
        "Our U.S. ISA location provides in-depth expertise with teams focused on niche industries and accompanying risks.",
    },
    {
      name: "United Kingdom",
      description:
        "As an internationally recognized London specialty insurance broker, ISA Global Risks delivers insurance and reinsurance coverage for clients around the world.",
    },
    {
      name: "Europe",
      description:
        "ISA Global Risks provides nuanced solutions and support to our mainland European insurance company broker-partners.",
    },
    {
      name: "Asia Pacific",
      description:
        "ISA Global Risks offers solutions and support to our Asia-Pacific insurance broker-partners. Our Seoul-based team has proven expertise in APAC insurance and is ready to meet your specific coverage needs.",
    },
    {
      name: "Latin America",
      description:
        "Our offices provide solutions and support to our broker-partners throughout Latin America. Our insurance and reinsurance brokerage teams serve as your trusted partner, delivering deep regional expertise.",
    },
    {
      name: "Bermuda",
      description:
        "ISA Bermuda is part of America's Alternative Risk team, a group focused on exploring state-of-the-art insurance solutions in the parametric, captive and insurance-linked security space. ",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full md:my-20 max-w-7xl lg:px-6 mx-auto bg-white">
      {/* Left side - Image */}
      <div className="lg:w-1/2 relative">
        <div className="  ">
          <div className="hidden lg:block h-[80%] max-w-2xl">
            <Image
              src="/Background.png"
              alt="Global Reach"
              className="object-cover h-[75%]
          "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="  p-6 lg:px-12 ">
        <div className=" ">
          <h1 className="text-3xl lg:text-6xl font-semibold  text-gray-900">
            Our Global Reach, Your Competitive Advantage
          </h1>

          <div className="space-y-6 mt-10">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="border-b border-gray-200 hover:shadow-md hover:px-2   pb-6"
              >
                <div className="flex items-start gap-4">
                  {/* Title and Description container */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flow-root md:items-center gap-4">
                      <h2 className="text-xl font-semibold text-gray-900 min-w-[180px]">
                        {region.name}
                      </h2>
                      <p className="text-gray-600 leading-relaxed flex-1">
                        {region.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className=" hidden lg:flex-shrink-0">
                    <img
                      src="/Vector.png"
                      alt="Arrow icon"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
