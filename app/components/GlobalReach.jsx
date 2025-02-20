"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const GlobalReach = () => {
  const regions = [
    {
      name: "United States",
      description:
        "Our U.S. ASI brokarage location provides in-depth expertise with teams focused on niche industries and accompanying risks.",
    },
    {
      name: "United Kingdom",
      description:
        "As an internationally recognized London specialty insurance broker, ASI brokarage Global Risks delivers insurance and reinsurance coverage for clients around the world.",
    },
    {
      name: "Europe",
      description:
        "ASI brokarage Global Risks provides nuanced solutions and support to our mainland European insurance company broker-partners.",
    },
    {
      name: "Asia Pacific",
      description:
        "ASI brokarage Global Risks offers solutions and support to our Asia-Pacific insurance broker-partners. Our Seoul-based team has proven expertise in APAC insurance and is ready to meet your specific coverage needs.",
    },
    {
      name: "Latin America",
      description:
        "THB offers nuanced solutions and support to our broker-partners throughout Latin America. Our insurance and reinsurance brokerage teams serve as your trusted partner, delivering deep regional expertise.",
    },
    {
      name: "Bermuda",
      description:
        "ASI brokarage Bermuda is part of ASI brokarage' Alternative Risk team, a group focused on exploring state-of-the-art insurance solutions in the parametric, captive, and insurance-linked security space.",
    },
  ];

  return (
    <motion.div
      className="flex flex-col w-full md:w-[79%] mx-auto md:flex-row bg-white shadow-lg   overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full hidden lg:block md:w-[45%]">
        <Image
         // src="https://i0.wp.com/thecontentcraft.com/wp-content/uploads/2020/12/global-reach-1.jpg?fit=1200%2C1200&ssl=1"
         src="/Background.png" 
         alt="Global Reach"
          className="object-cover h-full w-full"
          width={600}
          height={400}
        />
      </div>

      <div className="w-full p-6 flex flex-col lg:justify-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#003366]  mb-6 lg:text-center  "
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Our Global Reach, Your Competitive Advantage
        </motion.h2>

        <div className="space-y-6 ">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="relative py-4 lg:px-4 border-b-2 hover:shadow-xl hover:border hover:border-l-4 border-[#F7E5FF]     cursor-pointer flex items-center justify-between overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              <div className="lg:grid grid-cols-[2fr_3fr_0.7fr]    items-center ">
                <h3 className="text-2xl   whitespace-nowrap font-semibold text-[#003366] mb-2">
                  {region.name}
                </h3>
                <p className="text-[#003366]   ">{region.description}</p>
              </div>
              <div className="text-[#003366] text-2xl">
  <Image 
    src="/Layer_1.png" 
    alt="icon" 
    width={40} 
    height={40} 
    className="w-10 h-10 object-contain" 
  />
</div><motion.div
                className="absolute top-0 left-0 h-full w-2 bg-[#003366]"
                initial={{ width: 0 }}
                whileHover={{ width: "5px" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalReach;
