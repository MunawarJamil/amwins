import Image from "next/image";

const SmallBusinessSolutions = ({ title, description, features, imageUrl }) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-[#000] mb-6">{title}</h1>
            <p className="text-lg text-[#333333] mb-8">{description}</p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="39" height="39" rx="10" fill="#11071F" fill-opacity="0.18"/>
<path d="M12.2812 20.5312L17.0938 25.3438L26.7188 15.0312" stroke="url(#paint0_linear_248_108)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_248_108" x1="11.1357" y1="14.187" x2="22.7964" y2="30.6663" gradientUnits="userSpaceOnUse">
<stop stop-color="#11071F"/>
<stop offset="1" stop-color="#32155C"/>
</linearGradient>
</defs>
</svg>

                  <span className="text-[#333333]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={imageUrl}
              alt="Small Business Solutions"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBusinessSolutions;
