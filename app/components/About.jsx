import React from "react";
import CardSlider from "./CardSlider";
function About() {
  return <div className="lg:w-[1260px]   px-7 my-10 mx-auto p-5"> 
<div className="grid col-span-1 lg:grid-cols-2 ">
<h1 className="w-full text-2xl  lg:text-5xl leading-snug lg:font-semibold font-bold " >Enjoy Our <br /> Outstanding Solutions</h1>
<p className="lg:text-sm  mt-5 lg:pt-2  ">Discover innovative and tailored solutions designed to meet your unique needs. Our commitment to excellence ensures seamless experiences, efficiency, and reliability. With cutting-edge technology and a customer-first approach, we deliver results that drive success. Experience the difference with our outstanding solutions!</p>

 

</div>

<div>
  <CardSlider />
</div>
 </div>;
}

export default About;
