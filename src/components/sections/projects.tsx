"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "app" | "ui/ux" | "ml/dl">("all");

  const filteredProjects = DATA.projects.filter((project) => {
    if (!project.active) return false;
    if (filter === "all") return true;
    return project.category === filter;
  });

  const PROJECTS_DELAY = BLUR_FADE_DELAY * 13;

  return (
    <section id="projects" className="pt-6">
      <div className="space-y-8 w-full">
        <BlurFade delay={PROJECTS_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground text-sm/relaxed xl:text-base/relaxed">
                A showcase of my projects in Web Development, App Development, UI/UX, and ML/DL.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Filter Buttons */}
        <div className="flex justify-center">
          <BlurFade delay={PROJECTS_DELAY + 0.05}>
            <div className="flex gap-1 bg-muted/40 p-1 rounded-full border">
              {[
                { value: "all", label: "All" },
                { value: "web", label: "Web" },
                { value: "ui/ux", label: "UI/UX" },
                { value: "app", label: "App" },
                { value: "ml/dl", label: "ML/DL" },
              ].map((tab) => {
                const active = filter === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setFilter(tab.value as any)}
                    className={
                      "px-3 py-1 text-xs sm:text-sm rounded-full transition-all duration-200 " +
                      (active
                        ? "bg-foreground text-background shadow-sm scale-[1.03]"
                        : "text-muted-foreground hover:bg-muted scale-[0.98]")
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </BlurFade>
        </div>

        {/* Project Grid */}
        <div className="min-h-[200px] flex flex-col items-center">
          {filteredProjects.length === 0 ? (
            <div className="mt-12 flex flex-col items-center text-center text-muted-foreground">
              <span className="text-3xl mb-3">📄</span>
              <p className="text-sm font-medium text-foreground">No projects available</p>
              <p className="text-xs text-muted-foreground mt-1">
                This category doesn’t have any projects yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
              {filteredProjects.map((project, id) => (
                <BlurFade key={project.title + id} delay={PROJECTS_DELAY + id * 0.05}>
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                    openSource={project.openSource}
                    category={project.category}
                  />
                </BlurFade>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}