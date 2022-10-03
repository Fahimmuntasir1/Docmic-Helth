import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className=" flex items-center justify-between p-6 w-10/12 mx-auto">
      <div className="flex items-center flex-shrink-0 mr-6">
        <p className="font-semibold text-xl tracking-tight">
          {" "}
          <span className="text-[#2D89FF]">Doc</span>
          <span className="text-[#642DFF]">mic</span>{" "}
        </p>
      </div>
      <div onClick={() => setActive(!active)}>
        {active ? (
          <button
            className="block lg:hidden items-center px-3 py-2 border rounded text-teal-400 border-teal-400"
            id="navbar-btn"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        ) : (
          <button
            className="block lg:hidden flex items-center px-3 py-2 border rounded text-black"
            id="navbar-btn"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`w-full left-0 text-center mx-auto block lg:flex lg:items-center lg:w-auto lg:static justify-between absolute duration-300 ease-in ${
          active
            ? "top-16 bg-gradient-to-r from-[#90d4ed] to-[#eb90edd7]"
            : "top-[-350px] "
        }
        `}
        id="navbar"
      >
        <div className=" text-sm lg:flex-grow text-center lg:text-right">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
          >
            Home
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
          >
            About
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
          >
            Department
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
          >
            Page
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
          >
            Blog
          </a>
          <a
            href="/"
            className="block my-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] text-lg"
          >
            Contacts
          </a>
        </div>
        <div className="lg:hidden block mb-4">
          <a
            href="/"
            className="inline-block px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:bg-[#5ca3ff] bg-[#2D89FF]  lg:mt-0 ml-3"
          >
            Free Consultation
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <a
          href="/"
          className="inline-block px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:bg-[#5ca3ff] bg-[#2D89FF] mt-4 lg:mt-0 ml-3"
        >
          Free Consulation
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
