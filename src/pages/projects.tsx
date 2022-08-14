/* eslint-disable @next/next/no-img-element */
import Cards from "../backend/data";
import Link from "next/link";
function ProjectPage() {
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FslagvilleProject.669fb9d5.png&w=3840&q=75 slagville image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FglassProject.133bf4ff.png&w=3840&q=75 glass image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmediumProject.589900d1.png&w=3840&q=75 medium image link
  // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwujuProject.ebac9899.png&w=3840&q=75 wuju image link

  return (
    <div className="bg-[#171717] w-screen h-auto flex justify-center items-center text-white flex-wrap text-center content-center">
      <div className="max-w-[80%] flex flex-wrap justify-center">
        {Cards.ProjectCards.map((card) => (
          <div key={card.id}>
            <Link href={card.link} target="_blank">
              <div className="flex flex-col m-8 hover:scale-110 cursor-pointer transition-all w-[420px] h-[500px] justify-start items-center text-center ">
                <h1 className="py-4 font-bold">{card.title}</h1>
                <div className="p-2" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[341px] h-48"
                />
                <p className="p-4 pt-4">{card.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
