import React from "react";
import AboutUs from "../Components/AboutUs";
import Mission from "../Components/Mission";
import Activities from "../Components/Activities";
import Benefits from "../Components/Benefits";
import WhyJoin from "../Components/WhyJoin";
import Trustees from "../Components/Trustees";

const About = () => {
  return (
    <div>
      <AboutUs />
      <Mission />
      <Activities />
      <Trustees />
      <Benefits />
      {/* <WhyJoin /> */}
    </div>
  );
};

export default About;
