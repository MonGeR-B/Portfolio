import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import ServicesSummary from "./sections/ServicesSummary";
import Services from "./sections/Services";
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <ReactLenis root className='relative w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <ServicesSummary />
      <Services />
    </ReactLenis>
  );
};

export default App