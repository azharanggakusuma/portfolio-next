"use client";

import { useState } from "react";
import { Mail, FileText } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { EducationCard } from "@/components/education-card";
import { GroupedAcademicCard } from "@/components/grouped-academic-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { UrlObject } from "url";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [filter, setFilter] = useState<
    "all" | "web" | "app" | "ui/ux" | "ml/dl"
  >("all");

  // Logika Filter
  const filteredProjects = DATA.projects.filter((project) => {
    if (!project.active) return false;
    if (filter === "all") return true;
    return project.category === filter;
  });

  const HERO_DELAY = BLUR_FADE_DELAY;
  const ABOUT_DELAY = BLUR_FADE_DELAY * 3;
  const SKILLS_DELAY = BLUR_FADE_DELAY * 5;
  const WORK_DELAY = BLUR_FADE_DELAY * 7;
  const EDUCATION_DELAY = BLUR_FADE_DELAY * 9;
  const ACADEMIC_DELAY = BLUR_FADE_DELAY * 11;
  const PROJECTS_DELAY = BLUR_FADE_DELAY * 13;
  const CONTACT_DELAY = BLUR_FADE_DELAY * 15;

  // --- LOGIC PENGELOMPOKAN DATA (Grouping) ---

  // 1. Grouping untuk Trainings
  const groupedTrainings = DATA.trainings.reduce(
    (acc, item) => {
      const existingGroup = acc.find((group) => group.school === item.school);
      if (existingGroup) {
        existingGroup.items.push(item);
      } else {
        acc.push({
          school: item.school,
          logoUrl: item.logoUrl,
          href: item.href,
          items: [item],
        });
      }
      return acc;
    },
    [] as Array<{
      school: string;
      logoUrl: string;
      href: string;
      items: (typeof DATA.trainings)[number][];
    }>
  );

  // 2. Grouping untuk Academic Experience
  const groupedAcademicExperience = DATA.academicExperience.reduce(
    (acc, item) => {
      const existingGroup = acc.find((group) => group.school === item.school);
      if (existingGroup) {
        existingGroup.items.push(item);
      } else {
        acc.push({
          school: item.school,
          logoUrl: item.logoUrl,
          href: item.href,
          items: [item],
        });
      }
      return acc;
    },
    [] as Array<{
      school: string;
      logoUrl: string;
      href: string;
      items: (typeof DATA.academicExperience)[number][];
    }>
  );

  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* --- HERO SECTION --- */}
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between flex-col-reverse md:flex-row">
            <div className="justify-center flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={HERO_DELAY}>
                <p className="mx-auto md:mx-0 text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                  Hi, I&apos;m {DATA.name}{" "}
                  <span className="inline-block">👋</span>
                </p>
              </BlurFade>
              <BlurFade delay={HERO_DELAY + 0.05}>
                <Markdown className="text-center md:text-start max-w-[600px] text-pretty font-sans md:text-lg">
                  {DATA.description}
                </Markdown>
              </BlurFade>

              {/* TOMBOL ACTION */}
              <BlurFade delay={HERO_DELAY + 0.1}>
                <div className="flex gap-2 justify-center md:justify-start mt-4">
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full sm:w-auto flex items-center gap-2"
                    )}
                  >
                    <Mail className="size-4" />
                    Contact Me
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full sm:w-auto flex items-center gap-2"
                    )}
                  >
                    <FileText className="size-4" />
                    Download CV
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={HERO_DELAY}>
              <Avatar className="size-36 mx-auto">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="pt-6">
        <BlurFade delay={ABOUT_DELAY}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={ABOUT_DELAY + 0.05}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={SKILLS_DELAY}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name + id} delay={SKILLS_DELAY + id * 0.05}>
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  <skill.icon className="h-4 w-4" />
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={WORK_DELAY}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company + id} delay={WORK_DELAY + id * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                location={work.location}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={EDUCATION_DELAY}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school + id}
              delay={EDUCATION_DELAY + id * 0.05}
            >
              <EducationCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* --- ACADEMIC EXPERIENCE SECTION --- */}
      <section id="academic-experience" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={ACADEMIC_DELAY}>
            <h2 className="text-xl font-bold">Academic Experience</h2>
          </BlurFade>

          {groupedAcademicExperience.map((group, id) => (
            <BlurFade
              key={group.school + id}
              delay={ACADEMIC_DELAY + id * 0.05}
            >
              <GroupedAcademicCard
                school={group.school}
                logoUrl={group.logoUrl}
                href={group.href}
                items={group.items}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* --- TRAINING & CERTIFICATES SECTION --- */}
      <section id="certifications" className="pt-6">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Training & Certifications</h2>
          </BlurFade>

          {groupedTrainings.map((group, id) => (
            <BlurFade
              key={group.school + id}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <GroupedAcademicCard
                school={group.school}
                logoUrl={group.logoUrl}
                href={group.href}
                items={group.items}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
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
                  A showcase of my projects in Web Development, App Development,
                  UI/UX, and ML/DL.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Filter Tabs */}
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
                      onClick={() =>
                        setFilter(
                          tab.value as "all" | "web" | "app" | "ui/ux" | "ml/dl"
                        )
                      }
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
                <p className="text-sm font-medium text-foreground">
                  No projects available
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  This category doesn’t have any projects yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
                {filteredProjects.map((project, id) => (
                  <BlurFade
                    key={project.title + id}
                    delay={PROJECTS_DELAY + id * 0.05}
                  >
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

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="pt-6">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={CONTACT_DELAY}>
            <div className="space-y-7">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m always open to new opportunities and collaborations.
                  Feel free to reach out to me if you have any questions or just
                  want to chat.
                </p>
              </div>
              <div className="flex justify-center">
                <BlurFade delay={CONTACT_DELAY + 0.05}>
                  <div className="flex gap-5 flex-wrap">
                    {Object.entries(DATA.contact.social)
                      .filter(([_, social]) => social.contact)
                      .map(([name, social], index) => (
                        <Tooltip key={name + index}>
                          <TooltipTrigger asChild>
                            <Link
                              href={social.url as unknown as UrlObject}
                              aria-label={`Visit my ${name} profile`}
                              className="text-foreground/60 hover:text-foreground transition-colors"
                            >
                              <social.icon className="size-7" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}