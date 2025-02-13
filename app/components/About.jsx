"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const tabData = {
  BROKERAGE: {
    title: "Brokerage",
    description:
      "As a leading excess and surplus lines specialty insurance broker, Amwins Brokerage handles difficult placements and unique opportunities across all lines. We’re more than your partner — we’re on your team and in the trenches, working to consistently deliver broad resources and unmatched access to leading insurance markets worldwide. You expect quality specialty insurance service — we’re here to deliver it.",

    image:
      "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg",
    services: [
      "Property",
      "Casualty",
      "Professional Lines",
      "Alternative Risk",
    ],
  },
  "SMALL ACCOUNTS": {
    title: "Small Accounts",
    description:
      "Small accounts need specialized attention to manage their unique insurance requirements efficiently. Our team ensures personalized service for every client.",
    image:
      "https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg",
    services: [
      "Personal Lines",
      "Small Business",
      "Retail Support",
      "Custom Solutions",
    ],
  },
  UNDERWRITING: {
    title: "Underwriting",
    description:
      "Our underwriting services provide precise risk assessments, ensuring optimal coverage with a comprehensive understanding of each client's needs.",
    image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg",
    services: [
      "Risk Evaluation",
      "Claims Management",
      "Custom Policies",
      "Risk Mitigation",
    ],
  },
  "GLOBAL RISKS": {
    title: "Global Risks",
    description:
      "Global risk management requires a deep understanding of international markets and regulatory landscapes. We deliver solutions for diverse global challenges.",
    image: "https://thecyberexpress.com/wp-content/uploads/Risk-Management.jpg",
    services: [
      "International Coverage",
      "Cross-Border Risks",
      "Global Partnerships",
      "Regulatory Compliance",
    ],
  },
  "GROUP BENEFITS": {
    title: "Group Benefits",
    description:
      "Our group benefits programs support businesses in providing competitive and comprehensive packages to their employees.",
    image:
      "https://cdn.turtlemint.com/wp-content/uploads/All-about-Employees-State-Insurance-Scheme-e1617953584805.jpg",
    services: [
      "Health Insurance",
      "Retirement Plans",
      "Wellness Programs",
      "Employee Assistance",
    ],
  },
};

function About() {
  const [activeTab, setActiveTab] = useState("BROKERAGE");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const activeContent = tabData[activeTab];

  return (
    <div className="bg-[#002F4B] min-h-screen md:p-7 text-white">
      {/* Navigation Tabs */}
      <div className="flex  overflow-x-auto pt-3 px-5 lg:justify-center space-x-8 border-b border-[#1E4A64] pb-4 mb-8">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`pb-2 whitespace-nowrap ${
              activeTab === tab
                ? "text-[#00AEEF] border-b-2    border-[#00AEEF]"
                : "hover:text-[#00AEEF]"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-[#003B5C] text-white border-none">
          <CardContent className="p-8">
            <h2 className="text-3xl my-10 font-bold ">{activeContent.title}</h2>
            <p className="mb-4 leading-loose ">{activeContent.description}</p>
            <Button
              className="text-[#00AEEF] p-0 hover:underline"
              variant="link"
            >
              LEARN MORE
            </Button>
          </CardContent>
        </Card>

        <div className="hidden md:flex justify-center items-center">
          <Image
            src={activeContent.image}
            alt={activeContent.title}
            className="rounded-md object-cover w-full h-full"
            width={1200}
            height={800}
          />
        </div>
      </div>

      {/* Service Links */}
      <div className="grid grid-cols-1 px-3 md:grid-cols-2 gap-4 mt-8">
        {activeContent.services.map((service, index) => (
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
  );
}

export default About;
