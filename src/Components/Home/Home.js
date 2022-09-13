import React from "react";
import Experience from "../Experience/Experience";
import FaQ from "../FaQ/FaQ";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Services />
      <Experience />
      <Feature />
      <FaQ />
      <Testimonial />
    </div>
  );
};

export default Home;
