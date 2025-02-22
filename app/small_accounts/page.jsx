import React from "react";
import Navbar from "../components/Navbar";
import ReuseableHero from "../components/small_accounts/ReuseableHero";
import SmallBusinessSolutions from "../components/small_accounts/SmallBusinessSolutions";
import InsuranceServices from "../components/small_accounts/InsuranceServices";
import BrokerageCard from "../components/small_accounts/BrokerageCard";
import BrokerSearch from "../components/small_accounts/BrokerSearch";
import Image from "next/image";
import ExpertiseSection from "../components/small_accounts/ExpertiseSection";
import ResourcesSection from "../components/small_accounts/ResourcesSection";
import Footer from "../components/Footer";
import CTASection from "../components/small_accounts/CTASection";

const SmallAccounts = () => {
  const solutionsData = {
    title: "Comprehensive Solutions Tailored For Small Businesses.",
    description:
      "Providing tailored coverage with speed, efficiency, and industry-leading expertise.",
    features: [
      "Advanced Technology & Analytics – Our cutting-edge tools, including Brokerage IQ®, streamline quoting and binding for small accounts.",
      "Extensive Market Access – Backed by a vast network and specialized underwriting teams, we secure competitive terms for your clients.",
      "Dedicated Expertise – With a team of experienced professionals focused on small business insurance, we deliver the right solutions with precision and efficiency.",
    ],
    imageUrl: "/smallbusinessLImage.png", // Replace with your image path
  };
  const servicesData = [
    {
      title: "Small Commercial",
      description:
        "We use our scale, influence, and expertise to deliver tailored insurance distribution solutions for small commercial businesses.",
    },
    {
      title: "Admitted Placement Services",
      description:
        "We provide retailers with comprehensive placement solutions across standard and E&S lines, including hard-to-place accounts.",
    },
    {
      title: "Personal Lines",
      description:
        "Brokerage specializes in helping retail agents and brokers secure the right coverage at competitive rates for personal line accounts of all sizes.",
    },
    {
      title: "Flood",
      description:
        "Partnering with retail agents, Brokerage underwriters provide primary and excess flood insurance coverage.",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] w-screen overflow-x-hidden">
      {" "}
      <Navbar className="sticky   top-0" />
      <ReuseableHero
        backgroundImage="/Hero.png"
        rightImage="/peapleImage.png"
        grayDotsImage="/grayDots.png"
        heading="Small Accounts"
        description="Brokerage Access is a nationwide platform offering binding and brokerage services for small P&C and personal lines accounts, delivering tailored insurance solutions to support their needs."
        buttonText="Get Appointed"
      />
      <SmallBusinessSolutions {...solutionsData} />
      <InsuranceServices services={servicesData} />
      <BrokerageCard
        icon="/buildingSVg.png"
        title="Brokerage InstantQuote"
        description="Brokerage InstantQuote delivers firm, bindable quotes from multiple carriers within minutes. Designed for small and mid-market businesses, it blends digital convenience with extensive market access."
        ctaText="Log in and start quoting today!"
        ctaLink="#"
      />
      <div className="relative w-full justify-center">
        <Image
          src={"/brokerSearchBG.png"}
          width={1000}
          height={1000}
          objectFit="cover"
          className="sm:h-auto sm:min-h-[80vh] h-[150vh]  w-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#11071F] z-10"></div>
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <BrokerSearch />
        </div>
      </div>
      <ExpertiseSection />
      <ResourcesSection />
      <BrokerageCard
        icon="/industries.svg"
        title="Industries"
        description="Our brokers provide specialized solutions across diverse industries, addressing unique challenges with tailored expertise."
        ctaText={null}
        ctaLink="#"
      />
      <CTASection/>
        <Footer />

    </div>
  );
};

export default SmallAccounts;
