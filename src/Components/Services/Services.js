import React from "react";
import img5 from "../../assests/services/Vector (5).png";
import img6 from "../../assests/services/Vector (6).png";
import img7 from "../../assests/services/Vector (7).png";
import img8 from "../../assests/services/Vector (8).png";

const Services = () => {
  return (
    <section>
      <div className="text-center">
        <p className="text-[16px] text-[#642DFF] font-medium">Our Services</p>
        <h2 className="text-[32px] text-[#1E1E1E]">Services For Your Health</h2>
      </div>
      <div className="lg:flex mt-[28px] gap-[21px] justify-center">
        <div className="w-[236px] h-[152px] border p-[12px]">
          <div className="flex justify-between mb-[12px]">
            <h3 className="text-[12px] text-[#1E1E1E]">Cardiology</h3>
            <img className="w-[18px] h-[22px]" src={img5} alt="" />
          </div>
          <p className="text-[14px] text-[#575757] mb-[24px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-[16px] text-[#1E1E1E]">Explore Now</button>
        </div>
        <div className="w-[236px] h-[152px] border p-[12px]">
          <div className="flex justify-between mb-[12px]">
            <h3 className="text-[12px] text-[#1E1E1E]">Monthly Check Up</h3>
            <img className="w-[18px] h-[22px]" src={img6} alt="" />
          </div>
          <p className="text-[14px] text-[#575757] mb-[24px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-[16px] text-[#1E1E1E]">Explore Now</button>
        </div>
        <div className="w-[236px] h-[152px] border p-[12px]">
          <div className="flex justify-between mb-[12px]">
            <h3 className="text-[12px] text-[#1E1E1E]">Dental Care</h3>
            <img className="w-[18px] h-[22px]" src={img7} alt="" />
          </div>
          <p className="text-[14px] text-[#575757] mb-[24px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-[16px] text-[#1E1E1E]">Explore Now</button>
        </div>
        <div className="w-[236px] h-[152px] border p-[12px]">
          <div className="flex justify-between mb-[12px]">
            <h3 className="text-[12px] text-[#1E1E1E]">Ophthalmology</h3>
            <img className="w-[18px] h-[22px]" src={img8} alt="" />
          </div>
          <p className="text-[14px] text-[#575757] mb-[24px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-[16px] text-[#1E1E1E]">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
