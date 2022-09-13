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
    <section className="lg:flex justify-between mb-[90px]">
      <div>
        <h2 className="lg:text-[60px] text-[40px] lg:w-[576px] font-medium mt-[35px]">
          Your <span className="text-[#2D89FF]">Health</span> Is Our Top{" "}
          <span className="text-[#642DFF]">Priority</span>
        </h2>
        <p className="text-[16px] lg:w-[372px] mt-[14px] mb-[32px]">
          There are many variations of passages of lpsum available, but the
          majority hae suffered.
        </p>
        <button class="inline-block px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:bg-[#5ca3ff] bg-[#2D89FF] mt-4 lg:mt-0 mb-[56px]">
          Meet Our Specialist
        </button>
        <div className="flex mb-10">
          <div>
            <h2 className="text-[#642DFF] text-[24px] font-semibold lg:mr-20">
              262k+
            </h2>
            <p className="text-[#575757]">Recovered Patients</p>
          </div>
          <div>
            <h2 className="text-[#642DFF] text-[24px] font-semibold lg:mr-20">
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
      <div className="relative object-cover">
        <img className="object-cover absolute -z-10" src={shape} alt="" />
        <img className="object-cover mx-auto" src={pose} alt="" />
        <img
          className="object-cover absolute bottom-32 lg:-left-14"
          src={frame}
          alt=""
        />
        <div className="absolute lg:bottom-0 -bottom-10 lg:-right-14 right-0">
          <img className="object-cover relative" src={Rectangle} alt="" />
          <img
            className="object-cover absolute bottom-4 right-8"
            src={shape1}
            alt=""
          />
          <img
            className="object-cover absolute bottom-9 right-8"
            src={shape2}
            alt=""
          />
          <img
            className="object-cover absolute bottom-16 right-6"
            src={group}
            alt=""
          />
          <img
            className="object-cover absolute bottom-28 right-24"
            src={text}
            alt=""
          />
          <img
            className="object-cover absolute -bottom-14"
            src={Ornament}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
