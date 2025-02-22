import React from "react";

const CaseStudy = () => {
  return (
    <div className="bg-[url('/insurance-images/img/offwhitebg.jpg')] bg-cover bg-no-repeat w-full h-[550px] mx-auto relative mt-40">
      <div className="absolute inset-0 flex items-center justify-center -translate-y-12"> {/* Shifted up by 3rem (48px) */}
        <div className="bg-gradient-to-b from-black to-purple-950 text-white mx-4 md:mx-auto max-w-[1100px] h-[430px] lg:px-12 lg:py-20 mt-40 md:mt-24 lg:mt-48 rounded-3xl mb-12 md:mb-24">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-6">
            {/* Left Section */}
            <div className="lg:max-w-[1900px]">
              <p className="text-[#CA93F5] text-xl">CASE STUDY</p>
              <h1 className="mt-7 text-4xl font-normal">
                Finding coverage for challenging property risks with prior
                losses.
              </h1>
            </div>

            {/* Right Section */}
            <div className="mt-7">
              <div className="lg:max-w-[20000px] space-y-4">
                <p className="text-sm md:text-base">
                  A retail chain with stores across major Northeast and Midwest
                  cities lost its coverage after sustaining substantial
                  riot-related losses in a single day.
                </p>
                <p className="text-sm md:text-base">
                  Facing ongoing exposure to similar risks, Brokerage
                  collaborated with carrier partners to secure coverage for the
                  client's stores and inventory. While most carriers excluded
                  strikes, riots, and civil commotion, we implemented innovative
                  deductibles and structures to provide the necessary
                  protection.
                </p>
                <h2 className="text-xl md:text-2xl font-normal">
                  Brokerage has the influence, scale, and market access to place
                  even the most challenging risks.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;