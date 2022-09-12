import React from "react";
import pose from "../../assests/experience/pose_4.png";
import shape from "../../assests/experience/Ellipse 11.png";
import shadow from "../../assests/experience/Ellipse 10.png";
import bloodPressure from "../../assests/experience/Blood Pressure.png";
import FirstAid from "../../assests/experience/First Aid.png";
import Plastrer from "../../assests/experience/Plastrer.png";

const Experience = () => {
  return (
    <section className="flex mt-[46px] pt-[10px] justify-between">
      <div className="w-[579px]">
        <p className="text-[16px] text-[#642DFF] font-medium">
          16+ Years Experiences{" "}
        </p>
        <h2 className="text-[32px] text-[#1E1E1E] leading-[38px]">
          We Are Always ensure Best Medical Treatment For Your Health
        </h2>
        <p className="mt-[14px] text-justify leading-[21px] text-[14px]">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look lik
        </p>
      </div>
      <div className="relative">
        <img
          className="absolute -top-[10px] right-[23px]"
          src={bloodPressure}
          alt="people"
        />
        <img
          className="absolute right-[76px] top-[29px] left-[23px]"
          src={FirstAid}
          alt="people"
        />
        <img className="absolute right-[76px] top-0" src={shape} alt="people" />
        <img className="relative z-10" src={pose} alt="people" />
        <img className="absolute bottom-4 -z-0" src={shadow} alt="people" />
        <img
          className="absolute bottom-[89px] left-[86px] "
          src={Plastrer}
          alt="people"
        />
      </div>
    </section>
  );
};

export default Experience;