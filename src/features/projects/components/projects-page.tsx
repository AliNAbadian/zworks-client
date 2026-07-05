import ProjectsCtaSection from "@/features/projects/components/projects-cta-section";
import ProjectsGridSection from "@/features/projects/components/projects-grid-section";
import ProjectsHero from "@/features/projects/components/projects-hero";
import ProjectsLensSection from "@/features/projects/components/projects-lens-section";
import ProjectsProcessSection from "@/features/projects/components/projects-process-section";
import ProjectsStatsSection from "@/features/projects/components/projects-stats-section";

const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <ProjectsHero />
      <ProjectsStatsSection />
      <ProjectsGridSection />
      <ProjectsLensSection />
      <ProjectsProcessSection />
      <ProjectsCtaSection />
    </div>
  );
};

export default ProjectsPage;
