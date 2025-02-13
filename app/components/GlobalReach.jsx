"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const GlobalReach = () => {
  const regions = [
    {
      name: "United States",
      description:
        "Our U.S. Amwins location provides in-depth expertise with teams focused on niche industries and accompanying risks.",
    },
    {
      name: "United Kingdom",
      description:
        "As an internationally recognized London specialty insurance broker, Amwins Global Risks delivers insurance and reinsurance coverage for clients around the world.",
    },
    {
      name: "Europe",
      description:
        "Amwins Global Risks provides nuanced solutions and support to our mainland European insurance company broker-partners.",
    },
    {
      name: "Asia Pacific",
      description:
        "Amwins Global Risks offers solutions and support to our Asia-Pacific insurance broker-partners. Our Seoul-based team has proven expertise in APAC insurance and is ready to meet your specific coverage needs.",
    },
    {
      name: "Latin America",
      description:
        "THB offers nuanced solutions and support to our broker-partners throughout Latin America. Our insurance and reinsurance brokerage teams serve as your trusted partner, delivering deep regional expertise.",
    },
    {
      name: "Bermuda",
      description:
        "Amwins Bermuda is part of Amwins' Alternative Risk team, a group focused on exploring state-of-the-art insurance solutions in the parametric, captive, and insurance-linked security space.",
    },
  ];

  return (
    <motion.div
      className="flex flex-col w-full md:w-[80%] mx-auto md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full hidden lg:block md:w-[45%]">
        <Image
          src="https://i0.wp.com/thecontentcraft.com/wp-content/uploads/2020/12/global-reach-1.jpg?fit=1200%2C1200&ssl=1"
          alt="Global Reach"
          className="object-cover h-full w-full"
          width={600}
          height={400}
        />
      </div>

      <div className="w-full   p-6 bg-blue-100 flex flex-col justify-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Our Global Reach, Your Competitive Advantage
        </motion.h2>

        <div className="space-y-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="py-4 border-b border-gray-300 hover:bg-blue-200 rounded-lg px-4"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {region.name}
              </h3>
              <p className="text-gray-700 mb-2">{region.description}</p>
              <p className="text-blue-600 text-lg font-bold">▶</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalReach;
