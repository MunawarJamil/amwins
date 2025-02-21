import React from "react";
import BrokerSearch from "../components/insurance-components/components/BrokerSearch";
import Navbar from "../components/Navbar";
import PropertyInsurance from "../components/insurance-components/components/PropertyInsurance";
import PropertySpecialties from "../components/insurance-components/components/PropertySpecialties";
import Resources from "../components/insurance-components/components/Resources";
import CaseStudy from "../components/insurance-components/components/CaseStudy";
import Footer from "../components/Footer";


function page() {
  return (
    <div>
      <>
        <Navbar />
        <PropertyInsurance />
        <PropertySpecialties />
        <BrokerSearch /> 
        <Resources/>
        <CaseStudy/>
        <Footer/>
        
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default page;
