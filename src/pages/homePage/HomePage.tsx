import React from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";

const HomePage = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="fixed mx-auto bg-white w-full z-40">
        <Header />
      </div>
      <div className="h-full">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
