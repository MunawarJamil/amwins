import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import InsuranceResources from "./InsuranceResources";
const resources = [
  {
    date: "FEB 3, 2025",
    title: "For Professional Services Firms, Landmines Lurk in D&O Polices",
    image:
      "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg",
  },
  {
    date: "JAN 21, 2025",
    title: "Semaglutides and GLP-1s: Their Impact on the Insurance Market",
    image:
      "https://i.ytimg.com/vi/PAym-3EOzs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxCAuz9au2cY5Ft0Ff3cJ027MErg",
  },
  {
    date: "JAN 21, 2025",
    title:
      "The Evolution of Excess/Side A DIC Insurance: Why Non-Profit and Private Companies Should Consider This Essential Coverage",
    image:
      "https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg",
  },
  {
    date: "JAN 21, 2025",
    title: "Why Phase I Environmental Site Assessments Aren’t Enough",
    image: "https://miro.medium.com/v2/resize:fit:514/0*RzXWmLDv7eHs-GUd.jpg",
  },
];

const IndustryExpertise = () => {
  return (
    <>
      <InsuranceResources
        title="In-depth industry expertise"
        subtitle="Our specialty practices are comprised of teams focused on specific industries, and the risks that accompany them."
        resources={resources}
      />
    </>
  );
};

export default IndustryExpertise;
