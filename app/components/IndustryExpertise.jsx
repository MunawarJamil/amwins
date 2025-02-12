import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
const industries = [
  "Construction",
  "Energy",
  "Environmental",
  "Healthcare",
  "Hospitality + Entertainment",
  "Life Sciences",
  "Manufacturing + Distribution",
  "Public Entity",
  "Real Estate",
  "Transportation",
];

const IndustryExpertise = () => {
  return (
    <>
      <div className="max-w-[80%] my-20 mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            In-depth industry expertise
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Our specialty practices are comprised of teams focused on specific
            industries, and the risks that accompany them.
          </p>

          <ul className="space-y-4">
            {industries.map((industry, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-blue-200 pb-2 cursor-pointer hover:text-blue-600"
              >
                <span className="text-lg font-medium">{industry}</span>
                <ChevronRight className="text-blue-600" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="https://media.istockphoto.com/id/846859964/photo/robots-welding-in-a-car-factory.jpg?s=612x612&w=0&k=20&c=YLDHM61cwwC7xPnzP8nlBEbmJLB1sqgMr9W6B1m2WBk="
            alt="Healthcare professional"
            className="rounded-lg shadow-lg w-full h-full object-cover"
            width={1000}
            height={800}
          />
        </div>
      </div>

      {/* ==== */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-lg max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          People of Amwins
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Collaborators. Experts. Partners.
          <br />
          When you work with Amwins, our team is your team.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 rounded-2xl shadow-md">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src="https://www.investopedia.com/thmb/03_nCwEf2AMtnDLH2QkOEuQxiIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1084171152-8445a490b5894f0a9bb588dbfc2ac22d.jpg" // Replace with the actual path of your image
              alt="Becky Patel"
              className=" w-full h-full "
              width={1000}
              height={800}
            />
          </div>

          <div className="w-full lg:w-2/3 lg:pl-8 border border-gray-300 p-6 rounded-r-2xl bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Becky Patel
            </h2>
            <p className="text-gray-700 mb-4">
              Becky has been instrumental in furthering our mission at Amwins.
              Throughout her 37-year career, she has been recognized for
              countless achievements and proven herself as an industry leader.
              From receiving an Orange County Women in Business award to holding
              a previous Chairman of the Board position for Delta Dental of
              California, Patel’s experience and vision for development is
              evident. Today, Becky brings a signature management style and
              innovative solutions to over 350 people in her role as CEO of
              Amwins Connect.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                San Mateo, CA
              </button>
              <button className="bg-white text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                Amwins Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryExpertise;
