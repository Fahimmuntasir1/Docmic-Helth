import React from "react";

const Navbar = () => {
  /* const button = document.querySelector("#menu-button");
  const menu = document.querySelector("#menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  }); */
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 bg-[#F7F7F7] mr-6">
          <p class="font-semibold text-xl tracking-tight">
            {" "}
            <span className="text-[#2D89FF]">Doc</span>
            <span className="text-[#642DFF]">mic</span>{" "}
          </p>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white"
            id="navbar-btn"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full block lg:flex lg:items-center lg:w-auto "
          id="navbar"
        >
          <div class="text-sm lg:flex-grow  text-center lg:text-right">
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
            >
              Home
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
            >
              About
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
            >
              Department
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
            >
              Page
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] mr-8 text-lg"
            >
              Blog
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#2D89FF] text-lg"
            >
              Contacts
            </a>
          </div>
        </div>
        <div>
          <a
            href="/"
            class="inline-block px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:bg-[#5ca3ff] bg-[#2D89FF] mt-4 lg:mt-0 ml-3"
          >
            Free Consulation
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
