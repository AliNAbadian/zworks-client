import { HOME_PROJECTS_INTRO } from "@/features/home/home-data";

const ProjectsHeader = () => {
  return (
    <div className="container mx-auto">
      <h2 className="py-10 text-center font-black text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl">
        پروژه‌های{" "}
        <span className="text-content-gray">ما</span>
      </h2>
      <p className="text-center text-content-gray">{HOME_PROJECTS_INTRO}</p>
    </div>
  );
};

export default ProjectsHeader;
