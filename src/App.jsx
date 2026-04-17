import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App