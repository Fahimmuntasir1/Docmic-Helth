import React from "react";
import fAq from "../../assests/FaQ/Frame 21.png";

const FaQ = () => {
  return (
    <section className="flex mt-[56px] pt-[10px] justify-between">
      <div>
        <div>
          <p className="text-[16px] text-[#642DFF] font-medium">
            FAQ Questions{" "}
          </p>
          <h2 className="text-[32px] text-[#1E1E1E] font-medium leading-[38px]">
            Get Your General Answer{" "}
          </h2>
        </div>
        <div>FaQ</div>
      </div>
      <div>
        <img src={fAq} alt="" />
      </div>
    </section>
  );
};

export default FaQ;
