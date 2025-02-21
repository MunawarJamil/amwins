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
    <div
      className="relative w-full flex items-center justify-center h-screen px-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative flex w-full max-w-6xl">
        {/* Left Content */}
        <div className="w-1/2 text-white flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold">{heading}</h2>
          <p className="text-lg opacity-80">{description}</p>
          <button className="bg-purple-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-purple-600 transition">
            {buttonText}
          </button>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-end relative">
          <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={rightImage}
              alt="Right Side Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Gray Dots Image */}
          <div className="absolute bottom-4 right-4 w-20 h-10">
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
  );
};

export default ReuseableHero;
