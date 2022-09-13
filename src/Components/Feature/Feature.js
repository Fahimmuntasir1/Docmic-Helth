import React from "react";
import feature from "../../assests/feature/Frame 22.png";
import img8 from "../../assests/feature/image 8.png";
import img7 from "../../assests/feature/image 7.png";
import img6 from "../../assests/feature/image 6.png";
import img5 from "../../assests/feature/image 5.png";

const Feature = () => {
  return (
    <section className="flex items-center mt-[46px] pt-[10px] justify-between">
      <div>
        <img className="w-[321px] h-[345px]" src={feature} alt="" />
      </div>
      <div className="-w-[579px]">
        <p className="text-[16px] mb-3 text-[#642DFF] font-medium">
          Our Hospital Feature
        </p>
        <h2 className="text-[32px] text-[#1E1E1E] leading-[38px] font-medium">
          Make An Appointment Easy And Fast Services{" "}
        </h2>
        <div className="grid grid-cols-2 mt-[14px] ">
          <div className="w-[280px] p-[12px]">
            <div className="flex justify-between mb-[12px]">
              <h3>24 Hours Doctor Support</h3>
              <img className="w-[25px]" src={img5} alt="" />
            </div>
            <p className="text-[14px] text-[#1E1E1E] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="w-[280px] p-[12px]">
            <div className="flex justify-between mb-[12px]">
              <h3>Exclusive Supports</h3>
              <img className="w-[25px]" src={img6} alt="" />
            </div>
            <p className="text-[14px] text-[#1E1E1E] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="w-[280px] p-[12px]">
            <div className="flex justify-between mb-[12px]">
              <h3>Friendly Environment </h3>
              <img className="w-[25px]" src={img7} alt="" />
            </div>
            <p className="text-[14px] text-[#1E1E1E] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="w-[280px] p-[12px]">
            <div className="flex justify-between">
              <h3>24 Hours Nurse Support</h3>
              <img className="w-[25px]" src={img8} alt="" />
            </div>
            <p className="text-[14px] text-[#1E1E1E] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
