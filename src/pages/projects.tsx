import React from "react";
import Cards from "../backend/data";
import slagville from "../../public/wujuProject.png";
import Image from "next/image";
function ProjectPage() {
  console.log(Cards.ProjectCards[1].image);
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FslagvilleProject.669fb9d5.png&w=3840&q=75 slagville image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FglassProject.133bf4ff.png&w=3840&q=75 glass image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmediumProject.589900d1.png&w=3840&q=75 medium image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwujuProject.ebac9899.png&w=3840&q=75 wuju image link

  return (
    <div className="bg-[#171717] w-screen h-screen flex justify-center items-center text-white flex-wrap text-center content-center">
      <div className="max-w-[80%] flex flex-wrap justify-center">
        {Cards.ProjectCards.map((card) => (
          <div className="flex flex-col m-8  hover:scale-125 transition-all">
            <h1 className="py-2">{card.title}</h1>
            <img src={card.image} alt={card.title} className="w-98 h-48" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
