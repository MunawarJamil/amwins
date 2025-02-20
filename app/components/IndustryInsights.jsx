"use client";

import Image from "next/image";

export default function IndustryInsights() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "5K", label: "Happy Clients", highlight: true },
    { value: "99,9%", label: "Successful Project" },
    { value: "520+", label: "Expert Staff" },
  ];
  return (
    <>
      <section className="flex flex-col lg:flex-row lg:w-[1205px] mx-auto items-stretch lg:items-center border shadow-md px-6 py-12">
        {/* Left Image Section */}
        <div className="w-full  flex">
          <div className=" ">
            <Image
              src="/Image-Placeholder.png" // Replace with your actual image path
              width={400}
              height={300}
              alt="Business Professional"
              className="rounded-lg    object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-[60%] flex flex-col   leading-normal pt-5 px-6">
            <h2 className="text-4xl font-bold leading-normal">
              Where industry insights meet <br /> wholesale excellence.
            </h2>
            <p className="mt-4 text-gray-600 leading-normal">
              ISA delivers future-focused insurance solutions, leveraging deep
              industry expertise, strong partnerships, and advanced analytics.
              With a global reach and specialized teams, we help you navigate
              risks and seize opportunities with confidence.
            </p>

            {/* Bullet Points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Expertise across diverse industry and risk specialties",
                "Strong partnerships for customized insurance solutions",
                "Collaborative approach across all teams and functions",
                "Global reach with a broad network of divisions and programs",
                "Data-driven insights to stay ahead of emerging risks",
                "Committed to your success—ensuring mutual growth",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✔</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-8 w-[300px] flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
              <Image
                src="/avatar.png" // Replace with actual avatar image path
                width={40}
                height={40}
                alt="User Avatar"
                className="rounded-full"
              />
              <div>
                <p className="text-gray-600">Can Call Us</p>
                <p className="text-lg font-bold text-blue-600">
                  +01 111-223-43
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20   mt-10   shadow-md py-10">
        <div className="grid grid-cols-1 lg:w-[1200px] mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 text-center rounded-lg shadow-md ${
                stat.highlight
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className={`text-gray-600 ${stat.highlight ? "text-white" : ""}` }
              
              
              
              >{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
