"use client";

import Image from "next/image";

const ReuseableHero = ({
  backgroundImage,
  rightImage,
  grayDotsImage,
  heading,
  description,
  buttonText,
}) => {
  return (
    <div className="relative w-full justify-center">
      <Image
        src={backgroundImage}
        width={1000}
        height={1000}
        objectFit="cover"
        className="sm:h-auto h-screen  w-screen"
      />
      <div className="absolute inset-0 flex px-10 justify-center items-center">
        <div className=" relative  flex sm:flex-row flex-col w-full max-w-6xl">
          {/* Left Content */}
          <div className="sm:w-1/2 text-white flex flex-col justify-center space-y-4 sm:space-y-10">
            <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
            <p className="text-sm sm:text-lg opacity-80">{description}</p>
            <button className="bg-purple-500 w-min whitespace-nowrap text-[#11071F] font-semibold py-3 px-6 rounded-lg text-lg hover:bg-purple-600 transition">
              {buttonText}
            </button>
          </div>

          {/* Right Image */}
          <div className="sm:w-1/2 sm:flex justify-center hidden relative">
            <div className="relative lg:w-[400px] lg:h-[600px] w-[250px] h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={rightImage}
                alt="Right Side Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Gray Dots Image */}
            <div className="absolute -bottom-16 right-4 w-[40%] h-[30%]">
              <Image
                src={grayDotsImage}
                alt="Dots"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
    </div>
  );
};

export default ReuseableHero;
