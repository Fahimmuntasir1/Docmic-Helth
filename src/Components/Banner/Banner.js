import React from "react";
import pose from "../../assests/banner/pose_2.png";
import shape from "../../assests/banner/Ellipse 5.png";
import frame from "../../assests/banner/Frame 7.png";
import Rectangle from "../../assests/banner/Rectangle 2.png";
import shape1 from "../../assests/banner/Rectangle 4.png";
import shape2 from "../../assests/banner/Rectangle 5.png";
import group from "../../assests/banner/Group 3.png";
import text from "../../assests/banner/Meet Our Doctors.png";
import Ornament from "../../assests/banner/Ornament 19.png";

const Banner = () => {
  return (
    <section className="flex justify-between mb-[90px]">
      <div>
        <h2 className="text-[60px] w-[576px] font-medium mt-[35px]">
          Your <span className="text-[#2D89FF]">Health</span> Is Our Top{" "}
          <span className="text-[#642DFF]">Priority</span>
        </h2>
        <p className="text-[16px] w-[372px] mt-[14px] mb-[32px]">
          There are many variations of passages of lpsum available, but the
          majority hae suffered.
        </p>
        <button class="inline-block px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:bg-[#5ca3ff] bg-[#2D89FF] mt-4 lg:mt-0 mb-[56px]">
          Meet Our Specialist
        </button>
        <div className="flex">
          <div>
            <h2 className="text-[#642DFF] text-[24px] font-semibold mr-20">
              262k+
            </h2>
            <p className="text-[#575757]">Recovered Patients</p>
          </div>
          <div>
            <h2 className="text-[#642DFF] text-[24px] font-semibold mr-20">
              96%
            </h2>
            <p className="text-[#575757]">Satisfaction Rate</p>
          </div>
          <div>
            <h2 className="text-[#642DFF] text-[24px] font-semibold">86+</h2>
            <p className="text-[#575757]">Expert Doctors</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="absolute -z-10" src={shape} alt="" />
        <img className="" src={pose} alt="" />
        <img className="absolute bottom-32 -left-14" src={frame} alt="" />
        <div className="absolute bottom-0 -right-14">
          <img className="relative" src={Rectangle} alt="" />
          <img className="absolute bottom-4 right-8" src={shape1} alt="" />
          <img className="absolute bottom-9 right-8" src={shape2} alt="" />
          <img className="absolute bottom-16 right-6" src={group} alt="" />
          <img className="absolute bottom-28 right-24" src={text} alt="" />
          <img className="absolute -bottom-14" src={Ornament} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
