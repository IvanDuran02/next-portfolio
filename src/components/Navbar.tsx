import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-[#171717] flex flex-col justify-inbetween items-center">
      <div className="text-white flex space-x-6 py-8 md:py-12 lg:py-16 text-xl">
        <Link href="./">
          <h3 className="hover:scale-110 transition-all cursor-pointer hover:text-t-red">
            Home
          </h3>
        </Link>
        <Link href="./projects">
          <h3 className="hover:scale-110 transition-all cursor-pointer hover:text-t-red">
            Projects
          </h3>
        </Link>
        <Link href="./blogs">
          <h3 className="hover:scale-110 transition-all cursor-pointer hover:text-t-red">
            Blogs
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
