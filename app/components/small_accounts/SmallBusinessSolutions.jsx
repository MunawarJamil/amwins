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
                <li key={index} className="flex gap-2 items-start">
                  <Image
                    src={"/purleTick.svg"}
                    alt="Small Business Solutions"
                    width={25}
                    height={25}
                    className="mt-1"
                  />

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
