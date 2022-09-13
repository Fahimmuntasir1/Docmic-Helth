import React from "react";
import vector1 from "../../assests/footer/Vector (5).png";
import vector2 from "../../assests/footer/Vector (6).png";
import vector3 from "../../assests/footer/Vector (7).png";
import vector4 from "../../assests/footer/Vector (8).png";
import vector5 from "../../assests/footer/Vector (9).png";

const Footer = () => {
  return (
    <footer className="bg-[#E9EEF7]  mt-[56px] py-[42px]">
      <div className="w-10/12 mx-auto lg:flex justify-between">
        <div>
          <p class="font-semibold text-xl tracking-tight">
            {" "}
            <span className="text-[#2D89FF]">Doc</span>
            <span className="text-[#642DFF]">mic</span>{" "}
          </p>
          <p className="w-[237px] text-justify mt-4">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has bee
          </p>
          <div className="order-last lg:block hidden">
            <div className="flex my-9">
              <img className="w-[25px] mr-[16px]" src={vector1} alt="" />
              <img className="w-[25px] mr-[16px]" src={vector2} alt="" />
              <img className="w-[25px] mr-[16px]" src={vector3} alt="" />
              <img className="w-[25px] mr-[16px]" src={vector4} alt="" />
              <img className="w-[25px]" src={vector5} alt="" />
            </div>
            <p className="text-[12px]">
              Copyright @222 Medicom All Rights Reserved
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#642DFF] text-[14px] mb-4">Quick Links</h3>
          <a className="mb-[15px] text-sm" href="/">
            About Us
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Our Pricing
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Our Gallery
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Appointment
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col mt-9">
          <a className="mb-[15px] text-sm" href="/">
            Services
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Our Doctors
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Our Latest News
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Careers
          </a>
          <a className="mb-[15px] text-sm" href="/">
            Contact Us
          </a>
        </div>
        <div>
          <h3 className="text-[#642DFF] mb-4 text-[14px]">Opening Hours</h3>
          <p className="text-[13px] mb-[15px]">
            <span className="text-[#2D89FF] mr-4">Mon- Tue</span>
            <span className="text-[#575757]">08:00 AM- 05:00 PM</span>
          </p>
          <p className="text-[13px] mb-[15px]">
            <span className="text-[#2D89FF] mr-4">Mon- Tue</span>
            <span className="text-[#575757]">08:00 AM- 05:00 PM</span>
          </p>
          <p className="text-[13px] mb-[15px]">
            <span className="text-[#2D89FF] mr-4">Mon- Tue</span>
            <span className="text-[#575757]">08:00 AM- 05:00 PM</span>
          </p>
          <p className="text-[13px] mb-[15px]">
            <span className="text-[#2D89FF] mr-4">Mon- Tue</span>
            <span className="text-[#575757]">08:00 AM- 05:00 PM</span>
          </p>
          <p className="text-[13px]">
            <span className="text-[#2D89FF] mr-4">Mon- Tue</span>
            <span className="text-[#575757]">08:00 AM- 05:00 PM</span>
          </p>
        </div>
        <div className="order-last block lg:hidden">
          <div className="flex my-9">
            <img className="w-[25px] mr-[16px]" src={vector1} alt="" />
            <img className="w-[25px] mr-[16px]" src={vector2} alt="" />
            <img className="w-[25px] mr-[16px]" src={vector3} alt="" />
            <img className="w-[25px] mr-[16px]" src={vector4} alt="" />
            <img className="w-[25px]" src={vector5} alt="" />
          </div>
          <p className="text-[12px]">
            Copyright @222 Docmic All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
