import Image from "next/image";

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
        "Amwins Global Risks offers solutions and support to our Asia-Pacific insurance broker-partners. Our Seoul based team has proven expertise in APAC insurance and is ready to meet your specific coverage needs.",
    },
    {
      name: "Latin America",
      description:
        "THB offers nuanced solutions and support to our broker-partners throughout Latin America. Our insurance and reinsurance brokerage teams serve as your trusted partner, delivering deep regional expertise.",
    },
    {
      name: "Bermuda",
      description:
        "Amwins Bermuda is part of Amwins’ Alternative Risk team, a group focused on exploring state-of-the-art insurance solutions in the parametric, captive and insurance-linked security space.",
    },
  ];

  return (
    <div className="flex flex-col w-full md:w-[80%] mx-auto md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full hidden lg:block md:w-1/2">
        <Image
          src="https://www.shutterstock.com/image-photo/teamwork-meeting-tablet-business-people-600nw-2251938325.jpg"
          alt="Global Reach"
          className="object-cover  h-full w-full"
          width={600}
          height={400}
        />
      </div>
      <div className="w-full md:w-1/2 p-6 bg-blue-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our global reach, your competitive advantage
        </h2>
        {regions.map((region, index) => (
          <div key={index} className="py-4 border-b border-gray-300">
            <div className="  md:flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {region.name}
              </h3>
             
            </div>
            <p className="text-gray-600   mt-2">{region.description}</p>
            <p className="text-gray-500 mt-3 ">▶</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalReach;
