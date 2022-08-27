import React from "react";

function HeroSection() {
  return (
    <>
      <div className="bg-[url('../../public/img-3.jpg')] bg-cover b -mt-24 md:-mt-32 lg:-mt-40 min-h-screen min-w-screen ">
        <div className="pt-12 md:pt-12 lg:py-12" />
        <div className="flex flex-col justify-evenly items-center h-[80vh] w-screen py-12">
          <div>
            <h1 className="pt-2 px-4 md:text-4xl lg:text-5xl text-3xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-t-pink via-t-purple to-t-orange animate-gradient-text py-4">
              Welcome to my Portfolio!
            </h1>

            <p className="text-white opacity-80 text-center px-6 text-xs">
              Note: Currently a work in progress but check out my Projects tab!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
