import React from "react";

function HeroSection() {
  return (
    <>
      <div className="bg-[#171717] w-screen h-screen flex flex-col justify-inbetween items-center">
        <div className="pt-8" />
        <h1 className="pt-2 px-4 text-3xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-t-pink via-t-purple to-t-orange animate-gradient-text py-4">
          Welcome to my Portfolio!
        </h1>
        <p className="text-white opacity-80 text-center px-6 text-xs">
          Note: Currently a work in progress but check out my Projects tab!
        </p>
      </div>
    </>
  );
}

export default HeroSection;
