import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="lg:hidden  justify-evenly  lg:w-[77%] mx-auto mt-5  ">
        <div className=" text-center bg-sky-50 md:container lg:w-[55%]   lg:pt-16">
          <p className=" text-sky-400 pt-10 px-10  text-2xl  ">
            Read Now: State of the Markete 2025 Outlook
          </p>
          <h1 className="text-3xl font-bold leading-relaxed px-10 py-5">
            The Specialty Insurance <br /> Provider that{" "}
            <span className="text-sky-400">
              {" "}
              Keeps You <br /> Ahead of Risks
            </span>
          </h1>

          <div className="grid  grid-cols-2 lg:grid-cols-3  gap-y-16 gap-x-1 p-5">
            <div className="">
              <p className="text-2xl font-bold text-sky-400">/$39B</p>
              <p>annual premium placements</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-400">/ 37,124</p>
              <p>underwriter relationships</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-400">/ 30,341</p>
              <p>retail agency relationships</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-400">/ 7,325</p>
              <p>employees worldwide</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-sky-400"> / 1,514</p>
              <p>employee shareholders</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-sky-400">/ 1.7M</p>
              <p>submissions received annually</p>
            </div>
          </div>
        </div>
        </div>


 {/*
        <div className=" hidden lg:flex lg:w-[50%] bg-sky-50 lg:h-[600px] lg:pt-16 ">
          <Image
            src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
            className="h-[470px] transform skew-x-[-6deg]  "
            width={700}
            height={800}
            alt="image is missing"
          />
        </div>
      </div> */}

<div className="hidden lg:flex   w-[77%] mx-auto mt-5 bg-slate-700">
  <div className="bg-sky-100 w-[76%] h-screen "
   style={{ clipPath: "polygon(0 0, 100% 0, 64% 100%, 0 100%)" }}>
<p className=" text-sky-400 pt-20 pl-20 px-10  text-2xl  ">
            Read Now: State of the Markete 2025 Outlook
          </p>
          <h1 className="text-5xl pl-20 font-semibold leading-relaxed px-10 py-5">
            The Specialty Insurance <br /> Provider that{" "}
            <span className="text-sky-400">
              {" "}
              Keeps You <br /> Ahead of Risks
            </span>
          </h1>

          <div className="grid gap-x-0 pl-20 grid-cols-2   gap-y-10   p-5">
            <div>
              <p className="text-2xl   font-bold text-sky-400">/$39B</p>
              <p>annual premium placements</p>
              </div>
            <div>
              <p className="text-2xl font-bold text-sky-400">/ 37,124</p>
              <p>underwriter relationships</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-400">/ 30,341</p>
              <p>retail agency relationships</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-400">/ 7,325</p>
              <p>employees worldwide  </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-sky-400"> / 1,514</p>
              <p>employee shareholders</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-sky-400">/ 1.7M</p>
              <p>Anual submissions</p>
            </div>
          </div>








  </div>

  <div className="bg-sky-600 absolute left-[53rem] w-[35%] h-screen"
  
  
  style={{ clipPath: "polygon(60% 0, 100% 0, 1000% 100%, 0 100%)" }}
  
  >
<img src="https://plus.unsplash.com/premium_photo-1661682621668-c126c4a060b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-full object-cover " />
  </div>
</div>




      <div className="md:w-[70%] mx-auto md:text-center  px-7 md:px-10  pt-10 md:pt-20">
        <h1 className="text-3xl  font-bold ">
          Where market intelligence meets wholesale expertise
        </h1>
        <p className="leading-loose py-10">
          Amwins understands your clients' businesses aren't static — they're
          complex and evolutionary in nature, and require future-focused
          insurance solutions that keep you a step ahead of risks. As a leading,
          global specialty insurance distributor, our unparalleled expertise
          spans 13 industry and risk specialty practices. Coupled with an
          extensive partnership network and granular analytics that drive every
          decision, Amwins uncovers the right insurance solutions for your
          clients — tackling today's obstacles, and anticipating tomorrow's
          challenges. Partnering with Amwins is more than a standard business
          transaction. Our team of specialists touts a deep bench of niche
          industry experts, each committed to strategizing and investing in your
          success. Comprised of five core divisions, 90+ underwriting programs
          and a worldwide reach, our dedicated practice groups, brokers and
          underwriters have the expertise, knowledge and relationships of the
          firm at their fingertips — giving you a distinct advantage. We value
          all segments and relationships equally, weaving collaboration into the
          fabric of our organization, within teams and across divisions. At
          Amwins, we believe in finding solutions together. Your challenges are
          our privilege. And when you win, we all win.
        </p>
      </div>
    </>
  );
}

export default Hero;
