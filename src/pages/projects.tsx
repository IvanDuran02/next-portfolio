/* eslint-disable @next/next/no-img-element */
import Cards from "../backend/data";
import Link from "next/link";
import { useState } from "react";
function ProjectPage() {
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FslagvilleProject.669fb9d5.png&w=3840&q=75 slagville image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FglassProject.133bf4ff.png&w=3840&q=75 glass image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmediumProject.589900d1.png&w=3840&q=75 medium image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwujuProject.ebac9899.png&w=3840&q=75 wuju image link

  // onClick open the description of the project

  const [toggle, setToggle] = useState(0);

  const clickHandler = (e: any, projectID: any) => {
    if (toggle === projectID) {
      setToggle(0);
      return;
    }
    setToggle(projectID);
  };

  return (
    <div className="bg-slate-50 w-screen h-auto flex justify-center items-center flex-wrap transition-all">
      <div className="max-w-[1500px] flex flex-wrap justify-center z-10">
        {Cards.ProjectCards.map((card) => (
          <div key={card.id}>
            <div className="bg-white flex flex-col m-8 hover:scale-105 cursor-pointer transition-all w-[360px] p-4 justify-start items-center text-center h-auto min-h-[450px] overflow-hidden border-2 rounded-md border-[#171717] shadow-2xl">
              <Link href={card.link} target="_blank">
                <h1 className="pt-2 font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-slate-600 via-red-500 to-black animate-gradient-text py-4">
                  {card.title}
                </h1>
              </Link>

              <img
                src={card.image}
                alt={card.title}
                className="w-[360px] h-auto rounded-md"
              />
              <div className="max-w-[430px] flex-grow">
                {toggle === card.id ? (
                  <div className="p-4 pt-4">{card.description}</div>
                ) : (
                  <div className="p-2 pt-4 font-bold min-h-[6rem]">
                    {card.headline}
                  </div>
                )}
                <div
                  onClick={(e) => clickHandler(e, card.id)}
                  className="pt-2 cursor-pointer font-semibold text-center hover:underline opacity-50 hover:opacity-90 transition-all"
                >
                  {toggle === card.id ? `Hide...` : `Read more...`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
