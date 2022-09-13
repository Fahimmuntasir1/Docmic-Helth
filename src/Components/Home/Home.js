import React from "react";
import Experience from "../Experience/Experience";
import FaQ from "../FaQ/FaQ";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Banner />
      <Services />
      <Experience />
      <Feature />
      <FaQ />
      <Testimonial />
    </div>
  );
};

export default Home;
