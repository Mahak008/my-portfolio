import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({ imgURL, title, desc, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#181818]">
      <div
        style={{ background: `url(${imgURL})`, backgroundSize: "cover", backgroundPosition: "center" }}
        className="h-52 md:h-72 relative group"
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <IoEyeOutline className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white py-6 px-4 bg-[#181818]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
