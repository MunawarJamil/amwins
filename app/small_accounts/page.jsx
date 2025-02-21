import React from "react";
import Navbar from "../components/Navbar";
import ReuseableHero from "../components/small_accounts/ReuseableHero";

const SmallAccounts = () => {
  return (
    <div>
      {" "}
      <Navbar className="sticky   top-0" />
      <ReuseableHero
        backgroundImage="/Hero.png"
        rightImage="/peapleImage.png"
        grayDotsImage="/grayDots.png"
        heading="Small Accounts"
        description="Brokerage Access is a nationwide platform offering binding and brokerage services..."
        buttonText="Get Appointed"
      />
    </div>
  );
};

export default SmallAccounts;
