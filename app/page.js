import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import InsuranceResources from "./components/InsuranceResources";
import GlobalReach from "./components/GlobalReach";
 
import Footer from "./components/Footer";
import IndustryExpertise from "./components/IndustryExpertise";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />


      
      <About/>
      <InsuranceResources/>
      <GlobalReach/> 
      
      <IndustryExpertise/>
      <Footer/>
     

    </>
  );
}
