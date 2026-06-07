import { HOME_PROJECTS_INTRO } from "@/features/home/home-data";
import React from "react";

const ProjectsHeader = () => {
  return (
    <div className="container mx-auto">
      <h4 className="py-10 text-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        پروژه های <span className="text-content-gray"> ما</span>
      </h4>
      <p className="text-center text-content-gray">{HOME_PROJECTS_INTRO}</p>
    </div>
  );
};

export default ProjectsHeader;
