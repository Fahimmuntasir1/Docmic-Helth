import React from "react";
import plus from "../../assests/tesimonial/Ornament 57.jpg";
import design from "../../assests/tesimonial/Ornament 24.jpg";
import man from "../../assests/tesimonial/Ikbal 1.png";

const Testimonial = () => {
  return (
    <section className="my-[112px]">
      <div className=" text-center">
        <p className="text-[16px] mb-3   text-[#642DFF] font-medium">
          Testimonial{" "}
        </p>
        <h2 className="text-[32px] text-[#1E1E1E] font-medium leading-[38px]">
          What they say?{" "}
        </h2>
      </div>
      <div className=" lg:w-[664px] mx-auto mt-[56px] bg-white lg:h-[314px] rounded-[10px]">
        <div className="rounded-[10px] p-[24px] text-left lg:flex items-center justify-between relative">
          <div>
            <h3 className="text-[14px] text-[#222222]">David Jeams</h3>
            <span className="text-[12px] text-[#000] font-normal">Patient</span>
            <p className="mt-[14px] text-[#575757] lg:w-[382px] text-justify">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it is a long established fact that a reader will be distracted by
              the readable content{" "}
            </p>
            <img className="lg:absolute lg:left-[6px]" src={plus} alt="" />
          </div>
          <div>
            <img className="absolute  top-0 right-0" src={design} alt="" />
            <img
              className="lg:w-[228px] lg:h-[228px] hidden lg:block mx-auto"
              src={man}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
