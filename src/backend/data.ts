import glass from "../../public/glassProject.png";
import slagville from "../../public/slagvilleProject.png";
import wuju from "../../public/wujuProject.png";
import medium from "../../public/mediumProject.png";

const Cards = {
  ProjectCards: [
    {
      id: 1,
      title: "Glass Design Project",
      headline: "Created with - Html, CSS, Javascript",
      description:
        "Simple design project with no functionality. I made it because I wanted to familiarize myself with the glass morphism design style.",
      image:
        "https://ivans-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FglassProject.133bf4ff.png&w=3840&q=75",
      link: "https://glasswebsite.vercel.app/",
    },
    {
      id: 2,
      title: "Slagville",
      headline: "Created with - React, Tailwind, Typescript, MongoDB",
      description:
        "Project I made for fun to show some friends. For the most part its a static blog-like site, but I was a bit more ambitious with the project and added a chatting functionality. I used a database to store messages from a post form on the front-end. I also Discord for OAuth2 authentication.",
      image:
        "https://ivans-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FslagvilleProject.669fb9d5.png&w=3840&q=75",
      link: "https://slagville.vercel.app/",
    },
    {
      id: 3,
      title: "Create React Project",
      headline: "Created with - React",
      description:
        "One of the first sites I made with React following a tutorial.",
      image:
        "https://ivans-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwujuProject.ebac9899.png&w=3840&q=75",
      link: "https://wujulikeacoach.vercel.app/",
    },
    {
      id: 4,
      title: "Medium Clone",
      headline: "Created with - React, TypeScript, Tailwind, SanityCMS",
      description:
        "Clone of the Medium blogging site that uses Sanity.io as a CMS.",
      image:
        "https://ivans-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmediumProject.589900d1.png&w=3840&q=75",
      link: "https://ivan-medium-clone.vercel.app/",
    },
  ],
};

export default Cards;
