import React from "react";

const CaseStudy = () => {
  return (
    <div className="bg-gradient-to-b from-black to-purple-900 text-white mx-4 md:mx-auto max-w-[1200px] px-6 md:px-12 lg:px-36 py-12 md:py-16 lg:py-20 mt-12 md:mt-24 lg:mt-48 rounded-3xl mb-12 md:mb-24">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-14">
        {/* Left Section */}
        <div className="lg:max-w-[500px]">
          <p className="text-[#CA93F5]">Case Study</p>
          <h1 className="py-6 md:py-8 lg:py-12 text-3xl md:text-4xl lg:text-5xl font-normal">
            Finding coverage for challenging property risks with prior losses.
          </h1>
        </div>

        {/* Right Section */}
        <div className="mt-16">
        <div className="lg:max-w-[600px] space-y-4">
          <p className="text-sm md:text-base">
            A retail chain with stores across major Northeast and Midwest cities
            lost its coverage after sustaining substantial riot-related losses in
            a single day.
          </p>
          <p className="text-sm md:text-base">
            Facing ongoing exposure to similar risks, Brokerage collaborated with
            carrier partners to secure coverage for the client's stores and
            inventory. While most carriers excluded strikes, riots, and civil
            commotion, we implemented innovative deductibles and structures to
            provide the necessary protection.
          </p>
          <h2 className="text-xl md:text-2xl font-normal">
            Brokerage has the influence, scale, and market access to place even the most challenging risks.
          </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;