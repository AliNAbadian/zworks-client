import React from "react";
import ProjectsHeader from "./OurProjects/ProjectsHeader";
import Radial from "../shared/effects/Radial";

const OurProjects = () => {
  return (
    <section className="my-10 min-h-screen relative ">
      <div className="container mx-auto">
        <ProjectsHeader />
      </div>
      <Radial
        className="absolute top-0 left-[20%] "
        size="80em"
        color="#00b262"
        transparency={50}
      />
      <Radial className="absolute inset-0 top-[45%] left-[75%]" />
    </section>
  );
};

export default OurProjects;
