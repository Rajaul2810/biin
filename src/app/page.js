import AboutUs from "./Components/AboutUs";
import Activities from "./Components/Activities";
import Benefits from "./Components/Benefits";
import Counter from "./Components/Counter";
import Glance from "./Components/Glance";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import WhyJoin from "./Components/WhyJoin";
import Contact from "./contact/page";
import Partner from "./partner/page";
import Membership from "./Components/Membership";
import Trustees from "./Components/Trustees";


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Mission />
      <Activities />
      <Trustees />
      <Benefits />
      <Membership />
      <Glance />
      <Counter />
      {/* <WhyJoin /> */}
      <Partner />
      <Contact />
    </div>
  );
}
