import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import ServicesSummary from "./sections/ServicesSummary";
import Services from "./sections/Services";
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./sections/About";
import Works from "./sections/Works";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <ReactLenis root className='relative w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <ServicesSummary />
      <Services />
      <About />
      <Works />
    </ReactLenis>
  );
};

export default App