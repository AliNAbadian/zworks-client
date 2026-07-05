"use client";

import { useMemo, useState } from "react";

import ProjectsCard from "@/components/ui/OurProjects/ProjectsCard";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  PROJECTS_GRID_INTRO,
  projectFilters,
  projectItems,
} from "@/features/projects/projects-data";
import type { ProjectCategoryId } from "@/features/projects/projects-model";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ProjectsGridSection = () => {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectCategoryId>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectItems;
    return projectItems.filter((project) => project.categoryId === activeFilter);
  }, [activeFilter]);

  return (
    <section className="container mx-auto px-4 md:px-6" id="projects-grid">
      <ScrollReveal>
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
            {PROJECTS_GRID_INTRO.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
            {PROJECTS_GRID_INTRO.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div
          aria-label="فیلتر دسته‌بندی پروژه‌ها"
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="tablist"
        >
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                aria-selected={isActive}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow] duration-200",
                  isActive
                    ? "border-primary/50 bg-primary text-primary-foreground shadow-[0_8px_32px_-8px_rgb(var(--primary-rgb)/0.55)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/10 hover:text-white",
                )}
                onClick={() => setActiveFilter(filter.id)}
                role="tab"
                type="button"
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12"
        layout={!reduceMotion}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              animate={{ opacity: 1, scale: 1 }}
              className={cn(
                "h-full",
                project.featured
                  ? "lg:col-span-6"
                  : "lg:col-span-4",
              )}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, scale: 0.96, transition: { duration: 0.2 } }
              }
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              layout={!reduceMotion}
              transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
            >
              <ProjectsCard
                category={project.category}
                categoryLabel="دسته‌بندی:"
                coverAlt={project.coverAlt}
                coverImage={project.coverImage}
                ctaLabel={project.ctaLabel}
                date={project.date}
                dateLabel="زمان اجرا"
                description={project.description}
                href={project.href}
                title={project.title}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 ? (
        <p className="mt-12 text-center text-content-gray">
          پروژه‌ای در این دسته‌بندی یافت نشد.
        </p>
      ) : null}
    </section>
  );
};

export default ProjectsGridSection;
