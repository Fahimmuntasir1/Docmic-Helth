import React from "react";
import feature from "../../assests/feature/Frame 22.png";
import img8 from "../../assests/feature/image 8.png";
import img7 from "../../assests/feature/image 7.png";
import img6 from "../../assests/feature/image 6.png";
import img5 from "../../assests/feature/image 5.png";

const Feature = () => {
  return (
    <section className="lg:flex items-center mt-[46px] pt-[10px] justify-between">
      <div className="hidden lg:block">
        <img
          className="lg:w-[321px] lg:h-[345px] mx-auto"
          src={feature}
          alt=""
        />
      </div>
      <div className="lg:-w-[579px] ">
        <p className="text-[16px] mb-3 text-[#642DFF] font-medium">
          Our Hospital Feature
        </p>
        <h2 className="text-[32px] text-[#575757] leading-[38px] font-medium">
          Make An Appointment Easy And Fast Services{" "}
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-[14px] gap-[20px]">
          <div className="lg:w-[280px] p-[12px] bg-[#F7F7F7]">
            <div className="flex justify-between mb-[12px]">
              <h3>24 Hours Doctor Support</h3>
              <img className="w-[25px]" src={img5} alt="" />
            </div>
            <p className="text-[14px] text-[#575757]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="lg:w-[280px] p-[12px] bg-[#F7F7F7]">
            <div className="flex justify-between mb-[12px]">
              <h3>Exclusive Supports</h3>
              <img className="w-[25px]" src={img6} alt="" />
            </div>
            <p className="text-[14px] text-[#575757] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="lg:w-[280px] p-[12px] bg-[#F7F7F7]">
            <div className="flex justify-between mb-[12px]">
              <h3>Friendly Environment </h3>
              <img className="w-[25px]" src={img7} alt="" />
            </div>
            <p className="text-[14px] text-[#575757] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="lg:w-[280px] p-[12px] bg-[#F7F7F7]">
            <div className="flex justify-between">
              <h3>24 Hours Nurse Support</h3>
              <img className="w-[25px]" src={img8} alt="" />
            </div>
            <p className="text-[14px] text-[#575757] bg-[#F7F7F7]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden block ">
        <img
          className="lg:w-[321px] lg:h-[345px] mx-auto"
          src={feature}
          alt=""
        />
      </div>
    </section>
  );
};

export default Feature;
