import React from 'react';
import { Building2 } from 'lucide-react';

const BrokerSearch = () => {
  return (
    <div className="mt-12">
      {/* Feature Cards Section with Background */}
      <div className="w-full h-[380px] bg-[url('/insurance-images/img/bggg.jpg')] bg-cover bg-center bg-no-repeat relative mx-auto"
        style={{
          backgroundPosition: '50% 50%',
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 w-[1400px] mx-auto">
          <div className=" mx-auto h-full p-8 w-[1300px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-center">
              {/* CAT Modeling Card */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">CAT modeling</h3>
                <p className="text-gray-300 text-sm">
                  Brokerage specializes in catastrophe-driven property insurance, using advanced analytics 
                  for precise risk assessment and pricing.
                </p>
              </div>

              {/* Claims Advocacy Card */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Claims advocacy</h3>
                <p className="text-gray-300 text-sm">
                  From developing proactive claims management plans to handling complex claims, Brokerage is 
                  there for our clients when they need us most.
                </p>
              </div>

              {/* Customized Solutions Card */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Customized solutions</h3>
                <p className="text-gray-300 text-sm">
                  We work with you to provide tailored solutions, leveraging our specialization model to meet 
                  specific coverage needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section with Black Background */}
      <div className="w-full mx-auto bg-black p-8 ">
      
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-8 ml-6 ">Property Broker search</h2>
          
          <div className="flex gap-1 p-1 bg-[#CA93F5] rounded-lg w-[1220px] mx-auto">
            <input
              type="text"
              placeholder="Search by name..."
              className="flex-1 px-6 py-3 bg-white bg-opacity-95 text-black placeholder-gray-500 focus:outline-none"
            />
            
            <div className="relative min-w-[200px]">
              <select className="w-full px-6 py-3 bg-white bg-opacity-95 text-gray-800 appearance-none focus:outline-none">
                <option value="">By State...</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="tx">Texas</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white hover:bg-purple-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerSearch;