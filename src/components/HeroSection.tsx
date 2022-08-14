import React from "react";

function HeroSection() {
  return (
    <>
      <div className="bg-[#171717] w-screen h-screen flex flex-col justify-inbetween items-center">
        <div className="pt-8" />
        <h1 className="pt-2 text-4xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-t-pink via-t-purple to-t-orange animate-gradient-text py-4">
          Welcome to my Portfolio!
        </h1>
        <h3 className="text-white opacity-80">
          Note: Currently a work in progress but check out my Projects tab!
        </h3>
      </div>
    </>
  );
}

export default HeroSection;
