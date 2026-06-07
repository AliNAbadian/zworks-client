import Radial from "../shared/effects/Radial";
import ProjectsCard from "./OurProjects/ProjectsCard";
import ProjectsHeader from "./OurProjects/ProjectsHeader";
import { homeProjects } from "@/features/home/home-data";

const OurProjects = () => {
  return (
    <section className="relative my-10 min-h-screen font-iransans">
      <div className="container mx-auto">
        <ProjectsHeader />
      </div>
      <Radial
        className="absolute start-[20%] top-[5%] -z-10"
        size="70rem"
        color="rgba(0, 178, 98, 0.35)"
        transparency={60}
      />
      <Radial
        className="absolute start-[75%] top-[45%] -z-10"
        size="48rem"
        color="rgba(15, 110, 167, 0.25)"
        transparency={80}
      />
      <div className="container mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {homeProjects.map((project) => (
          <ProjectsCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
