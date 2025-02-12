
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Image from "next/image";
function About() {
  return (
    <>
      {/* <section className=" bg-blue-950  py-5   ">
        <ul className="hidden  text-xl text-white lg:flex justify-center   border-gray-400 lg:gap-10 pt-10">
          <li className="border-b-2 border-blue-500 pb-2 text-blue-400">
            Brokerage
          </li>
          <li className="pb-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Small Accounts
          </li>
          <li className="pb-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Underwriting
          </li>
          <li className="pb-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Global Risks
          </li>
          <li className="pb-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 cursor-pointer">
            Group Benefits
          </li>
        </ul>

        <div className="lg:h-[450px] flex justify-between px-10 w-[90%] py-5 lg:w-[70%] mx-auto  border  my-10">
          <div className="lg:w-[50%]  text-white lg:px-10 lg:py-3 lg:leading-loose ">
            <h1 className="text-3xl pb-5 font-bold">Brokerage</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              molestias quaerat, voluptatum, libero officia accusamus placeat
              quos eligendi facere eos ab atque similique, architecto debitis
              magnam praesentium delectus quasi quam? Odio, ex molestiae
              similique ratione quidem, ipsa nobis dolores quia libero sapiente
              sit quas esse inventore iste saepe modi quibusdam vero nemo? Sint
              odio iure ad exercitationem eligendi voluptas saepe. Blanditiis
              illo{" "}
            </p>
            <button className="pt-5 font-bold text-lg">LEARN MORE</button>
          </div>

          <div className=" hidden lg:flex p-5 mt-8 transform skew-y-[-6deg]">
            <img
              src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
              alt="about "
            />
          </div>
        </div>

        
        <div className="flex   items-center justify-center">

        <div className="border   ">
          <p className="text-lg font-bold text-white">Property</p>
          <button>go</button>
        </div>

 
        <div className="border p-5 ">
          <p className="text-lg font-bold text-white">Property</p>
          <button>go</button>
        </div>

        </div>
      </section> */}

      <div className="bg-[#002F4B] min-h-screen p-8 text-white">
        {/* Navigation Tabs */}
        <div className="hidden lg:flex justify-center space-x-8 border-b border-[#1E4A64] pb-4 mb-8">
          <button className="text-[#00AEEF] border-b-2 border-[#00AEEF] pb-2">
            BROKERAGE
          </button>
          <button className="hover:text-[#00AEEF]">SMALL ACCOUNTS</button>
          <button className="hover:text-[#00AEEF]">UNDERWRITING</button>
          <button className="hover:text-[#00AEEF]">GLOBAL RISKS</button>
          <button className="hover:text-[#00AEEF]">GROUP BENEFITS</button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#003B5C] text-white border-none">
            <CardContent className="p-8">
              <h2 className="text-3xl my-10 font-bold ">Brokerage</h2>
              <p className="mb-4 leading-loose ">
                As a leading excess and surplus lines specialty insurance
                broker, Amwins Brokerage handles difficult placements and unique
                opportunities across all lines. We’re more than your partner —
                we’re on your team and in the trenches, working to consistently
                deliver broad resources and unmatched access to leading
                insurance markets worldwide. You expect quality specialty
                insurance service — we’re here to deliver it.
              </p>
              <Button
                className="text-[#00AEEF] p-0 hover:underline"
                variant="link"
              >
                LEARN MORE
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center">
          {/* <Image
    src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
    alt="Brokerage"
    className="rounded-md object-cover"
    layout="fill" 
  /> */}

<Image
              src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
              alt="Brokerage"
              className="rounded-md object-cover w-full h-full"
              width={1200}
              height={800}
            />
          </div>
        </div>

        {/* Service Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {[
            "Property",
            "Casualty",
            "Professional Lines",
            "Alternative Risk",
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-[#003B5C] text-white border-none flex justify-between items-center p-4"
            >
              <span className="text-lg font-semibold">{service}</span>
              <span className="text-[#00AEEF] text-xl">&#9654;</span>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
