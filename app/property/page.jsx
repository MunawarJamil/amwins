import React from "react";

const InsuranceComponent = () => {
  return (<>
    <div
      className="flex  flex-col md:flex-row bg-blue-900 text-white h-auto md:h-[500px] w-[75%] "
      style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
    > 
      <div className="w-20 bg-black h-full skew-x-[-39deg] absolute left-[57rem] top-0"></div>
    
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Property Insurance
          </h1>
          <p className="text-base md:text-lg">
            Amwins' property specialists collaborate on risks and draw on our
            global network to deliver unmatched insurance solutions to our
            clients.
          </p>
        </div>
      </div>

      {/* Right Section */}
      
    </div>
    <div className="flex-1 absolute top-20  left-[50rem]">
    <div className="w-full h-full overflow-hidden " >
      <img
        src="https://www.freshbooks.com/wp-content/uploads/2022/02/types-of-accounts.jpg" 
        alt="Insurance"
        className="w-[80%] object-cover"
      />
    </div>
    </div>
  </>);
};

export default InsuranceComponent;
