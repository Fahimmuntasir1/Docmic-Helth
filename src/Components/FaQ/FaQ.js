import React from "react";
import fAq from "../../assests/FaQ/Frame 21.png";

import { FaPlus } from "react-icons/fa";
const FaQ = () => {
  return (
    <section className="flex items-center mt-[56px] pt-[10px] justify-between">
      <div>
        <div>
          <p className="text-[16px] text-[#642DFF] font-medium mb-3">
            FAQ Questions{" "}
          </p>
          <h2 className="text-[32px] text-[#1E1E1E] font-medium leading-[38px]">
            Get Your General Answer{" "}
          </h2>
        </div>
        <div className="grid place-items-center w-[579px]">
          <div className="mx-auto my-5"></div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex justify-between items-center h-16">
              <h3>Get Your General Answer</h3>
              <FaPlus />
            </div>

            <div className="accordion-content pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex justify-between items-center h-16">
              <h3>Will I always see my own doctor?</h3>
              <FaPlus />
            </div>

            <div className="accordion-content pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex justify-between items-center h-16">
              <h3>What is one Medical’s care?</h3>
              <FaPlus />
            </div>

            <div className="accordion-content pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex justify-between items-center h-16">
              <h3>What is evidence based medicine?</h3>
              <FaPlus />
            </div>

            <div className="accordion-content pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex justify-between items-center h-16">
              <h3>What is an academic medical center?</h3>
              <FaPlus />
            </div>

            <div className="accordion-content pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={fAq} alt="" />
      </div>
    </section>
  );
};

export default FaQ;
